import { useUser, useUserStore } from './hooks';

export const TextInput = ({ value }: { value: 'first' | 'last' }) => {
  const userName = useUser((user) => user[value]);
  const userStore = useUserStore();

  return (
    <div className="field">
      {value}:{' '}
      <input
        value={userName}
        onChange={(e) =>
          userStore.set({ ...userStore.getSnapshot(), [value]: e.target.value })
        }
      />
    </div>
  );
};
