import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const ImgSlideOne = styled.div`
  margin-top: 62px;
  width: 269px;
  height: 336px;
`;

export const ImgSlideTwo = styled.div`
  margin: 80px 30px 0 0;
  width: 305px;
  height: 318px;
  @media (max-width: 345px) {
    width: 290px;
  }
`;

export const ImgSlideThird = styled.div`
  width: 314px;
  height: 359px;
  margin: 39px 0 0 45px;
  @media (max-width: 345px) {
    width: 290px;
  }
`;

export const ImgSlideForth = styled.div`
  width: 274px;
  height: 358px;
  margin: 40px 0 0px 4px;
  @media (max-width: 345px) {
    width: 290px;
  }
`;

export const TextContainer = styled.div`
  text-align: center;
`;

export const HeadText = styled.p`
  font-size: 20px;
  margin: 40px 0 24px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
`;

export const MainText = styled.p`
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: normal;
  font-size: 16px;
  width: 358px;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary.dark};
  @media (max-width: 345px) {
    width: 290px;
  }
`;

interface CircleProps {
  disabled: boolean;
  thirdSlide: boolean;
  theme: any;
}

export const Circle = styled.div<CircleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 19px 17px;

  border: solid 1px ${({ theme }) => theme.colors.primary.lighter};
  border-radius: 50%;

  display: ${({ thirdSlide }) => (thirdSlide ? 'none' : 'block')};
`;

export const LeftCircle = styled(Circle)<CircleProps>`
  position: absolute;
  bottom: 0px;
  left: 120px;
  @media (max-width: 390px) and (min-width: 350px) {
    left: 110px;
  }
  @media (max-width: 350px) {
    left: 100px;
  }
`;

export const RightCircle = styled(Circle)<CircleProps>`
  position: absolute;
  bottom: 0px;
  right: 120px;
  @media (max-width: 390px) and (min-width: 350px) {
    right: 110px;
  }
  @media (max-width: 350px) {
    right: 100px;
  }
`;

export const ButtonContainer = styled.div`
  margin: 162px 8px 0;
  width: 358px;
  @media (max-width: 358px) {
    width: 290px;
  }
  @media (max-height: 780px) {
    margin-top: 40px;
  }
`;

export const Navigators = styled.div`
  height: 20px;
`;
