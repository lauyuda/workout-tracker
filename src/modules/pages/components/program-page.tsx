import { useRouter } from 'next/router';
import { NextPage } from 'next/types';
import { GoBackButton } from '../../common/components/go-back-button';
import { getPrograms } from '../../data/constants/get-programs';
import { getSplits } from '../../data/constants/get-splits';
import { NavBar } from '../../navbar/components/navbar';
import { Split } from '../../split/components/split';

export const ProgramPage: NextPage = () => {
  const router = useRouter();
  const { programId } = router.query;
  const programs = getPrograms();
  const programInfo = programs.find(
    (program) => program.id === Number(programId)
  );

  const splits = getSplits();
  const splitsInfo = programInfo?.splits?.map((programSplitId) => {
    return splits.find((split) => split.id === programSplitId);
  });

  return (
    <div>
      <NavBar />
      <div className="h-full flex flex-col items-center justify-center pb-4">
        <div className="w-[350px]">
          <GoBackButton />
        </div>
        <div className="space-y-2">
          {splitsInfo?.map((split) => (
            <Split
              key={split?.id}
              split={split?.split}
              splitSessions={split?.sessions}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
