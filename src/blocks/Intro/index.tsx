import React from 'react';
import { useRouter } from 'next/router';

import Logo from 'svgs/IntroLogo';
import RouteName from 'staticRes/routes';
import Button from 'components/common/Button';
import Layout from 'components/common/Layouts/BaseLayout';
import ButtonContainer from 'components/common/ButtonContainer';

import * as S from './styles';

const Intro = () => {
  const router = useRouter();
  const onClick = () => {
    router.push(RouteName.IntroSlides);
  };

  return (
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
        <Button
          type="button"
          variant="primary"
          size="medium"
          content="Get Started"
          className="w-full"
          onClick={onClick}
        />
      </ButtonContainer>
    </Layout>
  );
};

export default Intro;
