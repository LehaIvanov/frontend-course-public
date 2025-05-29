import { memo } from 'react';
import { useStore } from './hooks';

export const Display = memo(({ value }: { value: 'first' | 'last' }) => {
  const [store] = useStore();

  return (
    <div className="value">
      {value}: {store[value]}
    </div>
  );
});
