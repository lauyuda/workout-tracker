import { Exercise } from './exercise';

type Exercise = { exercise: any };

export const Superset = ({
  supersetExercises,
  selectedDay = null,
}: {
  supersetExercises: Exercise[];
  selectedDay?: any;
}) => {
  return (
    <div className="divide-y divide-gray-300">
      {supersetExercises?.map((supersetExercise, index) => {
        const { exercise: exerciseId } = supersetExercise;

        return (
          <Exercise
            key={exerciseId}
            exercise={supersetExercise}
            selectedDay={selectedDay}
            isSuperset={true}
            isFirstSuperset={index === 0}
            isLastSuperset={index === supersetExercises.length - 1}
          />
        );
      })}
    </div>
  );
};
