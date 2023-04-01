import { Dispatch, SetStateAction } from 'react';
import { ExerciseShortened } from '../../exercise/components/exercise-shortened';
import { ExerciseShortenedSkeletal } from '../../exercise/components/exercise-shortened-skeletal';
import { NoExercise } from '../../exercise/components/no-exercise';
import { Exercise } from '../types';
type Props = {
  exercises: Exercise[];
  selectedExercise: Exercise | null;
  setSelectedExercise: Dispatch<SetStateAction<Exercise | null>>;
  query: string;
};

export const ExerciseShortenedList = ({
  exercises,
  selectedExercise,
  setSelectedExercise,
  query,
}: Props) => {
  return (
    <>
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
    </>
  );
};
