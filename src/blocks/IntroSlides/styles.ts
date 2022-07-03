/* eslint-disable @typescript-eslint/indent */
import styled from 'styled-components';

export const HeadText = styled.p`
  font-size: 20px;
  margin: 32px 0 14px;
  font-weight: bold;
  line-height: 1.5;
`;

export const MainText = styled.p`
  line-height: 1.63;
  letter-spacing: normal;
  font-size: 16px;
  padding: 0 16px;
  color: ${({ theme }) => theme.colors.primary.dark};
`;

interface CircleProps {
  disabled: boolean;
  theme: any;
}

export const Circle = styled.div<CircleProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  border: solid 1px ${({ theme }) => theme.colors.primary.lighter};
  width: 56px;
  height: 56px;
  border-radius: 50%;
`;

interface PaginationProps {
  theme: any;
  index: number;
  activeIndex: number;
}

export const Pagination = styled.div<PaginationProps>`
  width: 10px;
  height: 10px;
  bottom: 85px;
  border-radius: 50%;
  position: absolute;
  border: 1px solid
    ${({ theme, index, activeIndex }) =>
      activeIndex === index
        ? theme.colors.primary.darkest
        : theme.colors.primary.light};
  background-color: ${({ theme, index, activeIndex }) =>
    activeIndex === index
      ? theme.colors.primary.darkest
      : theme.colors.primary.lightest};
  display: ${({ activeIndex }) =>
    activeIndex === 3 ? 'none' : 'block'};
`;
