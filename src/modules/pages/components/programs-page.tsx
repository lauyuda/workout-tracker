import { useRouter } from 'next/router';
import { NextPage } from 'next/types';
import { getPrograms } from '../../data/constants/get-programs';
import { NavBar } from '../../navbar/components/navbar';

export const ProgramsPage: NextPage = () => {
  const programs = getPrograms();
  const router = useRouter();

  const navigateToSplit = (splitId: any) => {
    router.push({
      pathname: `/program/${splitId}`,
      query: { prevPath: router.pathname },
    });
  };

  return (
    <div>
      <NavBar />
      <div className="h-full flex justify-center py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <button className="hidden md:inline-block w-64 h-24 flex items-center justify-center bg-green-100 md:hover:bg-green-200 font-semibold rounded">
            + Create a Program
          </button>
          {programs?.map((program) => {
            if (program?.program === 'Rest') {
              return null;
            }

            return (
              <button
                key={program?.id}
                className="group w-64 h-24 border border-blue-500 md:hover:bg-blue-500 md:hover:text-white rounded"
                onClick={() => navigateToSplit(program?.id)}
              >
                <h2 className="font-semibold">{program?.program}</h2>
                <h3 className="text-sm text-gray-500 md:group-hover:text-white">{`by ${program?.author}`}</h3>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
