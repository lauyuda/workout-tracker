import { useDebounce } from '@/modules/common/hooks/use-debounce';
import { useState } from 'react';

const DEBOUNCE_DURATION = 500;

export const useSearchAndFilter = () => {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, DEBOUNCE_DURATION);
  const [filterTypes, setFilterTypes] = useState<string[]>([]);

  return { query, setQuery, debouncedQuery, filterTypes, setFilterTypes };
};
