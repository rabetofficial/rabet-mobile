import React from 'react';
import Link from 'next/link';

import RouteName from 'staticRes/routes';
import shorter from 'helpers/shorter';
import AssetList from 'components/AssetList';
import CopyText from 'components/common/CopyText';
import ExpandHorizontal from 'svgs/ExpandHorizontal';
import FilledCopy from 'svgs/FilledCopy';
import Layout from 'components/common/Layouts/BaseLayout';
import useActiveAccount from 'hooks/useActiveAccount';
import ScrollBar from 'components/common/ScrollBar';
import Links from './links';
import AccountModal from './AccountModal';
import AssetButton from './AssetButton';

import * as S from './styles';

const Home = () => {
  const { assets: asts } = useActiveAccount();
  const assets = asts || [];
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
                <span className="text-xs text-primary-dark inline-flex items-center gap-[4px] ml-[2px]">
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
        <ScrollBar isVertical maxHeight={290}>
          <Link href="/assets">asset</Link>
          <AssetList assets={assets}>
            <AssetButton
              style={{
                position: assets.length < 4 ? 'absolute' : 'static',
                bottom: assets.length < 4 ? '88px' : '0',
              }}
            />
          </AssetList>
        </ScrollBar>
      </Layout>
    </>
  );
};
export default Home;
