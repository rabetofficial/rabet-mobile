import React from 'react';

import { SlideThree } from 'svgs/SlidesLogo';

import * as S from './styles';

const ThirdSlide = () => (
  <S.Container>
    <S.ImgSlideThird>
      <SlideThree />
    </S.ImgSlideThird>

    <S.TextContainer>
      <S.HeadText>Made for interaction</S.HeadText>
      <S.MainText>
        Anything you have yet gained was derived from the interaction.
        The structure of Rabet is designed such that one can interact
        with the next generation financial network, i.e., Stellar.
      </S.MainText>
    </S.TextContainer>
  </S.Container>
);

export default ThirdSlide;
