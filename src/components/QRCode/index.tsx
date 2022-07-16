import React from 'react';
import QR from 'qrcode.react';

import Card from 'components/common/Card';
import CopyKey from 'components/common/CopyKey';
import useActiveAccount from 'hooks/useActiveAccount';

import * as S from './styles';

const QRCode = () => {
  const { publicKey } = useActiveAccount();

  return (
    <>
      <Card type="primary" className="p-3">
        <div className="flex">
          <QR value={publicKey} size={139} />
          <S.Scan>
            <S.ScanText>SCAN ME</S.ScanText>
          </S.Scan>
        </div>
      </Card>

      <div className="mt-[25px]">
        <CopyKey keyValue={publicKey} />
      </div>
    </>
  );
};

export default QRCode;
