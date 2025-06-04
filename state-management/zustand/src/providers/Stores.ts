import {
  createJSONStorage,
  persist,
  subscribeWithSelector,
} from 'zustand/middleware';
import { createStore } from 'zustand/vanilla';
import type { User } from '../domain';

const user = createStore<User>()(
  subscribeWithSelector(
    persist(
      (set) => ({
        first: ``,
        last: ``,
        actions: {
          update: (property: 'last' | 'first', value: string) =>
            set({ [property]: value }),
        },
      }),
      {
        name: 'user-storage',
        storage: createJSONStorage(() => localStorage),
        partialize: (state) => ({ ...state, actions: undefined }),
      }
    )
  )
);

export const Stores = { user };
