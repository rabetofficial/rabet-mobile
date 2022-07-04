import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Horizon } from 'stellar-sdk';

import questionLogo from 'public/images/question-circle.png';
import AngleDownBold from 'svgs/AngleDownBold';
import BottomSheet from 'components/common/BottomSheet';
import Layout from 'components/common/Layouts/BaseLayout';
import useTypedSelector from 'hooks/useTypedSelector';
import handleAssetAlt from 'utils/handleAssetAlt';
import handleAssetImage from 'utils/handleAssetImage';
import Image from 'components/common/Image';
import Search from './Search';

const Trigger = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.colors.primary.lighter};
  border-radius: 22px;
  min-width: 110px;
  height: 44px;
  padding: 6px 10px 6px 6px;

  img {
    width: 32px;
    height: auto;
  }
`;

type AppProps = {
  asset: Horizon.BalanceLine;
  assets: Horizon.BalanceLine[];
  onChange: (value: any) => void;
  valueName?: string;
  defaultNull?: boolean;
  setValue?: null;
};

const SelectAsset = ({
  asset,
  onChange,
  assets,
  setValue,
  valueName,
  defaultNull,
}: AppProps) => {
  const [currentAsset, setCurrentAsset] = useState(
    defaultNull ? null : assets[0],
  );
  const assetImages = useTypedSelector((store) => store.assetImages);
  const [open, setOpen] = useState(false);
  const onClose = () => setOpen(false);
  const onOpen = () => setOpen(true);

  useEffect(() => {
    if (asset) {
      setCurrentAsset(asset);
    }
  }, [asset]);

  const handleAssetChange = (newAsset: Horizon.BalanceLine) => {
    setCurrentAsset(newAsset);

    onChange(newAsset);

    if (setValue) {
      setValue(valueName, newAsset);
    }
  };
  return (
    <>
      <Trigger onClick={onOpen}>
        {currentAsset ? (
          <div className="flex items-center">
            <Image
              fallBack={questionLogo}
              alt={handleAssetAlt(currentAsset)}
              src={handleAssetImage(currentAsset, assetImages)}
            />
            <span className="ml-1">
              {currentAsset.asset_code || 'XLM'}
            </span>
          </div>
        ) : (
          <span>NONE</span>
        )}
        <AngleDownBold />
      </Trigger>

      <BottomSheet isOpen={open} setOpen={setOpen} height={505}>
        <Layout>
          <Search
            assets={assets}
            close={onClose}
            valueName={valueName}
            onChange={handleAssetChange}
          />
        </Layout>
      </BottomSheet>
    </>
  );
};

SelectAsset.defaultProps = {
  valueName: '',
  setValue: undefined,
  defaultNull: false,
};

export default SelectAsset;
