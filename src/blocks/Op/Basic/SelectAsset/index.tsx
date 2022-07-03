import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import questionLogo from 'public/images/question-circle.png';
import AngleDownBold from 'svgs/AngleDownBold';

const Trigger = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.colors.primary.lighter};
  border-radius: 22px;
  width: 110px;
  height: 44px;
  padding: 6px 10px 6px 6px;
`;

const SelectAsset = () => (
  <div>
    <Trigger>
      <div className="flex items-center">
        <Image src={questionLogo} height={32} width={32} />
        <div className="font-medium ml-1">XLM</div>
      </div>
      <AngleDownBold />
    </Trigger>
  </div>
);

export default SelectAsset;
