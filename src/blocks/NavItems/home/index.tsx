import React from 'react';
import Link from 'next/link';

import shorter from 'helpers/shorter';
import FilledCopy from 'svgs/FilledCopy';
import RouteName from 'staticRes/routes';
import useLoadHome from 'hooks/useLoadHome';
import AssetList from 'components/AssetList';
import CopyText from 'components/common/CopyText';
import ScrollBar from 'components/common/ScrollBar';
import ExpandHorizontal from 'svgs/ExpandHorizontal';
import useActiveAccount from 'hooks/useActiveAccount';
import Layout from 'components/common/Layouts/BaseLayout';
import useTypedSelector from 'hooks/useTypedSelector';
import Loading from 'components/Loading';
import useTotalBalance from 'hooks/useTotalBalance';

import formatBalance from 'utils/formatBalance';
import handleAssetSymbol from 'utils/handleAssetSymbol';
import Links from './links';
import AssetButton from './AssetButton';
import AccountModal from './AccountModal';

import * as S from './styles';

const Home = () => {
  const account = useActiveAccount();
  const isLoading = useLoadHome();
  const totalBalance = useTotalBalance();

  const [currencies, options] = useTypedSelector((store) => [
    store.currencies,
    store.options,
  ]);

  const assets = account.assets || [];

  if (isLoading) {
    return <Loading size={80} />;
  }

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
        <ScrollBar isVertical maxHeight={290}>
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
