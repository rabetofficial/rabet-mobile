import store from 'store';
import { load } from 'reducers/currencies';
import toCurrencies from 'api/getCurrencies';

export default async (): Promise<void> => {
  const currencies = await toCurrencies();

  store.dispatch(load(currencies));
};
