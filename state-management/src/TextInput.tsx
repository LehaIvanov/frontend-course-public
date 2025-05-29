import { useStore } from './hooks'

export const TextInput = ({ value }: { value: 'first' | 'last' }) => {
  const [store, setStore] = useStore()

  return (
    <div className="field">
      {value}:{' '}
      <input
        value={store[value]}
        onChange={(e) => setStore({ ...store, [value]: e.target.value })}
      />
    </div>
  )
}
