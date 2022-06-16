import React from 'react';
import { useRouter } from 'next/router';

import ArrowBack from 'svgs/LeftArrowBack';
import useTypedSelector from 'hooks/useTypedSelector';

import * as S from './styles';

type AppProps = {
  title?: string;
  status?: 'success' | 'warn' | null;
  alreadyLoaded?: boolean;
  className?: string;
  onClose?: () => void | undefined;
  BackIcon?: boolean;
};

const ExtTitle = ({
  title,
  status,
  onClose,
  BackIcon,
  className,
  alreadyLoaded,
}: AppProps) => {
  const router = useRouter();
  const accounts = useTypedSelector((state) => state.accounts);

  const generateTitle = () => {
    if (status) {
      return (
        <S.Status className={status}>
          <span />
          {title}
        </S.Status>
      );
    }

    if (title) {
      return <S.Title>{title}</S.Title>;
    }

    return null;
  };

  const handleClose = () => {
    if (onClose) {
      return onClose();
    }

    if (accounts.length) {
      return router.push({
        pathname: '/Home',
        query: { alreadyLoaded: true },
      });
    }

    return router.back();
  };

  return (
    <>
      {className ? (
        <S.Container className={className}>
          {!BackIcon ? (
            <S.Icon onClick={handleClose}>
              <ArrowBack />
            </S.Icon>
          ) : (
            ''
          )}

          <div>{generateTitle()}</div>
        </S.Container>
      ) : (
        <S.Container className="flex items-center justify-between">
          {!BackIcon ? (
            <S.Icon onClick={handleClose}>
              <ArrowBack />
            </S.Icon>
          ) : (
            ''
          )}

          <div>{generateTitle()}</div>
        </S.Container>
      )}
    </>
  );
};

ExtTitle.defaultProps = {
  title: '',
  status: null,
  alreadyLoaded: true,
  className: '',
  onClose: undefined,
  BackIcon: false,
};

export default ExtTitle;
