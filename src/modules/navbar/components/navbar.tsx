import { useRouter } from 'next/router';

export const NavBar = () => {
  const router = useRouter();

  return (
    <div className="bg-blue-100">
      <button
        className="px-5 py-3"
        onClick={() => {
          router.push({
            pathname: '/',
          });
        }}
      >
        Workout
      </button>
      <button
        className="px-5 py-3"
        onClick={() => {
          router.push({
            pathname: '/program',
          });
        }}
      >
        Programs
      </button>
      <button
        className="px-5 py-3"
        onClick={() => {
          router.push({
            pathname: '/exercise',
          });
        }}
      >
        Exercises
      </button>
    </div>
  );
};
