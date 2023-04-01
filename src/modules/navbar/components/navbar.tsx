import { useRouter } from 'next/router';

enum PathType {
  WORKOUT = '/',
  PROGRAM = '/program',
  EXERCISE = '/exercise',
}

const PATHS = [PathType.WORKOUT, PathType.PROGRAM, PathType.EXERCISE];
const pathToNameMap = {
  [PathType.WORKOUT]: 'Workout',
  [PathType.PROGRAM]: 'Programs',
  [PathType.EXERCISE]: 'Exercises',
};

export const NavBar = () => {
  const router = useRouter();

  return (
    <div className="flex justify-center sticky top-0 bg-white shadow z-10">
      {PATHS.map((path) => {
        return (
          <button
            key={path}
            className={`px-5 py-3 font-bold border-b-4  ${
              router.pathname === path
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-400 hover:text-blue-600/60'
            }`}
            onClick={() => {
              router.push({
                pathname: path,
              });
            }}
          >
            {pathToNameMap[path]}
          </button>
        );
      })}
    </div>
  );
};
