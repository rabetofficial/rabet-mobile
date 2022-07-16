import React, { useEffect } from 'react';
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
import useTotalBalance from 'hooks/useTotalBalance';
import LoadingOne from 'pages/loading-one';

import formatBalance from 'utils/formatBalance';
import handleAssetSymbol from 'utils/handleAssetSymbol';
import useAppDispatch from 'hooks/useAppDispatch';
import Links from './links';
import AssetButton from './AssetButton';
import AccountModal from './AccountModal';

import * as S from './styles';

type HomeProps = {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};
const Home = ({ setLoading }: HomeProps) => {
  const dispatch = useAppDispatch();
  const account = useActiveAccount();
  const isLoading = useLoadHome(dispatch);
  const totalBalance = useTotalBalance();

  const [currencies, options] = useTypedSelector((store) => [
    store.currencies,
    store.options,
  ]);

  const assets = account.assets || [];

  if (isLoading) {
    return <LoadingOne />;
  }

  const scrollMaxHeight = document.documentElement.clientHeight - 375;

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
