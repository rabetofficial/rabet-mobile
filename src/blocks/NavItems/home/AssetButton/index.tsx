import React, { CSSProperties } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

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

const AssetButton = ({ style }: AssetsButtonType) => {
  const router = useRouter();
  return (
    <Button
      type="submit"
      variant="outlined"
      size="medium"
      style={{
        ...style,
        border: '1.2px solid #f3f3f3',
        // width: 'calc(100% - 32px)',
        // right: '16px',
        // left: '16px',
      }}
      content={
        <Text>
          <span className="mr-1.5">
            <Plus width="12" height="12" />
          </span>
          Add assets
        </Text>
      }
      onClick={() => router.push(RouteName.AddAsset)}
    />
  );
};

export default AssetButton;
