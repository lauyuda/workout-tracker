export const NoExercise = ({ search }: { search: string }) => {
  return (
    <div className="flex flex-col items-center pt-10">
      <h1 className="text-7xl">😲</h1>
      <p className="pt-6 text-center">
        We cannot find the exercise
        <br />
        that you are searching for.
      </p>
      <button className="max-w-[200px] truncate px-3 py-1 mt-2  bg-green-100 hover:bg-green-200 text-sm font-semibold rounded-full">
        {`+ Create ${search}`}
      </button>
    </div>
  );
};
