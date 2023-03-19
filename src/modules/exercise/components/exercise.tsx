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
