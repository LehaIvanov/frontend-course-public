import { memo } from 'react';
import { useUser, useUserStore } from './hooks';

export const TextInput = memo(({ value }: { value: 'first' | 'last' }) => {
  const user = useUser();
  const userStore = useUserStore();

  return (
    <div className="field">
      {value}:{' '}
      <input
        value={user[value]}
        onChange={(e) => userStore.set({ ...user, [value]: e.target.value })}
      />
    </div>
  );
});
