import { CustomShortcut } from '@/modules/common/type';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const NavBar = () => {
  const router = useRouter();

  const navShortcutHandler = (e: KeyboardEvent) => {
    if (e.key === CustomShortcut.WORKOUT) {
      router.push({
        pathname: '/',
      });
    }
    if (e.key === CustomShortcut.PROGRAMS) {
      router.push({
        pathname: '/program',
      });
    }
    if (e.key === CustomShortcut.EXERCISES) {
      router.push({
        pathname: '/exercise',
      });
    }
  };

  useEffect(function initDaySelectionShortcut() {
    window.addEventListener('keydown', navShortcutHandler, false);
    return () =>
      window.removeEventListener('keydown', navShortcutHandler, false);
  }, []);

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
