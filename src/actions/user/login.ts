import store from 'store';
import { get } from 'helpers/storage';
import { load, IAccount } from 'reducers/accounts2';
import { login } from 'reducers/user';

export default async (
  password: string,
): Promise<[boolean, number]> => {
  try {
    const accounts: IAccount[] = await get('data', password);

    store.dispatch(login(password));
    store.dispatch(load(accounts));

    return [true, accounts.length];
  } catch (e) {
    return [false, 0];
  }
};
