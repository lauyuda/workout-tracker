import { useExercisesContext } from '@/modules/data/hooks/exercises-context';
import { FILTER_TYPES } from '@/modules/exercise/constants';
import { useSearchAndFilter } from '@/modules/exercise/hooks/use-search-and-filter';
import { Exercise } from '@/modules/exercise/types';
import { useEffect, useMemo, useState } from 'react';

function sortByKey<T>(array: T[], key: string) {
  return array.sort(function (a: T, b: T) {
    const x = a[key as keyof typeof a];
    const y = b[key as keyof typeof b];
    return x < y ? -1 : x > y ? 1 : 0;
  });
}

export const useExercisesPage = () => {
  const { exercises: _exercises } = useExercisesContext();
  const [selectedSortByKey] = useState('name');
  const { query, setQuery, debouncedQuery, filterTypes, setFilterTypes } =
    useSearchAndFilter();

  const exercises = useMemo(() => {
    const filteredExercises = _exercises.filter((exercise) => {
      let isContainQuery = true;
      if (debouncedQuery) {
        isContainQuery = exercise.name
          .toLowerCase()
          .includes(debouncedQuery.toLowerCase());
      }

      if (
        filterTypes.length === 0 ||
        filterTypes.length === FILTER_TYPES.length
      ) {
        return isContainQuery;
      }

      const isFilterType = filterTypes.includes(exercise.type);

      return isContainQuery && isFilterType;
    });

    return sortByKey(filteredExercises, selectedSortByKey) as Exercise[];
  }, [_exercises, selectedSortByKey, debouncedQuery, filterTypes]);

  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(
    null
  );
  useEffect(
    function updateSelectedExercise() {
      if (exercises.some((exercise) => exercise.id === selectedExercise?.id)) {
        return;
      }

      setSelectedExercise(exercises[0]);
    },
    [exercises]
  );

  return {
    exercises,
    selectedExercise,
    setSelectedExercise,
    query,
    setQuery,
    filterTypes,
    setFilterTypes,
  };
};
