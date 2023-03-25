import { Exercise } from '@/modules/exercise/types';
import { createContext, ReactNode, useContext, useState } from 'react';
import { getExercises } from '../constants/get-exercises';

export const ExercisesContext = createContext<{
  exercises: Exercise[];
}>({
  exercises: [],
});

export const ExercisesContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [exercises] = useState(getExercises());

  return (
    <ExercisesContext.Provider value={{ exercises }}>
      {children}
    </ExercisesContext.Provider>
  );
};

export const useExercisesContext = () => useContext(ExercisesContext);
