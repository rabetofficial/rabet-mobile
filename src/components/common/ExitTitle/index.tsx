import React from 'react';
import { useRouter } from 'next/router';

import ArrowBack from 'svgs/LeftArrowBack';

import * as S from './styles';

type AppProps = {
  title?: string;
  className?: string;
  onClose?: () => void | undefined;
  backIcon?: boolean;
  borderless?: boolean;
};

const ExtTitle = ({
  title,
  onClose,
  backIcon,
  className,
  borderless,
}: AppProps) => {
  const router = useRouter();

  const handleClose = () => {
    if (onClose) {
      return onClose();
    }

    return router.back();
  };

  return (
    <S.Container
      className={`${className} ${borderless ? '!border-b-0' : ''}`}
    >
      {backIcon ? (
        <>
          <div className="mr-auto" onClick={handleClose}>
            <ArrowBack />
          </div>
          <S.Title className="mr-auto ml-[-10px]">{title}</S.Title>
        </>
      ) : (
        <S.Title>{title}</S.Title>
      )}
    </S.Container>
  );
};

ExtTitle.defaultProps = {
  title: '',
  className: '',
  onClose: undefined,
  backIcon: true,
  borderless: false,
};

export default ExtTitle;
