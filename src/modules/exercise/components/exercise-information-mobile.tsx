import { Exercise } from '../types';
import { ExerciseDetails } from './exercise-details';

export const ExerciseInformationMobile = ({
  exercise,
}: {
  exercise: Exercise;
}) => {
  return (
    <div className="md:hidden px-4 py-3 bg-gray-100">
      {exercise && (
        <div className="w-full flex flex-col items-center">
          <div className="w-full rounded">
            <ExerciseDetails
              sets={exercise?.sets}
              rep={exercise?.reps}
              weight={exercise?.weight}
              rest={exercise?.rest}
            />
          </div>
          <div className="w-full rounded">
            <label className="text-gray-500 text-xs">Notes</label>
            {
              <p className="whitespace-pre-line pb-2">
                {exercise?.notes ? `${exercise.notes}` : '-'}
              </p>
            }
          </div>
          {exercise?.src && (
            <iframe
              width="370"
              height="208"
              loading="lazy"
              className="iframe-placeholder"
              src={exercise.src}
            />
          )}
        </div>
      )}
    </div>
  );
};
