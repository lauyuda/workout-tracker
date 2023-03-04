import { useRouter } from 'next/router';
import { NextPage } from 'next/types';
import { getPrograms } from '../data/constants/get-programs';
import { NavBar } from '../navbar/components/navbar';

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
      <h1>Programs Page</h1>
      <div>To sort by name in alphabetical order</div>
      <div>To allow searching of program</div>
      <div>To allow adding of program</div>
      {programs?.map((program) => {
        if (program?.program === 'Rest') {
          return null;
        }

        return (
          <button
            key={program?.id}
            className="w-64 h-24 border rounded"
            onClick={() => navigateToSplit(program?.id)}
          >
            {program?.program} - {program?.author}
          </button>
        );
      })}
      <div className="w-36 h-10 flex items-center justify-center border border-black rounded">
        + Program
      </div>
    </div>
  );
};
