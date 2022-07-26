import React from 'react';
import Link from 'next/link';

import shorter from 'utils/shorter';
import FilledCopy from 'svgs/FilledCopy';
import RouteName from 'staticRes/routes';
import LoadingOne from 'pages/loading-one';
import AssetList from 'components/AssetList';
import formatBalance from 'utils/formatBalance';
import CopyText from 'components/common/CopyText';
import useTotalBalance from 'hooks/useTotalBalance';
import ScrollBar from 'components/common/ScrollBar';
import ExpandHorizontal from 'svgs/ExpandHorizontal';
import useActiveAccount from 'hooks/useActiveAccount';
import useTypedSelector from 'hooks/useTypedSelector';
import handleAssetSymbol from 'utils/handleAssetSymbol';
import Layout from 'components/common/Layouts/BaseLayout';

import Links from './links';
import * as S from './styles';
import AccountModal from './AccountModal';

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

  const scrollMaxHeight = document.documentElement.clientHeight - 351;

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
          <AssetList assets={assets} />
        </ScrollBar>
      </Layout>
    </>
  );
};
export default Home;
