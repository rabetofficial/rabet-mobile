import React from 'react';
import { Horizon } from 'stellar-sdk';
import { useRouter } from 'next/router';

import handleAssetsKeys from 'utils/handleAssetKeys';
import ScrollBar from 'components/common/ScrollBar';
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

  const scrollMaxHeight = document.documentElement.clientHeight - 351;

  return (
    <ScrollBar isHidden maxHeight={scrollMaxHeight}>
      <div className="content">
        {assets.map((asset, index) => (
          <div
            key={`assetList${handleAssetsKeys(asset)}`}
            onClick={() => {
              onClick(asset);
            }}
          >
            <Asset asset={asset} index={index} />

            {assets.length !== index + 1 && <Hr />}
          </div>
        ))}

        <AssetButton length={assets.length} />
      </div>
    </ScrollBar>
  );
};

export default AssetList;
