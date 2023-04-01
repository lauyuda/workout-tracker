import { NextPage } from 'next/types';
import { ExerciseShortened } from '../../exercise/components/exercise-shortened';
import { ExerciseShortenedSkeletal } from '../../exercise/components/exercise-shortened-skeletal';
import { NoExercise } from '../../exercise/components/no-exercise';
import { NavBar } from '../../navbar/components/navbar';
import { ExerciseInformation } from '../../exercise/components/exercise-information';
import { ExerciseFilter } from '../../exercise/components/exercise-filter';
import { ExerciseSearch } from '../../exercise/components/exercise-search';
import { useExercisesPage } from '../hooks/use-exercises-page';

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
      <div className="h-full flex justify-center">
        <div className="w-96 bg-white">
          <div className="sticky top-[55px] pt-8 bg-white border-t-4 border-white">
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
            <button className="px-3 py-1 my-2 bg-green-100 hover:bg-green-200 text-sm font-semibold rounded-full">
              + Create a exercise
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
          {exercises.length === 0 && query && <NoExercise search={query} />}
          {exercises.length === 0 && !query && <ExerciseShortenedSkeletal />}
        </div>
        <ExerciseInformation exercise={selectedExercise} />
      </div>
    </div>
  );
};
