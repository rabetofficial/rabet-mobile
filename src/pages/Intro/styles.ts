import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  margin-top: 25px;
  white-space: nowrap;
  text-align: center;
  padding: 0 16px;
`;

export const Img = styled.div`
  width: 275px;
  height: 318px;
  display: block;
  margin: 115px 0 0 5px;
`;

export const MbButton = styled.div`
  margin: 178px auto 0;
  width: 358px;

  @media (max-width: 361px) {
    width: 330px;
  }
  @media (max-width: 330px) {
    width: 310px;
  }
  @media (max-height: 780px) {
    margin-top: 80px;
  }
  @media (max-height: 670px) {
    margin-top: 45px;
  }
`;

export const WelcomeText = styled.p`
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: normal;
  color: ${({ theme }) => theme.colors.primary.dark};
`;

export const MainText = styled.p`
  font-size: 24px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.42;
  letter-spacing: normal;
  text-align: center;
  margin-top: 10px;
`;
