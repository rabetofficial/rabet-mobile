import store from 'store';
import changeNetworkEvent from 'events/changeNetwork';
import { changeNetwork, Network } from 'reducers/options';

import storeOptions from './store';

export default async (network: Network) => {
  store.dispatch(changeNetwork(network));
  changeNetworkEvent(network);

  await storeOptions();
};
