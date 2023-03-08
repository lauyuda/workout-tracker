export const ExerciseDetail = ({ label, value }: any) => {
  return (
    <div className="w-8">
      <div className="flex justify-center text-xs text-gray-500">{label}</div>
      <div className="flex justify-center">{value}</div>
    </div>
  );
};
