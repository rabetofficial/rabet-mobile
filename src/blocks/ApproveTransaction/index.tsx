import React, { useState } from 'react';
import StellarSdk, { Transaction } from 'stellar-sdk';

import Button from 'components/common/Button';
import CopyText from 'components/common/CopyText';
import ButtonContainer from 'components/common/ButtonContainer';
import Card from 'components/common/Card';
import maxText from 'utils/maxText';

import Operations from './Operations';

import * as S from './styles';

type ApproveType = {
  onCancel: () => void;
};
const ApproveTransaction = ({ onCancel }: ApproveType) => {
  const [isImageLoaded, setIsImageLoaded] = useState(true);

  const MockData = {
    name: 'John Due',
    host: 'host',
    title: 'title',
    publicKey:
      'GDHKYJMUNZ4STELQ7K5EH6TDGKJ2QJ5UPX5HWLOFWRC4H7NFG4JJHNFE',
    network: 'main network',
    xdr: 'sth xdr',
  };

  const handleConfirm = () => {
    console.log(' ');
  };

  // let transaction;

  // try {
  //   // const obj = StellarSdk.xdr.TransactionEnvelope.fromXDR(
  //   //   MockData.xdr,
  //   //   'base64',
  //   // );
  //   // transaction = new Transaction(obj, StellarSdk.Networks.PUBLIC);
  // } catch (e) {
  //   return (
  //     <>
  //       <S.Confirm>
  //         <ExtTitle title={MockData.network} />
  //
  //         <div className="content">
  //           <p>Invalid XDR</p>
  //         </div>
  //
  //         <ButtonContainer>
  //           <Button
  //             variant="primary"
  //             size="medium"
  //             content="Close"
  //             onClick={handleClose}
  //           />
  //         </ButtonContainer>
  //       </S.Confirm>
  //     </>
  //   );
  // }

  const operations = [
    {
      title: 'Create Account',
      info: [
        {
          title: 'Destination',
          value: 'ABCDEFG',
        },
        {
          title: 'Amount',
          value: '1234,567',
        },
      ],
    },
    {
      title: 'Create claimable balance',
      info: [
        {
          title: 'Destination',
          value: 'ABCD',
        },
      ],
    },
  ];

  // const { _operations: operations } = transaction;

  return (
    <>
      <S.TopContainer>
        <S.NetworkStatus>Main network</S.NetworkStatus>
        <S.Centered>
          <S.ImgContainer>
            <img
              src={`https://logo.clearbit.com/${MockData.host}`}
              alt={MockData.host}
              className={!isImageLoaded ? 'image-error' : ''}
              onError={() => {
                setIsImageLoaded(false);
              }}
            />

            {!isImageLoaded ? (
              <S.HostStyle>
                {MockData.host[0].toUpperCase()}
              </S.HostStyle>
            ) : (
              ''
            )}
          </S.ImgContainer>
          <S.Title>Approve Transaction</S.Title>
          <div>
            <S.Link href="#">{MockData.host}</S.Link>
          </div>
        </S.Centered>
        <S.Account>
          <S.AccountTitle>Source account:</S.AccountTitle>
          <div className="font-medium">
            <CopyText
              text={MockData.publicKey}
              custom={maxText(MockData.name, 12)}
            />
          </div>
        </S.Account>
      </S.TopContainer>
      <div className="content">
        <Card type="secondary" className="mt-4">
          <Operations operations={operations} />
        </Card>

        <ButtonContainer mt={32}>
          <Button
            type="submit"
            variant="primary"
            size="medium"
            content="Confirm"
            onClick={handleConfirm}
          />
        </ButtonContainer>
        <ButtonContainer mt={23}>
          <Button
            variant="default"
            size="medium"
            content="Cancel"
            onClick={onCancel}
          />
        </ButtonContainer>
      </div>
    </>
  );
};

export default ApproveTransaction;
