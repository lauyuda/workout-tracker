import { Dispatch, SetStateAction } from 'react';
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
};

export const ExerciseFilter = ({ filterTypes, setFilterTypes }: Props) => {
  return (
    <div className="flex items-center pt-2 space-x-1">
      {FILTER_TYPES.map((filterType) => {
        const isFiltered = filterTypes.includes(filterType);

        return (
          <button
            key={filterType}
            className={`p-2 rounded ${
              isFiltered ? 'bg-blue-500 text-white' : 'hover:bg-blue-500/50'
            }`}
            onClick={() => {
              if (isFiltered) {
                return setFilterTypes((prevFilterTypes) => {
                  const updatedFilterTypes = prevFilterTypes.filter(
                    (prevFilterType) => prevFilterType !== filterType
                  );

                  return [...updatedFilterTypes];
                });
              }

              setFilterTypes((prevFilterTypes) => {
                return [...prevFilterTypes, filterType];
              });
            }}
          >
            <ExerciseTypeIcon type={filterType} />
          </button>
        );
      })}
    </div>
  );
};
