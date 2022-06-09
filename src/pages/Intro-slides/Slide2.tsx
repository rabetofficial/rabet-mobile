import React from 'react';

import { SlideTwo } from 'svgs/SlidesLogo';

import * as S from './styles';

const SecondSlide = () => (
  <S.Container>
    <S.ImgSlideTwo>
      <SlideTwo />
    </S.ImgSlideTwo>

    <S.TextContainer>
      <S.HeadText>Secure by default</S.HeadText>
      <S.MainText>
        All the data in the Rabet is encrypted and stored on your
        local device. Therefore, you are in complete control of your
        data.
      </S.MainText>
    </S.TextContainer>
  </S.Container>
);

export default SecondSlide;
