import { useRouter } from 'next/router';
import { NextPage } from 'next/types';
import { GoBackButton } from '../common/components/go-back-button';
import { useExercisesContext } from '../data/hooks/exercises-context';
import { NavBar } from '../navbar/components/navbar';

export const ExercisePage: NextPage = () => {
  const { exercises } = useExercisesContext();
  const router = useRouter();
  const { exerciseId } = router.query;
  const exerciseInfo = exercises.find(
    (exercise) => exercise.id === Number(exerciseId)
  );

  //   const workoutSplitExercises = workoutSplit?.exercises?.map(
  //     (splitExercise) => {
  //       const exerciseInfo = exercises.find(
  //         (exercise) => exercise.id === splitExercise.id
  //       );
  //       return {
  //         id: splitExercise?.id,
  //         name: exerciseInfo?.name,
  //         currenttrainings: splitExercise?.trainings?.[0],
  //       };
  //     }
  //   );

  return (
    <div>
      <NavBar />
      <h1>Exercise Page</h1>
      <GoBackButton />
      <div>Name: {exerciseInfo?.name}</div>
      <div>Personal best record:</div>
      <div>Sets: {exerciseInfo?.sets}</div>
      <div>Reps: {exerciseInfo?.reps}</div>
      <div>Rest: {exerciseInfo?.rest}</div>
    </div>
  );
};
