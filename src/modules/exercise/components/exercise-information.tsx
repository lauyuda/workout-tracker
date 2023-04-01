export const ExerciseInformation = ({ exercise }: { exercise: any }) => {
  return (
    <div className="w-4/12 sticky top-16 pl-10 self-start">
      <label>Selected {exercise?.name}</label>
      <div>
        <p>Notes:</p>
        <>{console.log(exercise?.notes)}</>
        <p className="whitespace-pre-line">{`${exercise?.notes}`}</p>
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
  );
};
