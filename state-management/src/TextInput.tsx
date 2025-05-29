import { memo, useEffect, useState } from 'react';
import { useStore } from './hooks';

export const TextInput = memo(({ value }: { value: 'first' | 'last' }) => {
  const store = useStore();
  const [name, setName] = useState(store.getSnapshot()[value]);

  useEffect(
    () =>
      store.subscribe(() => {
        setName(store.getSnapshot()[value]);
      }),
    [store, value]
  );

  return (
    <div className="field">
      {value}:{' '}
      <input
        value={name}
        onChange={(e) =>
          store.set({ ...store.getSnapshot(), [value]: e.target.value })
        }
      />
    </div>
  );
});
