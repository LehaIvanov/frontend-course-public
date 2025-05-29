import { useSyncExternalStore } from 'react';
import type { Store } from '../stores';

export const useStore = <TValue>(store: Store<TValue>) =>
  useSyncExternalStore(store.subscribe, store.getSnapshot);
