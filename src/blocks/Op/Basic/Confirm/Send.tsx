import React from 'react';
import { useRouter } from 'next/router';

import showName from 'helpers/showName';
import shorter from 'utils/shorter';
import RouteName from 'staticRes/routes';
import Card from 'components/common/Card';
import { SendValues } from 'models';
import formatBalance from 'utils/formatBalance';
import CopyText from 'components/common/CopyText';
import handleAssetAlt from 'utils/handleAssetAlt';
import ScrollBar from 'components/common/ScrollBar';
import handleAssetImage from 'utils/handleAssetImage';
import useTypedSelector from 'hooks/useTypedSelector';
import basicSendAction from 'actions/operations/basicSend';
import ConfirmLayout from './Layout';

import * as S from './styles';

type AppProps = {
  values: SendValues;
};

const BasicConfirmSend = ({ values }: AppProps) => {
  const router = useRouter();
  const [assetImages, accounts, contacts] = useTypedSelector(
    (store) => [store.assetImages, store.accounts, store.contacts],
  );

  const handleClick = async () => {
    router.push(RouteName.LoadingNetwork);

    const [isDone, message] = await basicSendAction(values);

    // if (usage === 'extension') {
    //   navigate(isDone ? RouteName.Sucess : RouteName.Error, {
    //     state: {
    //       message,
    //     },
    //   });

    router.push(isDone ? RouteName.Sucess : RouteName.Error);
  };

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

  return (
    <ConfirmLayout handleClick={handleClick}>
      <ScrollBar isHidden maxHeight={292}>
        <Card type="secondary" className="px-[11px] py-[16px]">
          <h2 className="text-lg font-medium mb-4">Confirm Send</h2>
          <S.Label>Amount</S.Label>
          <S.Value>
            {formatBalance(values.amount)}
            <S.Image
              alt={handleAssetAlt(values.asset)}
              src={handleAssetImage(values.asset, assetImages)}
            />

            <span className="text-lg">
              {values.asset.asset_code || 'XLM'}
            </span>
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
      </ScrollBar>
    </ConfirmLayout>
  );
};

export default BasicConfirmSend;
