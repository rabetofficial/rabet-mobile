import React from 'react';
import { Horizon } from 'stellar-sdk';
import { useRouter } from 'next/router';

import RouteName from 'staticRes/routes';
import ExitTitle from 'components/common/ExitTitle';
import useActiveAccount from 'hooks/useActiveAccount';
import ScrollBar from 'components/common/ScrollBar';

import AssetInfoContent from './AssetsInfo';

const AssetInfo = () => {
  const router = useRouter();
  const account = useActiveAccount();
  const { assetCode, assetIssuer, assetType } = router.query;

  let assets = account.assets || [];

  const XLMAsset: Horizon.BalanceLineNative = {
    asset_type: 'native',
    balance: '0',
    selling_liabilities: '0',
    buying_liabilities: '0',
  };

  if (!assets.length) {
    assets = [...assets, XLMAsset];
  }

  let isNative = false;
  let asset = assets.find(
    (ast) =>
      ast.asset_type === assetType &&
      ast.asset_code === assetCode &&
      ast.asset_issuer === assetIssuer,
  );

  if (assetType === 'native') {
    isNative = true;

    asset = assets.find((ast) => ast.asset_type === 'native');
  }

  const handleBeforeDelete = () => {
    router.push(RouteName.LoadingNetwork);
  };

  const onDelete = (result: [boolean, string]) => {
    if (result[0]) {
      router.push(RouteName.Sucess, {
        query: {
          message: result[1],
        },
      });
    } else {
      router.push(RouteName.Error, {
        query: {
          message: result[1],
        },
      });
    }
  };

  return (
    <div>
      <ScrollBar isHidden maxHeight={780}>
        <AssetInfoContent
          asset={asset}
          isNative={isNative}
          onDelete={onDelete}
          onBeforeDelete={handleBeforeDelete}
        >
          <ExitTitle title={`Assets | ${assetCode || 'XLM'}`} />
        </AssetInfoContent>
      </ScrollBar>
    </div>
  );
};

export default AssetInfo;
