import React, { useState } from 'react';

import shorter from 'helpers/shorter';
import Asset from 'components/AssetList';
import CopyText from 'components/common/CopyText';
import EditWalletName from 'components/common/EditWalletName';
import FilledCopy from 'svgs/FilledCopy';

import DropDownList from './DropDownList';

import Links from './links';
// import SearchAccounts from './SearchAccounts';=
import * as S from './styles';

const Home = () => {
  const [editableName, setEditableName] = useState(false);
  const mockData = {
    name: 'John Due',
    publicKey:
      'GDHKYJMUNZ4STELQ7K5EH6TDGKJ2QJ5UPX5HWLOFWRC4H7NFG4JJHNFE',
  };

  return (
    <S.Layout>
      <S.Box className="pb-6">
        <S.Head>
          <S.Account>. {/* <SearchAccounts /> */}</S.Account>
          <S.EditName>
            {editableName ? (
              <div className="mt-3 w-[196px]">
                <EditWalletName
                  editable
                  setEditableName={setEditableName}
                  height={36}
                  checkIconWidth={18}
                  fontSize={16}
                />
              </div>
            ) : (
              <div className="ml-1.5">
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
            )}
          </S.EditName>
          <S.DropDown>
            <DropDownList setEditableName={setEditableName} />
          </S.DropDown>
        </S.Head>
        <S.Asset>$991.62</S.Asset>
        <Links />
      </S.Box>
      <S.Box className="bg-red-300 mt-4">
        <div> .</div>
        <Asset />
      </S.Box>
    </S.Layout>
  );
};

export default Home;
