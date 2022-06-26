import React from 'react';
import { useRouter } from 'next/router';

import ArrowBack from 'svgs/LeftArrowBack';
import useTypedSelector from 'hooks/useTypedSelector';

import * as S from './styles';

type AppProps = {
  title?: string;
  alreadyLoaded?: boolean;
  className?: string;
  onClose?: () => void | undefined;
  backIcon?: boolean;
};

const ExtTitle = ({
  title,
  onClose,
  backIcon,
  className,
  alreadyLoaded,
}: AppProps) => {
  const router = useRouter();
  const accounts = useTypedSelector((state) => state.accounts);

  const handleClose = () => {
    if (onClose) {
      return onClose();
    }

    // if (accounts.length) {
    //   return router.push({
    //     pathname: '/Home',
    //     query: { alreadyLoaded: true },
    //   });
    // }

    return router.back();
  };

  return (
    <S.Container className={className}>
      {backIcon ? (
        <div className="mr-auto" onClick={handleClose}>
          <ArrowBack />
        </div>
      ) : null}

      <S.Title className="mr-auto ml-[-10px]">{title}</S.Title>
    </S.Container>
  );
};

ExtTitle.defaultProps = {
  title: '',
  alreadyLoaded: true,
  className: '',
  onClose: undefined,
  backIcon: true,
};

export default ExtTitle;
