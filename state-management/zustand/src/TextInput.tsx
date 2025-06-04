import { useUser } from './hooks';

export const TextInput = ({ value }: { value: 'first' | 'last' }) => {
  const userName = useUser((user) => user[value]);
  const { update } = useUser((user) => user.actions);

  return (
    <div className="field">
      {value}:{' '}
      <input value={userName} onChange={(e) => update(value, e.target.value)} />
    </div>
  );
};
