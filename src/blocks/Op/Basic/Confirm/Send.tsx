import React from 'react';

import Card from 'components/common/Card';
import CopyText from 'components/common/CopyText';
// import questionCircle from 'public/images/question-circle.png';
import Layout from 'components/common/Layouts/BaseLayout';
import ConfirmLayout from './Layout';

import * as S from './styles';

const BasicConfirmSend = () => (
  <Layout className="pt-6">
    <ConfirmLayout handleClick={() => {}}>
      <Card type="secondary" className="px-[10px] py-6">
        <h2 className="text-lg font-medium mb-4">Confirm Send</h2>
        <S.Label>Amount</S.Label>
        <S.Value>
          2000
          {/* <S.Image alt="test" src={questionCircle} /> */}
          <span className="text-lg font-normal">XLM</span>
        </S.Value>

        <S.Hr />

        <S.Label>To</S.Label>
        <CopyText
          text="scejjojfiorj"
          custom={
            <span className="text-lg font-medium">scejjojfiorj</span>
          }
        />

        <>
          <S.Hr />
          <S.Label>Memo</S.Label>
          <S.Value>memo</S.Value>
        </>
      </Card>
    </ConfirmLayout>
  </Layout>
);

export default BasicConfirmSend;
