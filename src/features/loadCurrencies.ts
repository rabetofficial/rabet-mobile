import store from 'store';
import { load } from 'reducers/currencies';
import getCurrencies from 'api/getCurrencies';

const loadCurrencies = async () => {
  const currencies = await getCurrencies();

  store.dispatch(load(currencies));
};

export default loadCurrencies;
