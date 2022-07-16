import styled from 'styled-components';

export const Container = styled.div`
  padding: 15px 0 13px;
`;

export const Circle = styled.div``;
interface ImageProps {
  isDark: boolean;
  theme: any;
}
export const Image = styled.img<ImageProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const Hr = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.primary.lighter};
`;
