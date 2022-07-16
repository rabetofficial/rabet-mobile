import store from 'store';
import { load } from 'reducers/assetImages';
import getAssetsImages from 'api/getAssetImages';
import getActiveAccount from 'utils/activeAccount';

const loadAssetImages = async () => {
  const { activeAccount: account } = getActiveAccount();
  const assets = account.assets || [];

  const assetImages = await getAssetsImages(assets);

  store.dispatch(load(assetImages));
};

export default loadAssetImages;
