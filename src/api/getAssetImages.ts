import { Horizon } from 'stellar-sdk';

import getJSONAssets from 'utils/getJSONAssets';
import { AssetImage } from 'reducers/assetImages';

import config from '../config';

const getAssetImages = async (assets: Horizon.BalanceLine[]) => {
  const assetsInJSON = getJSONAssets(assets);

  const assetImagesResult = await fetch(`${config.ASSET_SERVER}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(assetsInJSON),
  }).then((res) => res.json());

  const assetImages: AssetImage[] = assetImagesResult;

  return assetImages;
};

export default getAssetImages;
