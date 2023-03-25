import { useRouter } from 'next/router';

export const NavBar = () => {
  const router = useRouter();

  return (
    <>
      <button
        className="p-5 border"
        onClick={() => {
          router.push({
            pathname: '/',
          });
        }}
      >
        Workout
      </button>
      <button
        className="p-5 border"
        onClick={() => {
          router.push({
            pathname: '/program',
          });
        }}
      >
        Programs
      </button>
      <button
        className="p-5 border"
        onClick={() => {
          router.push({
            pathname: '/exercise',
          });
        }}
      >
        Exercises
      </button>
    </>
  );
};
