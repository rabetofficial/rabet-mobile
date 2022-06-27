import React from 'react';
import Multiply from 'svgs/Multiply';
import ExtTitle from 'components/common/ExitTitle';
import Layout from 'components/common/Layouts/BaseLayout';

import * as S from './styles';
import Button from '../../../components/common/Button';

const ConnectedWebsites = () => {
  const websitesMapped = [
    'Lumenswap.io',
    'Stellarterm.com',
    'Litemint.com',
    'Rabet.io',
  ];

  const removeConnectedWebsites = (web: string) => {};
  return (
    <>
      <ExtTitle title="Connected websites" />

      <Layout className="mt-6">
        <S.Desc>
          List of websites that are allowed to interact with this
          account and get its public-key
        </S.Desc>

        <div>
          {websitesMapped.map((web) => (
            <S.Website key={web}>
              <S.Link href="#" rel="noreferrer">
                {web}
              </S.Link>

              <Button
                variant="danger"
                onClick={() => {
                  removeConnectedWebsites(web);
                }}
                content="Disconnect"
                className="w-[89px] h-[32px] text-sm font-medium"
              />
            </S.Website>
          ))}
        </div>
      </Layout>
    </>
  );
};

export default ConnectedWebsites;
