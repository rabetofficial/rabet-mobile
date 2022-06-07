// import { NavigateFunction } from 'react-router-dom';

import store from 'store';
import RouteName from 'staticRes/routes';
import { remove } from 'reducers/accounts2';

import storeAccount from './store';
import changeActive from './changeActive';
import removeAllConnectedWebsites from './removeAllConnectedWebsites';

const removeAccount = async (publicKey: string, navigate: any) => {
  navigate(RouteName.LoadingOne);

  setTimeout(async () => {
    store.dispatch(remove(publicKey));

    removeAllConnectedWebsites(publicKey);

    const { accounts } = store.getState();

    if (accounts.length) {
      changeActive(accounts[0].publicKey);

      navigate(RouteName.Home);
    } else {
      navigate(RouteName.AccountManager);
    }

    await storeAccount();
  }, 50);

  return true;
};

export default removeAccount;
