import store from 'store';
import { changeNetwork, Network } from 'reducers/options';

import storeOptions from './store';

export default async (network: Network) => {
  store.dispatch(changeNetwork(network));

  await storeOptions();
};
