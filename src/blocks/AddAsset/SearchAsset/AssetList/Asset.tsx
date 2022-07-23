import React from 'react';
import Image from 'next/image';

import CheckMarkFill from 'svgs/CheckMarkFill';
import questionSrc from 'public/images/question-circle.png';
import ImageOnErrorHandler from 'helpers/ImageOnErrorHandler';
import { AssetImageWithActive } from 'reducers/assetImages';

import shortName from 'helpers/shortName';
import * as S from './styles';

type AppProps = {
  index: number;
  asset: AssetImageWithActive;
  setActive: (index: number) => void;
  selectedList: AssetImageWithActive[];
};

const Asset = ({
  asset,
  index,
  setActive,
  selectedList,
}: AppProps) => (
  <S.ListItem
    aria-disabled={!asset.active}
    onClick={() => asset.active && setActive(index)}
    style={{
      border:
        asset.active &&
        selectedList.find(
          (a) =>
            a.asset_code === asset.asset_code &&
            a.asset_issuer === asset.asset_issuer,
        ) &&
        '1px solid black',
    }}
  >
    <S.Logo>
      {asset.logo ? (
        <img
          width="34px"
          height="34px"
          src={asset.logo}
          alt={shortName(asset.asset_code)}
          onError={(e) => ImageOnErrorHandler(e, questionSrc.src)}
        />
      ) : (
        <Image
          src={questionSrc}
          width="34px"
          height="34px"
          alt="icon"
        />
      )}
    </S.Logo>
    <S.ListItemName>{asset.asset_code}</S.ListItemName>
    &nbsp;
    <S.ListItemWeb>{asset.domain ? asset.domain : '-'}</S.ListItemWeb>
    {asset.is_verified ? (
      <div className="ml-auto">
        <CheckMarkFill />
      </div>
    ) : null}
  </S.ListItem>
);

export default Asset;
