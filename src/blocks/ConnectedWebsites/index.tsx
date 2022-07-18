import React from 'react';

import Button from 'components/common/Button';
import useTypedSelector from 'hooks/useTypedSelector';
import Layout from 'components/common/Layouts/BaseLayout';

import useActiveAccount from 'hooks/useActiveAccount';
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

  const removeConnectedWebsites = (cw: {
    host: string;
    publicKey: string;
  }) => {
    removeConnectedWebsite({
      host: cw.host,
      publicKey: cw.publicKey,
    });
  };

  return (
    <Layout className="mt-6">
      <S.Desc>
        List of websites that are allowed to interact with this
        account and get its public-key
      </S.Desc>

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
    </Layout>
  );
};

export default ConnectedWebsites;
