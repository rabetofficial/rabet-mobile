import styled from 'styled-components';

export const Page = styled.div`
  position: relative;
  padding: 0 16px;
`;

export const Container = styled.div`
  padding: 0px 16px;
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 16px 0;
`;

export const Label = styled.p`
  margin: 25px 0 8px 2px;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${({ theme }) => theme.colors.primary.darkest};
`;

export const ImgContainer = styled.div`
  width: 40px;
  height: 40px;
  margin: auto;
`;

export const Circle = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary.lighter};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 24px;
`;
export const Title = styled.h4`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primary.dark};
  font-weight: 500;
`;

export const Value = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primary.darkest};
  word-break: break-all;

  a,
  a:hover {
    text-decoration: none !important;
    color: ${({ theme }) => theme.colors.primary.dark};
  }
`;

export const Info = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primary.darkest};
`;

export const ErrorBox = styled.div`
  font-size: 15px !important;
  margin-top: 14px;
  padding: 4px 8px;
  background-color: #fbeded;
  border: 1px solid #fbeded;
  border-radius: 4px;
`;
