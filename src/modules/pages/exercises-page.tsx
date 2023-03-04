import { useRouter } from 'next/router';
import { NextPage } from 'next/types';
import { getExercises } from '../data/constants/get-exercises';
import { Exercise } from '../exercise/components/exercise';
import { NavBar } from '../navbar/components/navbar';

export const ExercisesPage: NextPage = () => {
  const exercises = getExercises();
  const router = useRouter();

  return (
    <div>
      <NavBar />
      <h1>Exercises Page</h1>
      <div>To sort by name in alphabetical order</div>
      <div>To allow searching of exercise</div>
      <div>To allow adding of exercise</div>
      <div className="p-10 space-y-5">
        {exercises?.map((exercise) => {
          return <Exercise key={exercise?.id} exercise={exercise} />;
        })}
        <button className="w-full h-16 pl-8 flex items-center bg-green-200 border border-green-500 rounded">
          Create new exercise
        </button>
      </div>
    </div>
  );
};
