import type { User } from '../domain';
import { useStore } from '../store/useStore';
import { useUserStore } from './useUserStore';

export const useUser = <TResult = User>(select?: (user: User) => TResult) =>
  useStore(useUserStore(), select);
