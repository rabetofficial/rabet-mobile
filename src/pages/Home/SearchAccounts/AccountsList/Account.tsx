import React, { useEffect, useState } from 'react';

import abbr from 'utils/abbr';
import { IAccount } from 'reducers/accounts2';
import formatBalance from 'utils/formatBalance';
import useTotalBalance from 'hooks/useTotalBalance';
import useTypedSelector from 'hooks/useTypedSelector';
import handleAssetSymbol from 'utils/handleAssetSymbol';

import * as S from './styles';

type AppProps = {
  account: IAccount;
};

const Account = ({ account }: AppProps) => {
  const [host, currencies, options, user] = useTypedSelector(
    (store) => [
      store.host,
      store.currencies,
      store.options,
      store.user,
    ],
  );
  const [isImageLoaded, setIsImageLoaded] = useState(true);
  const totalBalance = useTotalBalance(account);
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    if (host) {
      setImageSrc(`https://logo.clearbit.com/${host}?size=30`);
    }
  }, [host, user.connectedWebsites]);

  const { name, isConnected, publicKey } = account;

  const isConnectedAndExistsInConnectedWebsites =
    isConnected &&
    user.connectedWebsites.includes(`${host}/${publicKey}`);

  return (
    <S.Item>
      <S.Avatar>{abbr(name)}</S.Avatar>

      <S.Container>
        <S.Name>
          {name.length > 13 ? `${name.slice(0, 13)}...` : name}
        </S.Name>

        <S.Amount>
          {handleAssetSymbol(currencies, options)}

          {formatBalance(totalBalance)}
        </S.Amount>
      </S.Container>

      {isConnectedAndExistsInConnectedWebsites ? (
        <S.ImageContainer>
          <img
            src={imageSrc}
            alt="Host"
            className={!isImageLoaded ? 'hidden' : ''}
            onError={() => {
              setIsImageLoaded(false);
            }}
          />

          {!isImageLoaded ? <S.Host>{host}</S.Host> : ''}
        </S.ImageContainer>
      ) : (
        ''
      )}
    </S.Item>
  );
};

export default Account;
