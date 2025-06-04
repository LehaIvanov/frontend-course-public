import { useStore } from 'zustand';
import type { User } from '../domain';
import { useUserStore } from './useUserStore';

export const useUser = <TResult = User>(select: (state: User) => TResult) =>
  useStore(useUserStore(), select);
