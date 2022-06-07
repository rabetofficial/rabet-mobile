import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImgSlideOne = styled.div`
  margin: 62px auto 0;
  margin-top: px;
  width: 269px;
  height: 336px;
`;

export const ImgSlideTwo = styled.div`
  margin: 80px 54px 0 auto;
  width: 305px;
  height: 318px;
`;

export const ImgSlideThird = styled.div`
  width: 314px;
  height: 359px;
  margin: 39px auto 0px 55px;
`;

export const ImgSlideForth = styled.div`
  width: 274px;
  height: 358px;
  margin: 40px auto 0px 56px;
`;

export const TextContainer = styled.div`
  text-align: center;
  margin-top: -18px !important;
`;

export const HeadText = styled.p`
  font-size: 20px;
  margin: 60px 0 24px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: center;
`;

export const MainText = styled.p`
  color: ${({ theme }) => theme.colors.primary.dark};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: normal;
  text-align: center;
  font-size: 16px;
  width: 358px;
  margin: 0 auto;
`;

// interface IndicatorsProps {
//   disabled: boolean;
//   theme: any;
//   index: number;
// }

// export const Indicators = styled.div<IndicatorsProps>`
//   width: 40px;
//   height: 2px;
//   margin: -40px 4px 0px 4px;
//   background-color: ${({ theme, disabled }) =>
//     disabled
//       ? theme.colors.primary.light
//       : theme.colors.primary.darkest};
// `;

interface CircleProps {
  disabled: boolean;
  thirdSlide: boolean;
  theme: any;
}

export const Circle = styled.div<CircleProps>`
  margin-top: -215px;
  padding: 21.5px 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px ${({ theme }) => theme.colors.primary.lighter};
  border-radius: 50%;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  display: ${({ thirdSlide }) => (thirdSlide ? 'none' : 'block')};

  &:hover {
    background-color: ${({ theme, disabled }) =>
    disabled
      ? theme.colors.primary.lightest
      : theme.colors.primary.lighter};

    transition: 0.6s background-color;
  }
`;

export const LeftCircle = styled(Circle)<CircleProps>`
  position: absolute;
  bottom: 48px;
  left: 108px;
`;

export const RightCircle = styled(Circle)<CircleProps>`
  position: absolute;
  bottom: 48px;
  right: 108px;
`;

export const ButtonContainer = styled.div`
  margin: 162px 8px 0;
`;
