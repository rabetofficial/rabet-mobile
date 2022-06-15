import styled from 'styled-components';

export const Container = styled.div`
  padding: 18px 16px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.lighter};
    transition: 1s background-color;
  }
`;

export const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  min-width: 44px;
  border-radius: 50%;
  background-color: #f8f8f8;
  margin-right: 3px;
`;
interface ImageProps {
  isDark: boolean;
  theme: any;
}
export const Image = styled.img<ImageProps>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

export const Hr = styled.div`
  height: 1px;
  margin: 0 16px;
  background-color: ${({ theme }) => theme.colors.primary.lighter};
`;

export const Text = styled.div`
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
`;

export const MbButton = styled.div`
  padding: 20px 50px;
`;
