import React from 'react';
import { useRouter } from 'next/router';

import RouteName from 'staticRes/routes';
import Card from 'components/common/Card';
import humanizeAmount from 'helpers/humanizeNumber';
import handleAssetImage from 'utils/handleAssetImage';
import useTypedSelector from 'hooks/useTypedSelector';
import Layout from 'components/common/Layouts/BaseLayout';
import basicSwapAction from 'actions/operations/basicSwap';

import useActiveAccount from 'hooks/useActiveAccount';
import * as S from './styles';
import ConfirmLayout from './Layout';
import SwapDetails from '../Swap/Detail';

const BasicConfirmSwap = () => {
  const router = useRouter();
  const account = useActiveAccount();
  const assetImages = useTypedSelector((store) => store.assetImages);

  const accountAssets = account.assets || [];

  const val = router.query;

  const values = {
    ...val,
  };

  if (val.path) {
    try {
      values.path = JSON.parse(val.path);
    } catch (e) {
      values.path = [];
    }
  }

  let asset1 = accountAssets.find((x) => x.asset_type === 'native');

  if (values.asset1Type !== 'native') {
    asset1 = accountAssets.find(
      (x) =>
        x.asset_type === values.asset1Type &&
        x.asset_code === values.asset1Code &&
        x.asset_issuer === values.asset1Issuer,
    );
  }

  let asset2;

  if (values.asset2Type === 'native') {
    asset2 = accountAssets.find((x) => x.asset_type === 'native');
  } else {
    const asset2found = accountAssets.find(
      (x) =>
        x.asset_type === values.asset2Type &&
        x.asset_code === values.asset2Code &&
        x.asset_issuer === values.asset2Issuer,
    );

    if (asset2found) {
      asset2 = asset2found;
    } else {
      asset2 = {
        asset_code: values.asset2Code,
        asset_issuer: values.asset2Issuer,
        asset_type: values.asset2Type,
        balance: '',
        selling_liabilities: '0',
        buying_liabilities: '0',
        limit: '9999999',
      };
    }
  }

  const handleClick = async () => {
    router.push(RouteName.LoadingNetwork);

    const v = {
      ...values,
      asset1,
      asset2,
    };

    const [isDone, message] = await basicSwapAction(v);

    router.push({
      pathname: isDone ? RouteName.Success : RouteName.Error,
      query: {
        message,
      },
    });
  };

  let asset1Code = 'XLM';
  let asset2Code = 'XLM';

  if (
    asset1.asset_type === 'credit_alphanum4' ||
    asset1.asset_type === 'credit_alphanum12'
  ) {
    asset1Code = asset1.asset_code;
  }

  if (
    asset2.asset_type === 'credit_alphanum4' ||
    asset2.asset_type === 'credit_alphanum12'
  ) {
    asset2Code = asset2.asset_code;
  }

  return (
    <Layout className="pt-6">
      <ConfirmLayout handleClick={handleClick}>
        <Card type="secondary" className="px-[10px] py-[10px]">
          <S.Label>You pay</S.Label>
          <S.Value>
            {humanizeAmount(values.from || '0')}

            <S.Image
              src={handleAssetImage(asset1, assetImages)}
              alt={asset1Code}
            />

            <span className="text-lg font-normal">{asset1Code}</span>
          </S.Value>

          <S.Label className="mt-[25px]">You Receive</S.Label>
          <S.Value>
            {humanizeAmount(values.to || '0')}

            <S.Image
              src={handleAssetImage(asset2, assetImages)}
              alt={asset2Code}
            />

            <span className="text-lg font-normal">{asset2Code}</span>
          </S.Value>

          <S.Hr />

          <SwapDetails
            values={{
              ...values,
              asset1,
              asset2,
            }}
            path={values.path}
            minimumReceived={values.minimumReceived || '0'}
          />
        </Card>
      </ConfirmLayout>
    </Layout>
  );
};

export default BasicConfirmSwap;
