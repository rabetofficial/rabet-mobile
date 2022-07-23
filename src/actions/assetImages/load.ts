import store from 'store';
import { load } from 'reducers/assetImages';
import { addAssets } from 'reducers/accounts2';

const loadAssetImagesAction = (
  newAssetImages: any[],
  publicKey: string,
) => {
  store.dispatch(
    addAssets({
      publicKey,
      assets: newAssetImages,
    }),
  );
  store.dispatch(load(newAssetImages));
};

export default loadAssetImagesAction;
