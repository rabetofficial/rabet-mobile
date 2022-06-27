import React, { useState } from 'react';

import World from 'svgs/LargeWorld';
import Layout from 'components/common/Layouts/BaseLayout';

import * as S from './styles';

const Browser = () => {
  const [searchString, setSearchString] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value);
  };
  return (
    <>
      <S.InputBox>
        <S.Label>
          <S.InputSearch
            type="text"
            value={searchString}
            onChange={handleChange}
            placeholder="Search or enter website url"
          />
        </S.Label>
      </S.InputBox>
      <Layout>
        <S.NoData>
          <World />
          <p>
            Type a URL or search to access your favorite stellar apps
          </p>
        </S.NoData>
      </Layout>
    </>
  );
};

export default Browser;
