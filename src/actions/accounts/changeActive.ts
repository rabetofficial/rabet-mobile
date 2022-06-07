import store from 'store';
import { changeActive } from 'reducers/accounts2';
import changeAccountEvent from 'events/changeAccount';

import storeAccount from './store';

export default async (publicKey: string): Promise<boolean> => {
  changeAccountEvent(publicKey);

  store.dispatch(changeActive(publicKey));

  await storeAccount();

  return true;
};
