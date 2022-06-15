import React from 'react';
import { Horizon } from 'stellar-sdk';
import Link from 'next/link';

import openModalAction from 'actions/modal/open';
// import closeModalAction from 'actions/modal/close';
import handleAssetsKeys from 'utils/handleAssetKeys';
import useActiveAccount from 'hooks/useActiveAccount';

import Asset from './Asset';

import { Hr, MbButton } from './styles';
import AddAssetButton from './AddAssetButton';

const AssetList = () => {
  const { assets: asts } = useActiveAccount();
  const assets = asts || [];

  const openAssetInfoModal = (asset: Horizon.BalanceLine) => {
    if (asset.asset_type === 'native') {
      openModalAction({
        isStyled: false,
        title: 'Asset info',
        size: 'medium',
        padding: 'medium',
        minHeight: 597,
        children: (
          <p>hey</p>
          // <AssetInfo
          //   isNative
          //   asset={asset}
          //   onCancel={closeModalAction}
          //   onDelete={showDeleteResult}
          //   onBeforeDelete={() => {
          //     openLoadingModal({});
          //   }}
          // >
          //   <PageTitle
          //     title="Asset | XLM"
          //     padding="0"
          //     onClose={closeModalAction}
          //   />
          // </AssetInfo>
        ),
      });
    } else {
      openModalAction({
        isStyled: false,
        title: 'Asset info',
        size: 'medium',
        padding: 'medium',
        minHeight: 597,
        children: (
          <p> hey</p>
          // <AssetInfo
          //   usage="desktop"
          //   asset={asset}
          //   onCancel={closeModalAction}
          //   onDelete={showDeleteResult}
          //   onBeforeDelete={() => {
          //     openLoadingModal({});
          //   }}
          // >
          //   <PageTitle
          //     title="Asset info"
          //     padding="0"
          //     onClose={closeModalAction}
          //   />
          // </AssetInfo>
        ),
      });
    }
  };

  // const openAssetInfoPage = (asset: Horizon.BalanceLine) => {
  //   if (
  //     asset.asset_type === 'native' ||
  //     asset.asset_type === 'liquidity_pool_shares'
  //   ) {
  //     navigate(`${RouteName.AssetInfo}/XLM/none/native`);
  //   } else {
  //     navigate(
  //       `${RouteName.AssetInfo}/${asset.asset_code}/${asset.asset_issuer}/${asset.asset_type}`,
  //     );
  //   }
  // };

  return (
    <>
      <div>
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
        <AddAssetButton
          style={{
            border: '1.2px solid #f3f3f3',
            position: assets.length < 4 ? 'absolute' : 'static',
            bottom: assets.length < 4 ? '88px' : '0',
          }}
        />
      </div>
    </>
  );
};

AssetList.defaultProps = {
  scrollMaxHeight: 320,
};

export default AssetList;
