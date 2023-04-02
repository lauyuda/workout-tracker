import { REST_PROGRAM_ID } from '@/modules/split/constants';
import { useRouter } from 'next/router';
import { NextPage } from 'next/types';
import { useState } from 'react';
import { getPrograms } from '../../data/constants/get-programs';
import { getSplits } from '../../data/constants/get-splits';
import { getWorkouts } from '../../data/constants/get-workouts';
import { useExercisesContext } from '../../data/hooks/exercises-context';
import { Exercise } from '../../exercise/components/exercise';
import { Superset } from '../../exercise/components/superset';
import { NavBar } from '../../navbar/components/navbar';

enum Day {
  SUNDAY = 0,
  MONDAY = 1,
  TUESDAY = 2,
  WEDNESDAY = 3,
  THURSDAY = 4,
  FRIDAY = 5,
  SATURDAY = 6,
}

const DayMap = {
  [Day.SUNDAY]: 'Su',
  [Day.MONDAY]: 'Mo',
  [Day.TUESDAY]: 'Tu',
  [Day.WEDNESDAY]: 'We',
  [Day.THURSDAY]: 'Th',
  [Day.FRIDAY]: 'Fr',
  [Day.SATURDAY]: 'Sa',
};

const DAYS = [
  Day.SUNDAY,
  Day.MONDAY,
  Day.TUESDAY,
  Day.WEDNESDAY,
  Day.THURSDAY,
  Day.FRIDAY,
  Day.SATURDAY,
];
const TODAY = new Date().getDay();

export const Workout: NextPage = () => {
  const router = useRouter();
  const { selectedDay: _selectedDay } = router?.query;
  const [selectedDay, setSelectedDay] = useState(Number(_selectedDay ?? TODAY));

  const workouts = getWorkouts();
  const programs = getPrograms();
  const splits = getSplits();
  const { exercises } = useExercisesContext();

  const selectedWorkout = workouts.find((workout) => {
    return workout.day === selectedDay;
  });
  const workoutProgram =
    programs.find((program) => {
      return program.id === selectedWorkout?.program;
    }) ?? programs[0];
  const workoutSplit = splits.find((split) => {
    return split.id === selectedWorkout?.split;
  });
  const currentSplitSession = workoutSplit?.sessions?.[0];

  const navigateToSplit = () => {
    if (workoutProgram?.id === REST_PROGRAM_ID) {
      return;
    }
    router.push({
      pathname: `/program/${workoutProgram?.id}`,
      query: { selectedDay },
    });
  };

  return (
    <div>
      <NavBar />
      <div className="flex flex-col items-center justify-center pb-4">
        <div className="sticky top-[52px] w-full flex justify-center pt-4 pb-2 bg-white rounded -space-x-1">
          {DAYS.map((day) => {
            const isSelected = selectedDay === day;
            return (
              <button
                key={day}
                className={`rounded ${
                  isSelected
                    ? 'text-blue-700 bg-blue-100'
                    : 'text-gray-400 md:hover:text-blue-400'
                }`}
                onClick={() => setSelectedDay(day)}
              >
                <div className="w-12 py-1 flex flex-col items-center justify-center">
                  {DayMap[day]}
                </div>
              </button>
            );
          })}
        </div>
        <button
          className="mt-4 text-gray-800 font-semibold"
          onClick={() => navigateToSplit()}
        >
          <span>{workoutProgram?.program}</span>
          {workoutProgram?.author && (
            <span>{` - ${workoutProgram.author} >`}</span>
          )}
        </button>
        {Boolean(workoutSplit) && (
          <div className="text-sm text-gray-600">{workoutSplit?.split}</div>
        )}
        {Boolean(currentSplitSession) && (
          <div className="mt-5 mx-5 space-y-2">
            {currentSplitSession?.map((splitExercise) => {
              const { exercise: exerciseId, superset } = splitExercise;
              const name = exercises.find(
                (exercise) => exercise.id === exerciseId
              )?.name;

              const hasSuperset = superset.length > 0;
              if (!hasSuperset) {
                return (
                  <Exercise
                    key={exerciseId}
                    exercise={splitExercise}
                    selectedDay={selectedDay}
                  />
                );
              }

              const supersetExercises = [splitExercise, ...superset];
              return (
                <Superset
                  key={exerciseId}
                  supersetExercises={supersetExercises}
                  selectedDay={selectedDay}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
