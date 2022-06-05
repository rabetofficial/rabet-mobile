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
    <>
      <S.ImgSlideForth>
        <SlideFour />
      </S.ImgSlideForth>
      <S.TextContainer>
        <S.HeadText className="mt-[56px]">
          Rabet is Your Identity
        </S.HeadText>
        <S.MainText>
          In the Stellar world, Rabet is your passport, letting you
          interact with any SApp you wish.
        </S.MainText>
      </S.TextContainer>
      <div className="flex justify-center mt-[35px] mr-auto ml-auto 2xl:basis-[328px] sm:basis-[90%] w-[328px]">
        <Button
          type="button"
          variant="primary"
          size="large"
          content="Launch the App"
          onClick={handleGetStarted}
          style={{ borderRadius: '4px' }}
        />
      </div>
    </>
  );
};

export default ForthSlide;
