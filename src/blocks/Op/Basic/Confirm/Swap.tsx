import React from 'react';

import Card from 'components/common/Card';
import Layout from 'components/common/Layouts/BaseLayout';
import ConfirmLayout from './Layout';
// import SwapDetails from '../Swap/Detail';

import * as S from './styles';

const BasicConfirmSwap = () => (
  <Layout className="pt-6">
    <ConfirmLayout handleClick={() => {}}>
      <Card type="secondary" className="px-[10px] py-[10px]">
        <S.Label>You pay</S.Label>
        <S.Value>
          1000
          {/* <S.Image */}
          {/*  src={handleAssetImage(values.asset1, assetImages)} */}
          {/*  alt={asset1Code} */}
          {/* /> */}
          <span className="text-lg font-normal">XLM</span>
        </S.Value>

        <S.Label className="mt-[25px]">You Receive</S.Label>
        <S.Value>
          2000
          {/* <S.Image */}
          {/*  src={handleAssetImage(values.asset2, assetImages)} */}
          {/*  alt={asset2Code} */}
          {/* /> */}
          <span className="text-lg font-normal">USD</span>
        </S.Value>

        <S.Hr />

        {/* <SwapDetails */}
        {/* values={values} */}
        {/* path={values.path} */}
        {/* minimumReceived={values.minimumReceived} */}
        {/* /> */}
      </Card>
    </ConfirmLayout>
  </Layout>
);

export default BasicConfirmSwap;
