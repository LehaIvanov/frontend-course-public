import { useEffect, useRef } from 'react';
import { type Mutate, type StoreApi } from 'zustand';

const identity = <TValue>(value: TValue) => value;

type Store<TValue> = Mutate<
  StoreApi<TValue>,
  [['zustand/subscribeWithSelector', TValue]]
>;

export const useSubscribeStore = <TValue, TResult>(
  store: Store<TValue>,
  listener: (state: TResult, prev: TResult) => void,
  select: (state: TValue) => TResult = identity as any
) => {
  const listenerRef = useRef(listener);
  const selectRef = useRef(select);

  useEffect(() => {
    listenerRef.current = listener;
    selectRef.current = select;
  }, [listener, select]);

  useEffect(
    () => store.subscribe(selectRef.current, listenerRef.current),
    [store]
  );
};
