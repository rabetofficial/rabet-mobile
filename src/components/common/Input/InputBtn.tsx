import React from 'react';

import Tooltips from 'components/common/Tooltips';
import { InputVariant } from 'models';
import InvisibleEye from 'svgs/InvisibleEye';
import VisibleEye from 'svgs/VisibleEye';
import AngleDoubleUp from 'svgs/AngleDoubleUp';

import * as S from './styles';

type AppProps = {
  variant?: InputVariant;
  visibleType: string;
  toggleVisible: () => void;
  setMax?: () => void;
};

const InputBtn = ({
  variant,
  visibleType,
  toggleVisible,
  setMax,
}: AppProps) => {
  const generateBtn = () => {
    if (variant === 'password') {
      return (
        <S.Icon type="button" onClick={toggleVisible}>
          {visibleType !== 'text' ? (
            <div style={{ marginRight: '-2px' }}>
              <InvisibleEye />
            </div>
          ) : (
            <VisibleEye />
          )}
        </S.Icon>
      );
    }

    if (variant === 'max') {
      return (
        <S.Max type="button">
          <S.MaxIcon onClick={setMax}>
            <AngleDoubleUp />
          </S.MaxIcon>
        </S.Max>
      );
    }

    return null;
  };

  return generateBtn();
};

export default InputBtn;
