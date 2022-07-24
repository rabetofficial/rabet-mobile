import React from 'react';
import Image from 'next/image';
import { Horizon } from 'stellar-sdk';
import styled from 'styled-components';

import AngleDownBold from 'svgs/AngleDownBold';
import humanizeNumber from 'helpers/humanizeNumber';
import questionLogo from 'public/images/question-circle.png';
import { AssetImage } from 'reducers/assetImages';
import handleAssetImage from 'utils/handleAssetImage';
import handleAssetAlt from 'utils/handleAssetAlt';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.colors.primary.lighter};
  border-radius: 2px;
  padding: 8px 16px;
`;

const SvgContainer = styled.div`
  svg {
    width: 16px;
    height: auto;
  }
`;

type AssetTriggerType = {
  asset: Horizon.BalanceLine;
  assetImages: AssetImage[];
};

const AssetTrigger = ({ asset, assetImages }: AssetTriggerType) => (
  <Container>
    <div className="flex items-center">
      <img
        width={32}
        height={32}
        className="rounded-full"
        alt={handleAssetAlt(asset)}
        src={handleAssetImage(asset, assetImages)}
      />

      <div className="ml-2">
        <span>{asset.asset_code || 'XLM'}</span>

        <span className="text-primary-darker ml-[6px]">
          {humanizeNumber(asset.balance)}
        </span>
      </div>
    </div>

    <SvgContainer>
      <AngleDownBold />
    </SvgContainer>
  </Container>
);

export default AssetTrigger;
