import { useExercisesContext } from '@/modules/data/hooks/exercises-context';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { ExerciseDetails } from './exercise-details';

export const Exercise = ({
  exercise,
  selectedDay = null,
  isSuperset = false,
}: any) => {
  const router = useRouter();
  const {
    exercise: exerciseId,
    id,
    name,
    sets,
    reps,
    weight,
    rest,
    superset,
  } = exercise;
  const { exercises } = useExercisesContext();

  const [isShowExerciseName, setIsShowExerciseName] = useState(true);

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

  console.log('superset', superset, exercise);

  return (
    <div className={`flex ${isSuperset ? '' : 'border rounded'}`}>
      <div className={`w-2 ${isSuperset ? 'bg-green-300' : 'bg-blue-100'}`} />
      <button
        className="w-full flex p-3 bg-blue-100"
        onClick={() => {
          setIsShowExerciseName((show) => !show);
        }}
      >
        {isShowExerciseName && (
          <div className="flex flex-col items-start">
            <div className="text-xs text-gray-500">Id {exerciseId ?? id}</div>
            <div className="w-[250px] text-left truncate">{exerciseName}</div>
          </div>
        )}
        {!isShowExerciseName && (
          <ExerciseDetails
            sets={sets}
            reps={reps}
            weight={weight}
            rest={rest}
          />
        )}
      </button>
      <button
        className="w-10 h-18 bg-blue-300"
        onClick={() => {
          navigateToExercise();
        }}
      >
        &gt;
      </button>
    </div>
  );
};
