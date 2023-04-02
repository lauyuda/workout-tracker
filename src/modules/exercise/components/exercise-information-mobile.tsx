import { Exercise, ExerciseType } from '../types';
import { ExerciseDetails } from './exercise-details';
import { ExerciseTypeIcon } from './exercise-type-icon';

export const ExerciseInformationMobile = ({
  isExercisePage = false,
  exercise,
}: {
  isExercisePage?: boolean;
  exercise: Exercise | null;
}) => {
  return (
    <div
      className={`md:hidden ${isExercisePage ? 'px-4' : 'pb-4 bg-gray-100'}`}
    >
      {exercise && (
        <div
          className={`w-full flex flex-col items-center ${
            isExercisePage ? 'space-y-4' : ''
          }`}
        >
          {isExercisePage && (
            <h1 className="w-full flex items-end text-xl p-4 bg-gray-100 rounded space-x-3">
              <span>{exercise.name}</span>
              <ExerciseTypeIcon
                type={exercise.type as ExerciseType}
                size={24}
              />
            </h1>
          )}
          <div className="w-full p-4 rounded bg-gray-100">
            <ExerciseDetails
              sets={exercise?.sets}
              rep={exercise?.reps}
              weight={exercise?.weight}
              rest={exercise?.rest}
            />
          </div>
          <div className="w-full p-4 rounded bg-gray-100 ">
            <label className="text-gray-500 text-xs">Notes</label>
            {
              <p className="whitespace-pre-line pb-2">
                {exercise?.notes ? `${exercise.notes}` : '-'}
              </p>
            }
          </div>
          {exercise?.src && (
            <div className={`w-full ${isExercisePage ? '' : 'px-4'}`}>
              <iframe
                loading="lazy"
                className="iframe-placeholder iframe rounded"
                src={exercise.src}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
