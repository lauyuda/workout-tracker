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
      className="flex items-center justify-center text-4xl text-gray-500 hover:text-gray-700"
      onClick={() => {
        returnToPrevPage();
      }}
    >
      {`<`}
    </button>
  );
};
