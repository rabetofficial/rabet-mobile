import React from 'react';
import { useRouter } from 'next/router';

import ArrowBack from 'svgs/LeftArrowBack';

import * as S from './styles';

type AppProps = {
  title?: string;
  className?: string;
  onClose?: () => void | undefined;
  backIcon?: boolean;
};

const ExtTitle = ({
  title,
  onClose,
  backIcon,
  className,
}: AppProps) => {
  const router = useRouter();

  const handleClose = () => {
    if (onClose) {
      return onClose();
    }

    return router.back();
  };

  return (
    <S.Container className={className}>
      {backIcon ? (
        <div className="mr-auto" onClick={handleClose}>
          <ArrowBack />
        </div>
      ) : null}

      <S.Title className={`ml-[-10px] ${backIcon ? 'mr-auto' : ''}`}>
        {title}
      </S.Title>
    </S.Container>
  );
};

ExtTitle.defaultProps = {
  title: '',
  className: '',
  onClose: undefined,
  backIcon: true,
};

export default ExtTitle;
