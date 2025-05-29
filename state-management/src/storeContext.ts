import { createContext } from 'react';
import type { User } from './domain';

const empty: Store = [{ first: ``, last: `` }, () => {}];

type Store = [User, (user: User) => void];

export const storeContext = createContext<Store>(empty);
