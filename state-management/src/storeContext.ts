import { createContext } from 'react';
import { Stores } from './stores';

const { user } = Stores;

export const storeContext = createContext(user);
