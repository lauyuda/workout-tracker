const WIDTH_LIST = [
  'w-36',
  'w-56',
  'w-32',
  'w-36',
  'w-48',
  'w-36',
  'w-56',
  'w-48',
  'w-40',
  'w-36',
  'w-36',
  'w-36',
  'w-60',
  'w-56',
  'w-32',
  'w-56',
  'w-52',
  'w-40',
];

export const ExerciseShortenedSkeletal = () => {
  return (
    <div className="pt-2 space-y-5">
      {WIDTH_LIST.map((width, index) => {
        return (
          <div
            key={index}
            className={`${width} ml-4 h-7 animate-pulse bg-gray-200 rounded`}
          />
        );
      })}
    </div>
  );
};
