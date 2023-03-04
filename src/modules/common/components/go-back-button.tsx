import { useRouter } from 'next/router';

export const GoBackButton = () => {
  const router = useRouter();
  const { selectedDay } = router?.query;

  const returnToPrevPage = () => {
    if (selectedDay) {
      router.push({
        pathname: `/`,
        query: { selectedDay },
      });
    }
    router.back();
  };

  return (
    <button
      className="h-10 w-24 flex items-center justify-center border rounded"
      onClick={() => {
        returnToPrevPage();
      }}
    >
      Go back
    </button>
  );
};
