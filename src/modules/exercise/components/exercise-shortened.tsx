import { useExercisesContext } from '@/modules/data/hooks/exercises-context';
import { useRouter } from 'next/router';
import { ExerciseDetails } from './exercise-details';

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
  const { exercise: exerciseId, id, name, sets, reps, weight, rest } = exercise;
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
    <button className="flex" onClick={() => selectExercise()}>
      <div className={`w-full flex p-3 ${isSelected ? 'bg-blue-100' : ''}`}>
        <div className="flex flex-col items-start">
          <div className="text-xs text-gray-500">Id {exerciseId ?? id}</div>
          <div className="w-[250px] text-left truncate">{exerciseName}</div>
        </div>
        <ExerciseDetails sets={sets} reps={reps} weight={weight} rest={rest} />
      </div>
    </button>
  );
};
