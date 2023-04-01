import { Barbell } from '@/svg-icons/barbell';
import { Dumbbell } from '@/svg-icons/dumbbell';
import { Bodyweight } from '@/svg-icons/bodyweight';
import { ExerciseType } from '../types';

export const ExerciseTypeIcon = ({
  type,
  size = 20,
}: {
  type: ExerciseType;
  size?: number;
}) => {
  return (
    <>
      {type === ExerciseType.BAR && <Barbell size={size} />}
      {type === ExerciseType.WEIGHTS && <Dumbbell size={size} />}
      {type === ExerciseType.BODYWEIGHT && <Bodyweight size={size} />}
    </>
  );
};
