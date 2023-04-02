import { useExercisesContext } from '@/modules/data/hooks/exercises-context';
import { useRouter } from 'next/router';
import { ExerciseDetails } from './exercise-details';

type Props = {
  exercise: any;
  selectedDay?: number | null;
  isSuperset?: boolean;
  isFirstSuperset?: boolean;
  isLastSuperset?: boolean;
};

export const Exercise = ({
  exercise,
  selectedDay = null,
  isSuperset = false,
  isFirstSuperset = false,
  isLastSuperset = false,
}: Props) => {
  const router = useRouter();
  const { exercise: exerciseId, id, name, sets, reps, weight, rest } = exercise;
  const { exercises } = useExercisesContext();

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
    <div className={`flex ${isSuperset ? '' : 'rounded'}`}>
      <div
        className={`w-2 ${
          isSuperset ? 'bg-green-600' : 'bg-blue-100 rounded-l'
        } ${isFirstSuperset ? 'rounded-tl' : ''} ${
          isLastSuperset ? 'rounded-bl' : ''
        }`}
      />
      <div className="w-full flex p-3 bg-blue-100">
        <div className="flex flex-col items-start space-y-1">
          <div className="w-[250px] text-sm text-left truncate pl-1">
            {exerciseName}
          </div>
          <ExerciseDetails
            sets={sets}
            reps={reps}
            weight={weight}
            rest={rest}
          />
        </div>
      </div>
      <button
        className={`w-10 h-18 bg-blue-200 ${isSuperset ? '' : 'rounded-r'} ${
          isFirstSuperset ? 'rounded-tr' : ''
        } ${isLastSuperset ? 'rounded-br' : ''}`}
        onClick={() => {
          navigateToExercise();
        }}
      >
        &gt;
      </button>
    </div>
  );
};
