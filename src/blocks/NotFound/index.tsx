import React from 'react';
import styled from 'styled-components';
import ButtonContainer from 'components/common/ButtonContainer';
import Button from 'components/common/Button';
import { useRouter } from 'next/router';
import RouteName from 'staticRes/routes';

const TextContainer = styled.div`
  margin-top: 65%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-height: 580px) {
    margin-top: 50%;
  }
  span {
    font-size: 56px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.75;
    letter-spacing: normal;
    text-align: center;
    color: ${({ theme }) => theme.colors.primary.darkest};
  }
  p {
    margin-top: 32px;
    color: ${({ theme }) => theme.colors.primary.dark};
  }
`;

const NotFound = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push(RouteName.Home);
  };

  return (
    <>
      <TextContainer>
        <span>404</span>
        <p>The page you&apos;re looking for isn&apos;t found</p>
      </TextContainer>
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
