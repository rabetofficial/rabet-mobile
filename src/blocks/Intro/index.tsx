import React from 'react';
import Link from 'next/link';

import Logo from 'svgs/IntroLogo';
import Button from 'components/common/Button';
import Layout from 'components/common/Layouts/BaseLayout';
import ButtonContainer from 'components/common/ButtonContainer';

import * as S from './styles';

const Intro = () => (
  <Layout className="flex flex-col items-center justify-center">
    <S.Img>
      <Logo />
    </S.Img>

    <div className="text-center mt-[25px] whitespace-nowrap">
      <div className="text-center">
        <S.WelcomeText>
          Welcome to the new financial world
        </S.WelcomeText>
        <S.MainText>Start interacting with Stellar</S.MainText>
      </div>
    </div>

    <ButtonContainer fixedBottom mb={39}>
      <Link href="intro-slides" passHref>
        <Button
          type="button"
          variant="primary"
          size="medium"
          content="Get Started"
          className="w-full"
        />
      </Link>
    </ButtonContainer>
  </Layout>
);

export default Intro;
