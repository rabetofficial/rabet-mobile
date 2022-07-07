import styled from 'styled-components';

export const Confirm = styled.div``;
export const TopContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.darkest};
  color: ${({ theme }) => theme.colors.primary.lightest};
  padding: 12px 31px 24px;
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: center;
`;

export const Link = styled.a`
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
`;
export const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: center;
`;

export const Account = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding: 10px 11px 9px;
  border-radius: 4px;
  border: solid 1px #262626;
  background-color: #161616;
`;

export const AccountTitle = styled.div`
  color: ${({ theme }) => theme.colors.primary.dark};
`;

export const HostStyle = styled.div``;

export const ImgContainer = styled.div``;

export const NetworkStatus = styled.p`
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;
  color: #26c362 !important;
`;
