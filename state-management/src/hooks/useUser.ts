import { useStore } from '../store/useStore';
import { useUserStore } from './useUserStore';

export const useUser = () => useStore(useUserStore());
