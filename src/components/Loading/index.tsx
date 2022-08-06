import React from 'react';

import loading from 'public/images/loading.svg';

import * as S from './styles';

type AppProps = {
  title?: string;
  size: number | string;
  titleStyle?: string;
  className?: string;
  titleNoMargin?: boolean;
};

const Loading = ({
  title,
  size,
  titleStyle,
  className,
  titleNoMargin,
}: AppProps) => (
  <S.Container className={className}>
    <S.Loading
      src={loading.src}
      alt="loading"
      width={size}
      height={size}
    />

    {title && (
      <S.Title
        className={titleStyle}
        style={{ marginTop: titleNoMargin ? '-7px' : '13px' }}
      >
        <p>{title}</p>
      </S.Title>
    )}
  </S.Container>
);

Loading.defaultProps = {
  title: '',
  titleStyle: '',
  className: '',
  titleNoMargin: false,
};

export default Loading;
