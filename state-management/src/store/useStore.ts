import { useSyncExternalStore } from 'react';
import type { Store } from './Store';

export const useStore = <TValue>(store: Store<TValue>) =>
  useSyncExternalStore(store.subscribe, store.getSnapshot);
