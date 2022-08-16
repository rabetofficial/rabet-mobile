import React from 'react';
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
interface AssetsProps {
  length: number;
}

const Container = styled.div<AssetsProps>`
  margin-bottom: ${({ length }) => (length > 4 ? '20px' : '0')};
  position: ${({ length }) => (length < 4 ? 'absolute' : 'static')};
  bottom: ${({ length }) => (length < 4 ? '120px' : '0')};
  width: ${({ length }) => (length < 4 ? 'calc(100% - 32px)' : '')};

  @media (max-height: 675px) {
    bottom: ${({ length }) => (length < 4 ? '80px' : '0')};
  }
`;
type AssetsButtonType = { length: number };

const AssetButton = ({ length }: AssetsButtonType) => {
  const router = useRouter();
  return (
    <Container length={length}>
      <Button
        type="submit"
        variant="outlined"
        size="medium"
        style={{
          border: '1.2px solid #f3f3f3',
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
    </Container>
  );
};

export default AssetButton;
