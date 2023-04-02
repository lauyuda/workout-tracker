import { Exercise } from '@/modules/exercise/components/exercise';
import { Superset } from '@/modules/exercise/components/superset';

export const Session = ({ session, number }: any) => {
  return (
    <div className="flex flex-col items-start border rounded px-3 pt-1 pb-3 bg-slate-300">
      <h3>
        <label className="text-xs text-gray-500">Session </label>
        <span>{number}</span>
      </h3>
      <div className="pt-1 space-y-1">
        {session?.map((sessionExercise: any) => {
          const { exercise: exerciseId, superset } = sessionExercise;

          const hasSuperset = superset.length > 0;
          if (!hasSuperset) {
            return <Exercise key={exerciseId} exercise={sessionExercise} />;
          }

          const supersetExercises = [sessionExercise, ...superset];
          return (
            <Superset key={exerciseId} supersetExercises={supersetExercises} />
          );
        })}
      </div>
    </div>
  );
};
