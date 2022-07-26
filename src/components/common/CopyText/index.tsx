import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import styled from 'styled-components';

import Tooltips from 'components/common/Tooltips';
import Copy from 'svgs/Copy';

const StyledButton = styled.button`
  text-align: center;
  border-radius: ${({ theme }) => theme.rounded.main};
  background: ${({ theme }) => theme.colors.primary.lighter};
  color: ${({ theme }) => theme.colors.primary.dark};
  font-size: 12px;
  width: 60px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    margin-right: 4px;
    path {
      fill: ${({ theme }) => theme.colors.primary.dark};
    }
  }
`;

type AppProps = {
  text: string;
  custom?: React.ReactNode;
  fullIcon?: boolean;
};

const CopyText = ({ text, custom, fullIcon }: AppProps) => {
  const [visible, setVisible] = useState(false);
  const [tooltipText, setTooltipText] = useState('Copy to clipboard');

  const toggle = () => {
    setTooltipText('Copied!');
    setVisible(true);

    navigator.clipboard.writeText(text);
  };

  const renderCopyTrigger = () => {
    if (custom) {
      return custom;
    }

    if (fullIcon) {
      return (
        <StyledButton type="button">
          <Copy />
          Copy
        </StyledButton>
      );
    }

    return <Copy />;
  };

  const onMouseEnter = () => setVisible(true);
  const onMouseLeave = () => {
    setVisible(false);
    setTooltipText('Copy to clipboard');
  };

  return (
    <span
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={toggle}
    >
      <Tooltips
        text={tooltipText}
        placement="top"
        isVisible={visible}
        controlled
      >
        <CopyToClipboard text={text}>
          <>{renderCopyTrigger()}</>
        </CopyToClipboard>
      </Tooltips>
    </span>
  );
};

CopyText.defaultProps = {
  custom: null,
  fullIcon: false,
};

export default CopyText;
