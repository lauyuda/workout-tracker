import { useRouter } from 'next/router';
import { NextPage } from 'next/types';
import { useState } from 'react';
import { getPrograms } from '../data/constants/get-programs';
import { getSplits } from '../data/constants/get-splits';
import { getWorkouts } from '../data/constants/get-workouts';
import { useExercisesContext } from '../data/hooks/exercises-context';
import { Exercise } from '../exercise/components/exercise';
import { Superset } from '../exercise/components/superset';
import { NavBar } from '../navbar/components/navbar';

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
  [Day.SUNDAY]: 'Sun',
  [Day.MONDAY]: 'Mon',
  [Day.TUESDAY]: 'Tue',
  [Day.WEDNESDAY]: 'Wed',
  [Day.THURSDAY]: 'Thur',
  [Day.FRIDAY]: 'Fri',
  [Day.SATURDAY]: 'Sat',
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
console.log('new Date().getDay()', new Date().getDay());

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
    router.push({
      pathname: `/program/${workoutProgram?.id}`,
      query: { selectedDay },
    });
  };

  return (
    <div>
      <NavBar />
      <div className="py-4 px-4 space-x-3">
        {DAYS.map((day) => {
          const isSelected = selectedDay === day;
          return (
            <button
              key={day}
              className={`rounded-full border ${
                isSelected ? 'border-blue-400 bg-blue-100' : ''
              }`}
              onClick={() => setSelectedDay(day)}
            >
              <div className="w-12 h-12 flex flex-col items-center justify-center">
                {DayMap[day]}
              </div>
            </button>
          );
        })}
      </div>
      <div>Selected day: {selectedDay}</div>
      <div>Selected program: {workoutProgram?.program}</div>

      <button
        className="w-64 h-24 border rounded"
        onClick={() => navigateToSplit()}
      >
        {workoutProgram?.program} - {workoutProgram?.author}
      </button>
      {Boolean(workoutSplit) && (
        <div>Selected split: {workoutSplit?.split}</div>
      )}
      {Boolean(currentSplitSession) && (
        <div className="mt-5 mx-5 space-y-2">
          <div>Selected exercises: </div>
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
  );
};
