import { Exercise } from '@/modules/exercise/components/exercise';
import { Superset } from '@/modules/exercise/components/superset';

export const Session = ({ session, number }: any) => {
  return (
    <div className="flex items-center border rounded space-x-4 px-4 py-4 bg-slate-300">
      <div className="flex flex-col items-center">
        <div className="text-sm text-gray-500">Session</div>
        <div>{number}</div>
      </div>
      <div className="space-y-2">
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
