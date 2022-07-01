import React, { CSSProperties } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import Plus from 'svgs/Plus';
import Button from 'components/common/Button';
import RouteName from 'staticRes/routes';

const Text = styled.div`
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
`;

type AssetsButtonType = { style: CSSProperties };

const AssetButton = ({ style }: AssetsButtonType) => (
  <Link href={RouteName.AddAsset} passHref>
    <Button
      type="submit"
      variant="outlined"
      size="medium"
      style={{
        ...style,
        border: '1.2px solid #f3f3f3',
        width: 'calc(100% - 32px)',
        right: '16px',
        left: '16px',
      }}
      content={
        <Text>
          <span className="mr-1.5">
            <Plus width="12" height="12" />
          </span>
          Add assets
        </Text>
      }
    />
  </Link>
);

export default AssetButton;
