import styled from 'styled-components';

export const Layout = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.lighter};
`;

export const Box = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  background-color: ${({ theme }) => theme.colors.primary.lightest};
`;

export const Head = styled.div`
  height: 40px;
  margin-top: 8px;
  margin-bottom: 24px;
`;

export const Asset = styled.div`
  font-size: 32px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.31;
  letter-spacing: normal;
  text-align: center;
  font-family: Roboto;
`;
