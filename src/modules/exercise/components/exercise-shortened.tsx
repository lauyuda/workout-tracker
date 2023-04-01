import { useExercisesContext } from '@/modules/data/hooks/exercises-context';
import { useRouter } from 'next/router';
import { ExerciseDetails } from './exercise-details';
import { ExerciseTypeIcon } from './exercise-type-icon';

type Props = {
  exercise: any;
  isSelected: boolean;
  selectExercise: () => void;
};

export const ExerciseShortened = ({
  exercise,
  isSelected = false,
  selectExercise = () => null,
}: Props) => {
  const router = useRouter();
  const {
    exercise: exerciseId,
    id,
    name,
    type,
    sets,
    reps,
    weight,
    rest,
  } = exercise;
  const { exercises } = useExercisesContext();

  const exerciseName = Boolean(name)
    ? name
    : exercises.find((_exercise) => _exercise.id === exercise.exercise)?.name;

  // const navigateToExercise = () => {
  //   router.push({
  //     pathname: `/exercise/${exerciseId ?? id}`,
  //   });
  // };

  return (
    <button
      className={`w-full flex items-center px-3 py-3 border-l-4 ${
        isSelected
          ? 'text-blue-600 border-blue-500 font-semibold bg-gray-100 md:rounded-r-full'
          : 'text-gray-400 hover:text-blue-600/60 border-transparent'
      }`}
      onClick={() => selectExercise()}
    >
      <div className="w-[350px] text-left truncate">{exerciseName}</div>
      <ExerciseTypeIcon type={type} />
    </button>
  );
};
