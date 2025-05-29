import { useStore } from './hooks';

export const Display = ({ value }: { value: 'first' | 'last' }) => {
  const [store] = useStore();

  return (
    <div className="value">
      {value}: {store[value]}
    </div>
  );
};
