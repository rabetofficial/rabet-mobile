import React from 'react';
import Link from 'next/link';

import shorter from 'utils/shorter';
import FilledCopy from 'svgs/FilledCopy';
import RouteName from 'staticRes/routes';
import AssetList from 'components/AssetList';
import CopyText from 'components/common/CopyText';
import ScrollBar from 'components/common/ScrollBar';
import ExpandHorizontal from 'svgs/ExpandHorizontal';
import useActiveAccount from 'hooks/useActiveAccount';
import Layout from 'components/common/Layouts/BaseLayout';
import useTypedSelector from 'hooks/useTypedSelector';
import useTotalBalance from 'hooks/useTotalBalance';
import LoadingOne from 'pages/loading-one';
import formatBalance from 'utils/formatBalance';
import handleAssetSymbol from 'utils/handleAssetSymbol';
import Links from './links';
import AssetButton from './AssetButton';
import AccountModal from './AccountModal';

import * as S from './styles';

type HomeProps = {
  loading: boolean;
};
const Home = ({ loading }: HomeProps) => {
  const account = useActiveAccount();
  const totalBalance = useTotalBalance();

  const [currencies, options] = useTypedSelector((store) => [
    store.currencies,
    store.options,
  ]);

  const assets = account.assets || [];

  if (loading) {
    return <LoadingOne />;
  }

  const scrollMaxHeight = document.documentElement.clientHeight - 360;

  return (
    <>
      <Layout>
        <S.Head>
          <S.Account>
            <AccountModal />
          </S.Account>

          <div>
            <S.NameValue>{account.name}</S.NameValue>
            <CopyText
              text={account.publicKey}
              custom={
                <span className="text-xs text-primary-dark inline-flex items-center gap-[4px] ml-[2px]">
                  {shorter(account.publicKey, 6)}
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
        <S.Asset>
          {handleAssetSymbol(currencies, options)}
          {formatBalance(totalBalance)}
        </S.Asset>

        <S.LinkContainer>
          <Links />
        </S.LinkContainer>
      </Layout>

      <S.Devider />

      <Layout>
        <ScrollBar isVertical maxHeight={scrollMaxHeight}>
          <AssetList assets={assets}>
            <AssetButton
              style={{
                position: assets.length < 4 ? 'absolute' : 'static',
                bottom: assets.length < 4 ? '120px' : '0',
                width: assets.length < 4 ? 'calc(100% - 32px)' : '',
              }}
            />
          </AssetList>
        </ScrollBar>
      </Layout>
    </>
  );
};
export default Home;
