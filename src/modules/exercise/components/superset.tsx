import { Exercise } from './exercise';

export const Superset = ({ supersetExercises, selectedDay = null }: any) => {
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
