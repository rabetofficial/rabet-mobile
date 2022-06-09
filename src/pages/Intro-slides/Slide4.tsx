import React from 'react';
import { useRouter } from 'next/router';

import Button from 'components/common/Button';
import { SlideFour } from 'svgs/SlidesLogo';

import RouteName from 'staticRes/routes';

import * as S from './styles';

const ForthSlide = () => {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push(RouteName.Register);
  };

  return (
    <S.Container>
      <S.ImgSlideForth>
        <SlideFour />
      </S.ImgSlideForth>

      <S.TextContainer>
        <S.HeadText>Rabet is Your Identity</S.HeadText>
        <S.MainText>
          In the Stellar world, Rabet is your passport, letting you
          interact with any SApp you wish.
        </S.MainText>
      </S.TextContainer>
      <S.ButtonContainer>
        <Button
          type="button"
          variant="primary"
          size="medium"
          content="Launch the App"
          onClick={handleGetStarted}
          style={{ borderRadius: '4px' }}
        />
      </S.ButtonContainer>
    </S.Container>
  );
};

export default ForthSlide;
