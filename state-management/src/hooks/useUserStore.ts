import { useContext } from 'react';
import { userContext } from '../providers';

export const useUserStore = () => useContext(userContext);
