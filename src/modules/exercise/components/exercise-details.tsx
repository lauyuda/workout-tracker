import { ExerciseDetail } from './exercise-detail';

export const ExerciseDetails = ({ sets, reps, weight, rest }: any) => {
  return (
    <div className="flex space-x-5">
      <ExerciseDetail label="Sets" value={sets} />
      <ExerciseDetail label="Reps" value={reps} />
      <ExerciseDetail
        label="Weight"
        value={`${weight ? `${weight}kg` : '-'}`}
      />
      <ExerciseDetail label="Rest" value={`${rest}s`} />
    </div>
  );
};
