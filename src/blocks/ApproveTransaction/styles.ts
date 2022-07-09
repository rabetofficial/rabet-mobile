import styled from 'styled-components';

export const TopContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.darkest};
  color: ${({ theme }) => theme.colors.primary.lightest};
  padding: 12px 31px 24px;
`;

export const Title = styled.h1`
  margin-bottom: 5px;
  font-size: 20px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary.lightest};
`;

export const Link = styled.a`
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: ${({ theme }) => theme.colors.primary.dark};
`;

export const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Account = styled.div`
  margin-top: 19px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding: 10px 11px 9px;
  border-radius: 4px;
  border: solid 1px #262626;
  background-color: #161616;
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  margin: 28px 0 15px;
  color: #395dc5;
  background: #c9e6ff;
  font-weight: 500;
  width: 74px;
  height: 74px;
  border: 8px solid ${({ theme }) => theme.colors.primary.lightest};
  border-radius: 50%;
  img {
    border-radius: 50%;
  }
`;

export const NetworkStatus = styled.p`
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;
  color: #26c362 !important;
`;
