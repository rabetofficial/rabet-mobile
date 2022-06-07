import store from 'store';
import { changeName } from 'reducers/accounts2';

import storeAccount from './store';

export default (name: string, publicKey: string): void => {
  store.dispatch(changeName({ name, publicKey }));

  storeAccount();
};
