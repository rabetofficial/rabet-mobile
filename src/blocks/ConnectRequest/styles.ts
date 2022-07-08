import styled from 'styled-components';

export const HeadTitle = styled.h6`
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
  margin: 40px 0 -10px;
  text-align: center;
`;

export const Steps = styled.ul`
  overflow: hidden;
  text-align: center;
  position: relative;
  margin: 0 -78px 0;
`;

export const List = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  list-style-type: none;
  width: 50%;
  float: left;
  margin-top: 30px;

  &:after {
    content: '';
    width: 100%;
    border-top: 2px dashed
      ${({ theme }) => theme.colors.primary.light};
    position: absolute;
    left: -50%;
    top: calc(57px / 2);
    z-index: 0;
  }

  &:first-child:after {
    content: none;
  }
`;

export const IconContainer = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 36px;
  height: 36px;
  z-index: 1;
`;

export const StepValue = styled.div`
  color: #395dc5;
  background: #c9e6ff;
  width: 54px;
  height: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  border-radius: 50%;
  margin: 0 auto 5px auto;
  position: relative;
  z-index: 1;
  outline: 10px solid ${({ theme }) => theme.colors.primary.lightest};
  img,
  Image {
    border-radius: 50%;
  }
`;

export const StepLabel = styled.p`
  margin-top: 6px;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: normal;
  text-align: center;
`;

export const Title = styled.h1`
  margin-top: 48px;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.primary.darkest} !important;
`;
