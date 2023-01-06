import { Horizon } from 'stellar-sdk';
import React from 'react';

import Image from 'components/common/Image';
import formatBalance from 'utils/formatBalance';
import handleAssetAlt from 'utils/handleAssetAlt';
import handleAssetsKeys from 'utils/handleAssetKeys';
import handleAssetImage from 'utils/handleAssetImage';
import useTypedSelector from 'hooks/useTypedSelector';
import questionLogo from 'public/images/question-circle.png';

import * as S from './styles';

type AppProps = {
  assets: Horizon.BalanceLine[];
  close: () => void;
  onChange: (value: Horizon.BalanceLine) => void;
  valueName?: string;
};

const SearchAsset = ({
  assets,
  close,
  onChange,
  valueName,
}: AppProps) => {
  const assetImages = useTypedSelector((store) => store.assetImages);

  const handleClick = (asset: Horizon.BalanceLine) => {
    onChange(asset);

    close();
  };

  const handleShowDomain = (asset: Horizon.BalanceLine) => {
    const foundAssetImage = assetImages.find(
      (assetImage) =>
        assetImage.asset_code === asset.asset_code &&
        assetImage.asset_issuer === asset.asset_issuer,
    );

    if (foundAssetImage && foundAssetImage.domain) {
      return foundAssetImage.domain;
    }

    if (asset.domain) {
      return asset.domain;
    }

    return '';
  };

  return (
    <>
      {assets.map((asset) => (
        <S.ListItem
          key={`${valueName}-${handleAssetsKeys(asset)}`}
          onClick={() => {
            handleClick(asset);
          }}
        >
          <S.Asset>
            <Image
              fallBack={questionLogo}
              alt={handleAssetAlt(asset)}
              src={handleAssetImage(asset, assetImages)}
            />

            <div>
              <S.AssetName>{asset.asset_code || 'XLM'}</S.AssetName>

              <S.AssetInfo>{handleShowDomain(asset)}</S.AssetInfo>
            </div>
          </S.Asset>
          <S.AssetPrice>{formatBalance(asset.balance)}</S.AssetPrice>
        </S.ListItem>
      ))}

      {!assets.length ? (
        <div className="flex items-center justify-center h-[44vh] text-primary-darker">
          Asset not found
        </div>
      ) : null}
    </>
  );
};

SearchAsset.defaultProps = {
  valueName: '',
};

export default SearchAsset;
