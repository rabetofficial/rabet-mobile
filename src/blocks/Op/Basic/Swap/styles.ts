import styled, { keyframes, css } from 'styled-components';

export const ModalInput = styled.div`
  display: flex;
  align-items: flex-start;

  .input-medium {
    margin: 0;
    box-sizing: border-box;
    width: 100%;
  }

  .input-medium,
  .select-modal {
    margin: 8px 0;
  }
`;

export const SwapSvg = styled.div`
  position: absolute;
  svg {
    height: 40px;
    width: 40px;
  }
`;

export const Shadow = styled.div`
  padding: 32px 0 52px 0;
  box-shadow: 0 2px 22px 0 rgba(0, 0, 0, 0.07);
`;

export const Hr = styled.hr`
  margin: 14px 0;
  border: none;
  height: 1px;
  background: ${({ theme }) => theme.colors.primary.lighter};
`;

export const Equivalent = styled.div`
  color: ${({ theme }) => theme.colors.primary.dark};
  font-size: 14px;
  display: flex;
  justify-content: right;
  align-items: center;

  svg {
    margin-left: 4px;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(180deg);
  }
`;

export const Rotate = styled.div.attrs(
  (props: { isRotate: boolean }) => props,
)`
  cursor: pointer;

  animation: ${({ isRotate }) =>
    isRotate
      ? css`
          ${rotate} 0.5s linear
        `
      : ''};
`;
