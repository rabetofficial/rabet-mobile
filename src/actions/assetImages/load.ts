import store from 'store';
import { load } from 'reducers/assetImages';
import { addAssets } from 'reducers/accounts2';

const loadAssetImagesAction = (newAssetImages, publicKey) => {
  store.dispatch(
    addAssets({
      publicKey,
      assets: newAssetImages,
    }),
  );
  store.dispatch(load(newAssetImages));
};

export default loadAssetImagesAction;
