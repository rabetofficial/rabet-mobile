import React from 'react';
import Link from 'next/link';

import Logo from 'svgs/IntroLogo';
import Button from 'components/common/Button';

import * as S from './styles';

const Intro = () => (
  <S.Layout>
    <S.Img>
      <Logo />
    </S.Img>

    <S.Container>
      <div className="text-center">
        <S.WelcomeText>
          Welcome to the new financial world
        </S.WelcomeText>
        <S.MainText>Start interacting with Stellar</S.MainText>
      </div>
    </S.Container>
    <Link href="/Intro-slides" passHref>
      <S.MbButton>
        <Button
          type="button"
          variant="primary"
          size="medium"
          content="Get Started"
        />
      </S.MbButton>
    </Link>
  </S.Layout>
);

export default Intro;
