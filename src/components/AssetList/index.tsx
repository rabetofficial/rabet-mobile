import React from 'react';
import { Horizon } from 'stellar-sdk';

import handleAssetsKeys from 'utils/handleAssetKeys';
import Asset from './Asset';

import { Hr } from './styles';

type AppProps = {
  assets: Horizon.BalanceLine[];
  children?: React.ReactNode;
};

const AssetList = ({ assets, children }: AppProps) => (
  <>
    {assets.map((asset, index) => (
      <div
        key={`assetList${handleAssetsKeys(asset)}`}
        onClick={() => {
          console.log('log');
        }}
      >
        <Asset asset={asset} />
        {assets.length !== index + 1 && <Hr />}
      </div>
    ))}

    {children}
  </>
);

AssetList.defaultProps = {
  children: '',
};

export default AssetList;
