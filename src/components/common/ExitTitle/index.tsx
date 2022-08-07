import React from 'react';
import { useRouter } from 'next/router';

import ArrowBack from 'svgs/LeftArrowBack';

import * as S from './styles';

type AppProps = {
  title?: string;
  className?: string;
  routerPath?: any;
  backIcon?: boolean;
  borderless?: boolean;
};

const ExtTitle = ({
  title,
  routerPath,
  backIcon,
  className,
  borderless,
}: AppProps) => {
  const router = useRouter();

  const handleClose = () => {
    if (routerPath) {
      return router.push(routerPath);
    }

    return router.back();
  };

  return (
    <S.Container
      className={`${className} ${borderless ? '!border-b-0' : ''}`}
    >
      {backIcon ? (
        <>
          <S.IconContainer className="mr-auto" onClick={handleClose}>
            <ArrowBack />
          </S.IconContainer>
          <S.Title className="mr-auto ml-[-10px]" isBack>
            {title}
          </S.Title>
        </>
      ) : (
        <S.Title isBack={false}>{title}</S.Title>
      )}
    </S.Container>
  );
};

ExtTitle.defaultProps = {
  title: '',
  className: '',
  routerPath: undefined,
  backIcon: true,
  borderless: false,
};

export default ExtTitle;
