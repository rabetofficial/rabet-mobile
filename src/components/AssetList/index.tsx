import React from 'react';
import { Horizon } from 'stellar-sdk';
import { useRouter } from 'next/router';

import handleAssetsKeys from 'utils/handleAssetKeys';
import RouteName from 'staticRes/routes';
import Asset from './Asset';

import { Hr } from './styles';
import AssetButton from './AssetButton';

type AppProps = {
  assets: Horizon.BalanceLine[];
};

const AssetList = ({ assets }: AppProps) => {
  const router = useRouter();

  const onClick = (asset: Horizon.BalanceLine) => {
    router.push({
      pathname: RouteName.AssetInfo,
      query: {
        assetCode: asset.asset_code,
        assetType: asset.asset_type,
        assetIssuer: asset.asset_issuer,
      },
    });
  };

  return (
    <>
      {assets.map((asset, index) => (
        <div
          key={`assetList${handleAssetsKeys(asset)}`}
          onClick={() => {
            onClick(asset);
          }}
        >
          <Asset asset={asset} />

          {assets.length !== index + 1 && <Hr />}
        </div>
      ))}

      <AssetButton length={assets.length} />
    </>
  );
};

export default AssetList;
