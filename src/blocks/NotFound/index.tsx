import React from 'react';
import { useRouter } from 'next/router';
import RouteName from 'staticRes/routes';

import Button from 'components/common/Button';
import ButtonContainer from 'components/common/ButtonContainer';

import * as S from './styles';

const NotFound = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push(RouteName.Home);
  };

  return (
    <>
      <S.TextContainer>
        <S.HeadText>404</S.HeadText>

        <S.MainText>
          The page you&apos;re looking for isn&apos;t found
        </S.MainText>
      </S.TextContainer>

      <ButtonContainer fixedBottom mb={39}>
        <Button
          size="medium"
          type="button"
          variant="primary"
          content="Back to home"
          onClick={handleClick}
        />
      </ButtonContainer>
    </>
  );
};

export default NotFound;
