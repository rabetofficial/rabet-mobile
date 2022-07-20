/* eslint-disable @typescript-eslint/indent */
import styled from 'styled-components';

export const HeadText = styled.p`
  font-size: 20px;
  margin: 41px 0 25px;
  font-weight: bold;
  line-height: 1.5;
  @media (max-height: 640px) {
    font-size: 18px;
  }
`;

export const MainText = styled.p`
  line-height: 1.63;
  letter-spacing: normal;
  font-size: 16px;
  padding: 0 16px;
  color: ${({ theme }) => theme.colors.primary.dark};
  @media (max-height: 640px) {
    margin-top: -20px;
    font-size: 14px;
  }
`;

interface ImgProps {
  slideId: number;
}

export const ImgContainer = styled.div<ImgProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: ${({ slideId }) => (slideId === 2 ? '35px' : '0')};
  margin-right: ${({ slideId }) => (slideId === 4 ? '-4px' : '0')};
  margin-left: ${({ slideId }) => (slideId === 3 ? '44px' : '0')};
  @media (max-height: 640px) {
    margin: -30px 0 -30px;
  }
`;

interface PaginationProps {
  theme: any;
  index: number;
  activeIndex: number;
}

export const PageinationParent = styled.div`
  bottom: 64px;
  position: absolute;
  li {
    width: 9px;
    height: 9px;
  }
  @media (max-height: 670px) {
    bottom: 30px;
  }
  @media (max-height: 550px) {
    bottom: 20px;
  }
`;

export const Pagination = styled.div<PaginationProps>`
  width: 10px;
  height: 10px;
  padding: 0 -20px;
  border-radius: 50%;
  padding: ${({ index }) => (index !== 4 ? '0 -30px' : '0px')};
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
