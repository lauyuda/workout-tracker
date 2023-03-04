import { getExercises } from '@/modules/data/constants/get-exercises';
import { Session } from '@/modules/session/components/session';

export const Split = ({ split, splitSessions }: any) => {
  console.log('splitSessions', splitSessions);

  return (
    <div className="m-5 p-5 border rounded space-y-2">
      <div className="text-lg">
        Split: <span className="font-semibold">{split}</span>
      </div>
      {splitSessions.map((session: any, index: any) => (
        <Session
          key={index}
          session={session}
          number={splitSessions?.length - index}
        />
      ))}
    </div>
  );
};
