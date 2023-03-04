import { Exercise } from '@/modules/exercise/components/exercise';

export const Session = ({ session, number }: any) => {
  console.log('sesssion session', session);

  return (
    <div className="flex items-center border rounded space-x-4 px-4 py-4 bg-slate-300">
      <div className="flex flex-col items-center">
        <div className="text-sm text-gray-500">Session</div>
        <div>{number}</div>
      </div>
      <div className="space-y-2">
        {session?.map((exercise: any, index: any) => {
          return <Exercise key={index} exercise={exercise} />;
        })}
      </div>
    </div>
  );
};
