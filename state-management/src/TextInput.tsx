import { memo } from 'react';
import { useStore } from './hooks';

export const TextInput = memo(({ value }: { value: 'first' | 'last' }) => {
  const [store, setStore] = useStore();

  return (
    <div className="field">
      {value}:{' '}
      <input
        value={store[value]}
        onChange={(e) => setStore({ ...store, [value]: e.target.value })}
      />
    </div>
  );
});
