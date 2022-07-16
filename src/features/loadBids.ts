import store from 'store';
import getBids from 'api/getBids';
import getActiveAccount from 'utils/activeAccount';
import { load } from 'reducers/bids';

const loadBids = async () => {
  const { activeAccount: account } = getActiveAccount();
  const assets = account.assets || [];

  const bids = await getBids(assets);

  store.dispatch(load(bids));
};

export default loadBids;
