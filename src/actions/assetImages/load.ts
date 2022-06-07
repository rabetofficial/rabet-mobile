import store from 'store';
import { load } from 'reducers/assetImages';
import { addAssetImages } from 'reducers/accounts';

const loadAssetImagesAction = (newAssetImages, publicKey) => {
  store.dispatch(
    addAssetImages({
      publicKey,
      assetImages: newAssetImages,
    }),
  );
  store.dispatch(load(newAssetImages));
};

export default loadAssetImagesAction;
