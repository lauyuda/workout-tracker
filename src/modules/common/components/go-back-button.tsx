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
      className="py-2 text:sm text-gray-500 md:hover:text-gray-700"
      onClick={() => {
        returnToPrevPage();
      }}
    >
      {`< Back`}
    </button>
  );
};
