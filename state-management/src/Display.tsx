import { memo } from 'react';
import { useUser } from './hooks';

export const Display = memo(({ value }: { value: 'first' | 'last' }) => {
  const user = useUser();

  return (
    <div className="value">
      {value}: {user[value]}
    </div>
  );
});
