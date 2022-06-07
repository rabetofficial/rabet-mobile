import store from 'store';
import { IAccount, loadBackup } from 'reducers/accounts2';

import storeAccount from './store';

const addBackup = async (accounts: IAccount[]) => {
  store.dispatch(loadBackup(accounts));

  await storeAccount();
};

export default addBackup;
