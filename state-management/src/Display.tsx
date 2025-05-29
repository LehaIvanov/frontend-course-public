import { memo, useEffect, useState } from 'react';
import { useStore } from './hooks';

export const Display = memo(({ value }: { value: 'first' | 'last' }) => {
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
    <div className="value">
      {value}: {name}
    </div>
  );
});
