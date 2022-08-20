import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 56px;
  border-bottom: 1px solid
    ${({ theme }) => theme.colors.primary.lighter};
  background-color: ${({ theme }) => theme.colors.primary.lightest};
`;

interface TitleProps {
  isBack: boolean;
}

export const Title = styled.div<TitleProps>`
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: center;
  margin-left: ${({ isBack }) => (isBack ? '-50px' : '0')};
`;

export const IconContainer = styled.div`
  width: 60px;
  height: 50px;
  margin-left: -10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
