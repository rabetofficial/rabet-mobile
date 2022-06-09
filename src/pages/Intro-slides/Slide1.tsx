import React from 'react';

import { SlideOne } from 'svgs/SlidesLogo';

import * as S from './styles';

const FirstSlide = () => (
  <S.Container>
    <S.ImgSlideOne>
      <SlideOne />
    </S.ImgSlideOne>

    <S.TextContainer>
      <S.HeadText>Useful by design</S.HeadText>
      <S.MainText>
        Rabet is designed with accessibility in mind, allowing users
        to execute Stellar&apos;s major operations in a user-friendly
        environment.
      </S.MainText>
    </S.TextContainer>
  </S.Container>
);

export default FirstSlide;
