import store from 'store';
import { change, OptionMode } from 'reducers/options';

import storeOptions from './store';

type ChangeOptionsType = {
  explorer: string;
  currency: string;
  mode: OptionMode;
  privacyMode: boolean;
};

const changeOptions = async (options: ChangeOptionsType) => {
  const { mode, currency, explorer, privacyMode } = options;

  store.dispatch(
    change({
      explorer,
      privacyMode,
      currency,
      mode,
    }),
  );

  await storeOptions();

  return true;
};

export default changeOptions;
