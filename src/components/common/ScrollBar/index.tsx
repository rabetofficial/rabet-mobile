import React from 'react';

import * as S from './styles';

type AppProps = {
  children: React.ReactNode;
  isVertical?: boolean;
  isHorizontal?: boolean;
  isHidden?: boolean;
  maxWidth?: number;
  maxHeight?: number;
  disableOverflow?: boolean;
  style?: React.CSSProperties;
};

const ScrollBar = ({
  children,
  isVertical,
  isHorizontal,
  isHidden,
  maxWidth,
  maxHeight,
  disableOverflow,
  style,
}: AppProps) => {
  if (isVertical) {
    return (
      <S.VerticalScroll
        maxHeight={maxHeight}
        disableOverflow={disableOverflow}
        style={style}
      >
        {children}
      </S.VerticalScroll>
    );
  }

  if (isHorizontal) {
    return (
      <S.HorizontalScroll
        maxWidth={maxWidth}
        disableOverflow={disableOverflow}
        style={style}
      >
        {children}
      </S.HorizontalScroll>
    );
  }

  if (isHidden) {
    return (
      <S.HiddenScroll
        maxHeight={maxHeight}
        maxWidth={maxWidth}
        disableOverflow={disableOverflow}
        style={style}
      >
        {children}
      </S.HiddenScroll>
    );
  }

  return <div style={style}>children</div>;
};

ScrollBar.defaultProps = {
  isVertical: false,
  isHorizontal: false,
  isHidden: false,
  maxWidth: 0,
  maxHeight: 0,
  disableOverflow: false,
  style: {},
};

export default ScrollBar;
