import store from 'store';
import { change, OptionMode } from 'reducers/options';

import storeOptions from './store';

type ChangeOptionsType = {
  explorer: string | number;
  currency: string | number;
  mode: OptionMode;
  privacyMode: boolean;
  autoTimeLocker: number | string;
};

const changeOptions = async (options: ChangeOptionsType) => {
  const { mode, currency, explorer, privacyMode, autoTimeLocker } =
    options;

  store.dispatch(
    change({
      explorer,
      privacyMode,
      autoTimeLocker,
      currency,
      mode,
    }),
  );

  await storeOptions();

  return true;
};

export default changeOptions;
