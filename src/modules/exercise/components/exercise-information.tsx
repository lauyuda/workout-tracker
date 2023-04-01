import { ExerciseDetails } from './exercise-details';
import { ExerciseTypeIcon } from './exercise-type-icon';

const NoExerciseSelected = () => {
  return (
    <div className="flex pl-20">
      <div className="h-fit flex flex-col items-center p-5 bg-gray-100 rounded">
        <h1 className="text-4xl">⚠️</h1>
        <p className="pt-6 text-center">Select a exercise.</p>
      </div>
    </div>
  );
};

export const ExerciseInformation = ({ exercise }: { exercise: any }) => {
  return (
    <div className="sticky top-16 self-start pt-5">
      {!exercise && <NoExerciseSelected />}
      {exercise && (
        <div className="w-[560px] space-y-4">
          <h1 className="flex items-end text-2xl p-4 bg-gray-100 rounded space-x-3">
            <span>{exercise.name}</span>
            <ExerciseTypeIcon type={exercise.type} size={28} />
          </h1>
          <div className="p-4 bg-gray-100 rounded">
            <ExerciseDetails
              sets={exercise?.sets}
              rep={exercise?.reps}
              weight={exercise?.weight}
              rest={exercise?.rest}
            />
          </div>
          <div className="p-4 bg-gray-100 rounded">
            <label className="text-gray-500 text-lg">Notes</label>
            {
              <p className="pt-2 whitespace-pre-line">
                {exercise?.notes ? `${exercise.notes}` : '-'}
              </p>
            }
          </div>
          {exercise?.src && (
            <iframe
              width="560"
              height="315"
              className="rounded"
              src={exercise.src}
            />
          )}
        </div>
      )}
    </div>
  );
};
