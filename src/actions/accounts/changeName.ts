import store from 'store';
import { changeName } from 'reducers/accounts2';

import storeAccount from './store';

export default async (
  name: string,
  publicKey: string,
): Promise<boolean> => {
  store.dispatch(changeName({ name, publicKey }));

  await storeAccount();

  return true;
};
