import { useUser } from './hooks';

export const Display = ({ value }: { value: 'first' | 'last' }) => {
  const userName = useUser((user) => user[value]);

  return (
    <div className="value">
      {value}: {userName}
    </div>
  );
};
