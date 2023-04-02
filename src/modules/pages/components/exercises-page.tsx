import { NextPage } from 'next/types';
import { ExerciseShortened } from '../../exercise/components/exercise-shortened';
import { ExerciseShortenedSkeletal } from '../../exercise/components/exercise-shortened-skeletal';
import { NoExercise } from '../../exercise/components/no-exercise';
import { NavBar } from '../../navbar/components/navbar';
import { ExerciseInformation } from '../../exercise/components/exercise-information';
import { ExerciseFilter } from '../../exercise/components/exercise-filter';
import { ExerciseSearch } from '../../exercise/components/exercise-search';
import { useExercisesPage } from '../hooks/use-exercises-page';
import { ExerciseShortenedList } from '@/modules/exercise/components/exercise-shortened-list';

export const ExercisesPage: NextPage = () => {
  const {
    exercises,
    selectedExercise,
    setSelectedExercise,
    query,
    setQuery,
    filterTypes,
    setFilterTypes,
  } = useExercisesPage();

  return (
    <div>
      <NavBar />
      <div className="h-full grid grid-cols-1 md:grid-cols-2 gap-10 ">
        <div className="flex md:justify-end">
          <div className="w-full md:w-96">
            <div className="sticky top-[52px] pt-2 pb-2 md:pt-8 md:pb-4 bg-white border-t-4 border-white ">
              <ExerciseSearch
                filterTypes={filterTypes}
                setFilterTypes={setFilterTypes}
                query={query}
                setQuery={setQuery}
              />
              <ExerciseFilter
                filterTypes={filterTypes}
                setFilterTypes={setFilterTypes}
              />
              <button className="hidden md:inline-block px-3 py-1 mt-2 bg-green-100 hover:bg-green-200 text-sm font-semibold rounded-full">
                + Create a exercise
              </button>
            </div>
            <ExerciseShortenedList
              exercises={exercises}
              selectedExercise={selectedExercise}
              setSelectedExercise={setSelectedExercise}
              query={query}
            />
          </div>
        </div>
        <ExerciseInformation exercise={selectedExercise} />
      </div>
    </div>
  );
};
