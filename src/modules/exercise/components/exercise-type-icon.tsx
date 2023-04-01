import { Barbell } from '@/svg-icons/barbell';
import { Dumbbell } from '@/svg-icons/dumbbell';
import { Bodyweight } from '@/svg-icons/bodyweight';
import { ExerciseType } from '../types';

export const ExerciseTypeIcon = ({ type }: { type: ExerciseType }) => {
  return (
    <>
      {type === ExerciseType.BAR && <Barbell />}
      {type === ExerciseType.WEIGHTS && <Dumbbell />}
      {type === ExerciseType.BODYWEIGHT && <Bodyweight />}
    </>
  );
};
