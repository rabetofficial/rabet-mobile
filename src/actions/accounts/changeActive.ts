import store from 'store';
import { changeActive } from 'reducers/accounts2';

import storeAccount from './store';

export default async (publicKey: string): Promise<boolean> => {
  store.dispatch(changeActive(publicKey));

  await storeAccount();

  return true;
};
