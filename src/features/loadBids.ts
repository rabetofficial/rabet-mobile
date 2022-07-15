import getBids from 'api/getBids';
import getActiveAccount from 'utils/activeAccount';
import { load } from 'reducers/bids';
import { AppDispatch } from 'store';

const loadBids = async (dispatch: AppDispatch) => {
  const { activeAccount: account } = getActiveAccount();
  const assets = account.assets || [];

  const bids = await getBids(assets);

  dispatch(load(bids));
};

export default loadBids;
