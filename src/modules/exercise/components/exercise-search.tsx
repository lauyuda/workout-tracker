import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { ExerciseType } from '../types';
import { ExerciseTypeIcon } from './exercise-type-icon';

const FILTER_TYPES = [
  ExerciseType.BAR,
  ExerciseType.WEIGHTS,
  ExerciseType.BODYWEIGHT,
];

type Props = {
  filterTypes: string[];
  setFilterTypes: Dispatch<SetStateAction<string[]>>;
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
};

export const ExerciseSearch = ({
  filterTypes,
  setFilterTypes,
  query,
  setQuery,
}: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(() => e.target.value);
  };

  return (
    <div className="flex space-x-2 justify-center md:justify-start">
      <input
        className="border py-2 px-4 focus:outline-none focus:border-gray-400 rounded"
        type="search"
        placeholder="Search for exercise"
        value={query}
        onChange={(e) => handleChange(e)}
      />
      <button
        className={`px-3 py-2 border rounded ${
          query || filterTypes.length !== 0 ? 'text-gray-900' : 'text-gray-400'
        }`}
        onClick={() => {
          setQuery('');
          setFilterTypes([]);
        }}
      >
        Clear
      </button>
    </div>
  );
};
