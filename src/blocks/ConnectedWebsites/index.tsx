import React, { useState, useCallback } from 'react';

import Button from 'components/common/Button';
import NoData from 'components/common/NoData';
import useTypedSelector from 'hooks/useTypedSelector';
import useActiveAccount from 'hooks/useActiveAccount';
import Layout from 'components/common/Layouts/BaseLayout';
import removeConnectedWebsite from 'actions/accounts/removeConnectedWebsite';

import * as S from './styles';

const ConnectedWebsites = () => {
  const account = useActiveAccount();
  const user = useTypedSelector((store) => store.user);

  const connectedWebsites = user.connectedWebsites
    .filter((cw) => cw.includes(account.publicKey))
    .map((cw) => ({
      host: cw.split('/')[0],
      publicKey: cw.split('/')[1],
    }));

  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({} as any), []);

  const removeConnectedWebsites = (cw: {
    host: string;
    publicKey: string;
  }) => {
    removeConnectedWebsite({
      host: cw.host,
      publicKey: cw.publicKey,
    });

    forceUpdate();
  };

  return (
    <Layout className="mt-6">
      <S.Desc>
        List of websites that are allowed to interact with this
        account and get its public-key
      </S.Desc>
      {!connectedWebsites.length ? (
        <NoData msg="No websites." className="mt-[150px]" />
      ) : (
        <div>
          {connectedWebsites.map((cw) => (
            <S.Website key={cw.host}>
              <S.Link href="/#" rel="noreferrer">
                {cw.host}
              </S.Link>

              <Button
                variant="danger"
                onClick={() => {
                  removeConnectedWebsites(cw);
                }}
                content="Disconnect"
                className="w-[89px] h-[32px] text-sm font-medium"
              />
            </S.Website>
          ))}
        </div>
      )}
    </Layout>
  );
};

export default ConnectedWebsites;
