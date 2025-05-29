import type { User } from '../domain';
import { Store } from './Store';

const user = Store.create<User>({ first: ``, last: `` });

export const Stores = { user };
