import styled from 'styled-components';

export const Devider = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.lighter};
  height: 16px;
`;

export const LinkContainer = styled.div`
  margin: 24px 0 26px;
`;

export const Box = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  background-color: ${({ theme }) => theme.colors.primary.lightest};
  box-shadow: 0 2px 22px 0 rgba(0, 0, 0, 0.07);
`;

export const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  margin-bottom: 34px;
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

export const EditName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const DropDown = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
`;

export const Account = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: end;
`;
