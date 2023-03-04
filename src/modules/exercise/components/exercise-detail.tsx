export const ExerciseDetail = ({ label, value }: any) => {
  return (
    <div>
      <div className="flex justify-center text-xs text-gray-500">{label}</div>
      <div className="flex justify-center">{value}</div>
    </div>
  );
};
