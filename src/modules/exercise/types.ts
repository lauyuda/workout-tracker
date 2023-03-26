export type Exercise = {
  id: number;
  name: string;
  type: string;
  sets: number;
  reps: number;
  weight: number | null;
  time: number | null;
  rest: number;
  notes: string | null;
  alternative: string[];
  src: string | null;
};

export enum ShowState {
  ALL = 'ALL',
  NAME = 'NAME',
  SETS = 'SETS',
}

export enum ExerciseType {
  BAR = 'bar',
  WEIGHTS = 'weights',
  BODYWEIGHT = 'bodyweight',
}
