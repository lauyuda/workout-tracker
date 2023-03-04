import { getExercises } from '@/modules/data/constants/get-exercises';
import { useRouter } from 'next/router';
import { ExerciseDetail } from './exercise-detail';

export const Exercise = ({
  exercise,
  isShowExerciseName = true,
  selectedDay = null,
}: any) => {
  const router = useRouter();
  const { exercise: exerciseId, id, name, sets, reps, weight, rest } = exercise;
  const exercises = getExercises();

  console.log('exerccise', exercise);
  console.log('router.pathname', router.pathname);
  console.log('router.query', router.query);
  console.log('router.locale', router.locale);
  console.log('router.asPath', router.asPath);

  const { programId } = router?.query;

  const exerciseName = Boolean(name)
    ? name
    : exercises.find((_exercise) => _exercise.id === exercise.exercise)?.name;

  const navigateToExercise = () => {
    router.push({
      pathname: `/exercise/${exerciseId ?? id}`,
      query: {
        ...(selectedDay && { selectedDay }),
      },
    });
  };

  return (
    <button
      className="w-full flex border py-3 px-5 rounded bg-blue-100"
      onClick={() => navigateToExercise()}
    >
      {isShowExerciseName && (
        <div className="w-64 flex flex-col items-start">
          <div className="text-xs text-gray-500">Id {exerciseId ?? id}</div>
          <div className="truncate">{exerciseName}</div>
        </div>
      )}
      <div
        className={`flex space-x-5 ${
          isShowExerciseName ? 'invisible md:visible' : ''
        }`}
      >
        <ExerciseDetail label="Sets" value={sets} />
        <ExerciseDetail label="Reps" value={reps} />
        <ExerciseDetail label="Weight" value={`${weight}kg`} />
        <ExerciseDetail label="Rest" value={`${rest}s`} />
      </div>
    </button>
  );
};
