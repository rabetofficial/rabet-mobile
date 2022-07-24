import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  margin-top: -79px;
`;

export const sleepAnimation = keyframes`
  0% {
    transform: translate(0, 0) scale(0.3);
    opacity: 0;
  }
  1% {
    opacity: 0;
  }
  3% {
    opacity: 1;
  }
  50% {
    transform: translate(90%, -50%) scale(0.65);
  }
  75% {
    opacity: 1;
  }
  100% {
    transform: translate(180%, -100%) scale(1);
    opacity: 0;
  }
`;

export const Sleeping = styled.div`
  position: relative;
  width: 69px;
  display: block;
  margin: 0 auto;
`;

export const Z = styled.span`
  color: black;
  position: absolute;
  top: 4px;
  right: -12px;
  font-size: 60px;
  opacity: 0;
  -moz-animation: ${sleepAnimation} 3s infinite linear;
  -webkit-animation: ${sleepAnimation} 3s infinite linear;
  animation: ${sleepAnimation} 3s infinite linear;
`;

export const Z1 = styled(Z)`
  animation-delay: 1s;
`;

export const Z2 = styled(Z)`
  animation-delay: 2s;
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  line-height: 1.5;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 23px;
`;

export const Msg = styled.div`
  line-height: 1.63;
  margin-top: 13px;
  color: ${({ theme }) => theme.colors.primary.dark};
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 16px;
`;
