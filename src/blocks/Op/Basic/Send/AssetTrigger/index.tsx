import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import AngleDownBold from 'svgs/AngleDownBold';
import questionLogo from 'public/images/question-circle.png';

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

const AssetTrigger = () => (
  <Container>
    <div className="flex items-center">
      <Image
        width={32}
        height={32}
        className="rounded-full"
        src={questionLogo}
      />
      <div className="ml-2">
        <span>XLM</span>
        <span className="text-primary-darker ml-[6px]">1,280</span>
      </div>
    </div>
    <SvgContainer>
      <AngleDownBold />
    </SvgContainer>
  </Container>
);

export default AssetTrigger;
