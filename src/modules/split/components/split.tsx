import { Session } from '@/modules/session/components/session';

export const Split = ({ split, splitSessions }: any) => {
  return (
    <div className="rounded space-y-2">
      <h2 className="text-lg">{split} </h2>
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
