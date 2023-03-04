import { useRouter } from 'next/router';
import { NextPage } from 'next/types';
import { useEffect, useState } from 'react';
import { CustomShortcut } from '../common/type';
import { getExercises } from '../data/constants/get-exercises';
import { getPrograms } from '../data/constants/get-programs';
import { getSplits } from '../data/constants/get-splits';
import { getWorkouts } from '../data/constants/get-workouts';
import { Exercise } from '../exercise/components/exercise';
import { NavBar } from '../navbar/components/navbar';

enum Day {
  'ONE' = 1,
  'TWO' = 2,
  'THREE' = 3,
  'FOUR' = 4,
  'FIVE' = 5,
}
const DAYS = [Day.ONE, Day.TWO, Day.THREE, Day.FOUR, Day.FIVE];

export const Workout: NextPage = () => {
  const router = useRouter();
  const { selectedDay: _selectedDay } = router?.query;
  const [selectedDay, setSelectedDay] = useState(
    Number(_selectedDay ?? Day.ONE)
  );
  const workouts = getWorkouts();
  const programs = getPrograms();
  const splits = getSplits();
  const exercises = getExercises();

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
  // const sessionInfo = currentSplitSession?.map(exercise=>{return})

  console.log('currentSplitSession', currentSplitSession);
  const [isShowExerciseName, setIsShowExerciseName] = useState(true);

  const daySelectionShortcutHandler = (e: KeyboardEvent) => {
    if (e.key === CustomShortcut.DAY_ONE) {
      setSelectedDay(Day.ONE);
    }
    if (e.key === CustomShortcut.DAY_TWO) {
      setSelectedDay(Day.TWO);
    }
    if (e.key === CustomShortcut.DAY_THREE) {
      setSelectedDay(Day.THREE);
    }
    if (e.key === CustomShortcut.DAY_FOUR) {
      setSelectedDay(Day.FOUR);
    }
    if (e.key === CustomShortcut.DAY_FIVE) {
      setSelectedDay(Day.FIVE);
    }
  };

  useEffect(function initDaySelectionShortcut() {
    window.addEventListener('keydown', daySelectionShortcutHandler, false);
    return () =>
      window.removeEventListener('keydown', daySelectionShortcutHandler, false);
  }, []);

  const navigateToSplit = () => {
    router.push({
      pathname: `/program/${workoutProgram?.id}`,
      query: { selectedDay },
    });
  };

  return (
    <div>
      {/* <input
        className="border"
        onKeyDown={(event) => {
          event.stopPropagation();
        }}
      /> */}
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
                <div className="text-xs text-gray-500">Day</div>
                <div>{day}</div>
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
            const { exercise: exerciseId } = splitExercise;
            const name = exercises.find(
              (exercise) => exercise.id === exerciseId
            )?.name;

            return (
              <Exercise
                key={exerciseId}
                exercise={splitExercise}
                isShowExerciseName={isShowExerciseName}
                selectedDay={selectedDay}
              />
            );
          })}
        </div>
      )}
      <button
        className="absolute bottom-0 right-0 h-10 w-20 border flex items-center justify-center"
        // onMouseDown={() => setIsShow(true)}
        // onMouseUp={() => setIsShow(false)}
        onTouchStart={() => setIsShowExerciseName(false)}
        onTouchEnd={() => setIsShowExerciseName(true)}
      >
        Toggle
      </button>
    </div>
  );
};
