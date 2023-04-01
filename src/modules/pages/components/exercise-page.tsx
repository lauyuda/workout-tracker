import { ExerciseInformation } from '@/modules/exercise/components/exercise-information';
import { useRouter } from 'next/router';
import { NextPage } from 'next/types';
import { GoBackButton } from '../../common/components/go-back-button';
import { useExercisesContext } from '../../data/hooks/exercises-context';
import { NavBar } from '../../navbar/components/navbar';

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
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center pt-4 space-x-2">
          <GoBackButton />
          <h1 className="font-semibold text-4xl">Exercise Page</h1>
        </div>
        <div>
          <ExerciseInformation exercise={exerciseInfo ?? null} />
        </div>
      </div>
    </div>
  );
};
