import { NextPage } from 'next/types';
import { ChangeEvent, useEffect, useMemo, useState } from 'react';
import { useDebounce } from '../common/hooks/use-debounce';
import { useExercisesContext } from '../data/hooks/exercises-context';
import { ExerciseShortened } from '../exercise/components/exercise-shortened';
import { Exercise } from '../exercise/types';
import { NavBar } from '../navbar/components/navbar';

function sortByKey<T>(array: T[], key: string) {
  return array.sort(function (a: T, b: T) {
    const x = a[key as keyof typeof a];
    const y = b[key as keyof typeof b];
    return x < y ? -1 : x > y ? 1 : 0;
  });
}
const FILTER_TYPES = ['bar', 'weights', 'bodyweight'];
const DEBOUNCE_DURATION = 500;

export const ExercisesPage: NextPage = () => {
  const { exercises: _exercises } = useExercisesContext();
  const [selectedSortByKey, setSelectedSortByKey] = useState('name');
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, DEBOUNCE_DURATION);
  const [filterTypes, setFilterTypes] = useState<string[]>([]);
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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(() => e.target.value);
  };

  return (
    <div>
      <NavBar />
      <h1>Exercises Page</h1>
      <div>To allow adding of exercise</div>
      <div className="h-full flex">
        <div className="w-1/2">
          <div>
            Sort by:{' '}
            <select onChange={(e) => setSelectedSortByKey(e.target.value)}>
              <option value="name">Name</option>
              <option value="id">Id</option>
            </select>
          </div>
          <input
            className="border p-1 focus:outline-none"
            type="search"
            placeholder="Search for exercise"
            value={query}
            onChange={(e) => handleChange(e)}
          />
          <div>
            {FILTER_TYPES.map((filterType) => {
              const isFiltered = filterTypes.includes(filterType);

              return (
                <button
                  key={filterType}
                  className={`p-2 border ${isFiltered ? 'bg-blue-200' : ''}`}
                  onClick={() => {
                    if (isFiltered) {
                      return setFilterTypes((prevFilterTypes) => {
                        const updatedFilterTypes = prevFilterTypes.filter(
                          (prevFilterType) => prevFilterType !== filterType
                        );

                        return [...updatedFilterTypes];
                      });
                    }

                    setFilterTypes((prevFilterTypes) => {
                      return [...prevFilterTypes, filterType];
                    });
                  }}
                >
                  {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
                </button>
              );
            })}
            <button
              className="px-6 py-1 border"
              onClick={() => {
                setQuery('');
                setFilterTypes([]);
              }}
            >
              Clear
            </button>
          </div>
          {exercises?.map((exercise) => {
            return (
              <ExerciseShortened
                key={exercise.id}
                exercise={exercise}
                isSelected={exercise.id === selectedExercise?.id}
                selectExercise={() => setSelectedExercise(exercise)}
              />
            );
          })}
          <button className="w-full h-16 pl-8 flex items-center bg-green-200 border border-green-500 rounded">
            Create new exercise
          </button>
        </div>
        <div className="sticky top-10 pl-10 border border-red-500 self-start">
          <label>Selected {selectedExercise?.name}</label>
          <iframe
            width="420"
            height="315"
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
          />
        </div>
      </div>
    </div>
  );
};
