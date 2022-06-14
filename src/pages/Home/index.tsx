import Asset from 'components/AssetList';
import React from 'react';
import DropDownList from './DropDownList';

import Links from './links';
// import SearchAccounts from './SearchAccounts';
import * as S from './styles';

const Home = () => (
  <S.Layout>
    <S.Box className="pb-6">
      <S.Head>
        <DropDownList />
        {/* <SearchAccounts /> */}
      </S.Head>
      <S.Asset>$991.62</S.Asset>
      <Links />
    </S.Box>
    <S.Box className="mt-4">
      <Asset />
    </S.Box>
  </S.Layout>
);

export default Home;
