import { ExerciseInformation } from '@/modules/exercise/components/exercise-information';
import { ExerciseInformationMobile } from '@/modules/exercise/components/exercise-information-mobile';
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
      <div className="flex flex-col md:items-center justify-center">
        <div className="md:w-[560px] flex items-center pl-4 md:pl-0">
          <GoBackButton />
        </div>
        <div>
          <ExerciseInformation
            isExercisePage={true}
            exercise={exerciseInfo ?? null}
          />
        </div>
        <ExerciseInformationMobile
          isExercisePage={true}
          exercise={exerciseInfo ?? null}
        />
      </div>
    </div>
  );
};
