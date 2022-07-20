import styled from 'styled-components';

export const Img = styled.div`
  width: 275px;
  height: 318px;
  display: block;
  margin: 115px 0 0 5px;
  @media (max-height: 640px) and (min-height: 560px) {
    margin-top: 50px;
  }
`;

export const WelcomeText = styled.p`
  font-size: 16px;
  line-height: 1.63;
  color: ${({ theme }) => theme.colors.primary.dark};
  @media (max-height: 640px) {
    font-size: 14px;
  }
`;

export const MainText = styled.p`
  font-size: 24px;
  font-weight: bold;
  line-height: 1.42;
  text-align: center;
  margin-top: 10px;
  @media (max-height: 640px) {
    font-size: 22px;
  }
`;
