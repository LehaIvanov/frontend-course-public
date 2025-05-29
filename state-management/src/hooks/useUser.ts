import { useStore } from './useStore';
import { useUserStore } from './useUserStore';

export const useUser = () => useStore(useUserStore());
