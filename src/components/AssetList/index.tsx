import React from 'react';
import { Horizon } from 'stellar-sdk';
import { useRouter } from 'next/router';

import handleAssetsKeys from 'utils/handleAssetKeys';
import RouteName from 'staticRes/routes';
import Asset from './Asset';

import { Hr } from './styles';

type AppProps = {
  assets: Horizon.BalanceLine[];
  children?: React.ReactNode;
};

const AssetList = ({ assets, children }: AppProps) => {
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

      {children}
    </>
  );
};

AssetList.defaultProps = {
  children: '',
};

export default AssetList;
