import { Exercise } from './exercise';

type Exercise = { exercise: any };

export const Superset = ({
  supersetExercises,
  selectedDay = null,
}: {
  supersetExercises: Exercise[];
  selectedDay: any;
}) => {
  return (
    <div className="border rounded">
      {supersetExercises?.map((supersetExercise) => {
        const { exercise: exerciseId } = supersetExercise;

        return (
          <Exercise
            key={exerciseId}
            exercise={supersetExercise}
            selectedDay={selectedDay}
            isSuperset={true}
          />
        );
      })}
    </div>
  );
};
