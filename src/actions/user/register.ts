import store from 'store';
import { set } from 'helpers/storage';
import { IAccount } from 'reducers/accounts2';
import { login, isRegistered } from 'reducers/user';

export default async (password: string): Promise<boolean> => {
  const accounts: IAccount[] = [];

  try {
    await set('data', accounts, password);

    console.log('tRYING TO SAVE');

    store.dispatch(login(password));
    store.dispatch(isRegistered(true));

    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};
