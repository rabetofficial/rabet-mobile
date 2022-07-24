import React from 'react';
import { useRouter } from 'next/router';

import shorter from 'helpers/shorter';
import showName from 'helpers/showName';
import RouteName from 'staticRes/routes';
import Card from 'components/common/Card';
import handleAssetAlt from 'utils/handleAssetAlt';
import CopyText from 'components/common/CopyText';
import humanizeAmount from 'helpers/humanizeNumber';
import useTypedSelector from 'hooks/useTypedSelector';
import useActiveAccount from 'hooks/useActiveAccount';
import handleAssetImage from 'utils/handleAssetImage';
import Layout from 'components/common/Layouts/BaseLayout';
import basicSendAction from 'actions/operations/basicSend';

import * as S from './styles';
import ConfirmLayout from './Layout';

const BasicConfirmSend = () => {
  const router = useRouter();
  const currentAccount = useActiveAccount();
  const [accounts, contacts, assetImages] = useTypedSelector(
    (store) => [store.accounts, store.contacts, store.assetImages],
  );

  const values = {
    memo: router.query?.memo || '',
    amount: router.query?.amount || '',
    destination: router.query?.destination || '',
    isAccountNew: router.query?.isAccountNew === 'true',
    assetCode: router.query?.assetCode || '',
    assetType: router.query?.assetType || '',
    assetIssuer: router.query?.assetIssuer || '',
  };

  const accountAssets = currentAccount.assets || [];

  let selectedAsset = accountAssets.find(
    (x) => x.asset_type === 'native',
  );

  if (values.assetType !== 'native') {
    selectedAsset = accountAssets.find(
      (x) =>
        x.asset_type === values.assetType &&
        x.asset_code === values.assetCode &&
        x.asset_issuer === values.assetIssuer,
    );
  }

  const showDestination = () => {
    const userAccount = accounts.find(
      (act) => act.publicKey === values.destination,
    );

    const contactAccount = contacts.find(
      (cnt) => cnt.publicKey === values.destination,
    );

    if (contactAccount) {
      return showName(contactAccount.name);
    }

    if (userAccount) {
      return showName(userAccount.name);
    }

    return shorter(values.destination, 4);
  };

  const onSubmit = async () => {
    router.push(RouteName.LoadingNetwork);

    const [isDone, message] = await basicSendAction({
      ...values,
      asset: selectedAsset,
    });

    router.push({
      pathname: isDone ? RouteName.Success : RouteName.Error,
      query: {
        message,
      },
    });
  };

  return (
    <Layout className="pt-6">
      <ConfirmLayout handleClick={onSubmit}>
        <Card type="secondary" className="px-[10px] py-6">
          <S.Label>Amount</S.Label>
          <S.Value>
            {selectedAsset ? (
              <>
                {humanizeAmount(values.amount)}

                <S.Image
                  alt={handleAssetAlt(selectedAsset)}
                  src={handleAssetImage(selectedAsset, assetImages)}
                />
                <span className="text-lg font-normal">
                  {selectedAsset.asset_code}
                </span>
              </>
            ) : (
              ''
            )}
          </S.Value>

          <S.Hr />

          <S.Label>To</S.Label>
          <CopyText
            text={values.destination}
            custom={
              <span className="text-lg font-medium">
                {showDestination()}
              </span>
            }
          />

          {values.memo ? (
            <>
              <S.Hr />
              <S.Label>Memo</S.Label>
              <S.Value>{values.memo}</S.Value>
            </>
          ) : (
            ''
          )}
        </Card>
      </ConfirmLayout>
    </Layout>
  );
};

export default BasicConfirmSend;
