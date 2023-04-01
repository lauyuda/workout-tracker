import { Dispatch, Fragment, SetStateAction } from 'react';
import { ExerciseShortened } from '../../exercise/components/exercise-shortened';
import { ExerciseShortenedSkeletal } from '../../exercise/components/exercise-shortened-skeletal';
import { NoExercise } from '../../exercise/components/no-exercise';
import { Exercise } from '../types';
import { ExerciseInformation } from './exercise-information';
import { ExerciseInformationMobile } from './exercise-information-mobile';
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
        const isSelected = exercise.id === selectedExercise?.id;

        return (
          <Fragment key={exercise.id}>
            <ExerciseShortened
              exercise={exercise}
              isSelected={isSelected}
              selectExercise={() => setSelectedExercise(exercise)}
            />
            {isSelected && <ExerciseInformationMobile exercise={exercise} />}
          </Fragment>
        );
      })}
      {exercises.length === 0 && query && <NoExercise search={query} />}
      {exercises.length === 0 && !query && <ExerciseShortenedSkeletal />}
    </>
  );
};
