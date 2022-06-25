import React from 'react';
import Link from 'next/link';

import RouteName from 'staticRes/routes';
import shorter from 'helpers/shorter';
import Asset from 'components/AssetList';
import CopyText from 'components/common/CopyText';
import ExpandHorizontal from 'svgs/ExpandHorizontal';
import FilledCopy from 'svgs/FilledCopy';
import Layout from 'components/common/Layouts/BaseLayout';
import Links from './links';
import AccountModal from './AccountModal';

import * as S from './styles';

const Home = () => {
  const mockData = {
    name: 'John Due',
    publicKey:
      'GDHKYJMUNZ4STELQ7K5EH6TDGKJ2QJ5UPX5HWLOFWRC4H7NFG4JJHNFE',
  };

  return (
    <>
      <Layout>
        <S.Head>
          <S.Account>
            <AccountModal />
          </S.Account>

          <div>
            <S.NameValue>{mockData.name}</S.NameValue>
            <CopyText
              text={mockData.publicKey}
              custom={
                <span className="text-xs text-primary-dark inline-flex items-center gap-[3px] ml-[2px]">
                  {shorter(mockData.publicKey, 6)}
                  <FilledCopy />
                </span>
              }
            />
          </div>

          <Link href={RouteName.WalletOption}>
            <a>
              <ExpandHorizontal />
            </a>
          </Link>
        </S.Head>
        <S.Asset>$991.62</S.Asset>
        <S.LinkContainer>
          <Links />
        </S.LinkContainer>
      </Layout>

      <S.Devider />

      <Layout>
        <Asset />
      </Layout>
    </>
  );
};
export default Home;
