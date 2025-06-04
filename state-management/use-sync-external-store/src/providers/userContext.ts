import { createContext } from 'react';
import { Stores } from './Stores';

export const userContext = createContext(Stores.user);
