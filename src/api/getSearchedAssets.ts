import { AssetImage } from 'reducers/assetImages';

import config from 'config';

export default async (
  value: string,
  isDomain: boolean,
): Promise<AssetImage[]> => {
  try {
    const domainQS = isDomain ? 'domain' : 'asset_code';
    const sentValue = isDomain
      ? value.toLowerCase()
      : value.toUpperCase();

    const assets: AssetImage[] = await fetch(
      `${config.ASSET_SERVER}?${domainQS}=${sentValue}`,
    ).then((res) => res.json());

    return assets;
  } catch (e) {
    return [];
  }
};
