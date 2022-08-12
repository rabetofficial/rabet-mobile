import styled from 'styled-components';

export const Devider = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.lighter};
  height: 1px;
  display: block;
`;

export const LinkContainer = styled.div`
  margin: 24px 0 32px;
`;

export const ExpandLink = styled.a`
  width: 50px;
  margin-right: -14px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  margin-bottom: 34px;
  margin-top: 5px;
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

export const NameValue = styled.div`
  margin: 6px 0 -4.5px 0;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;
  text-align: center;
`;

export const Account = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: end;
`;
