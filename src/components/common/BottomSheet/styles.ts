import styled from 'styled-components';

import { a } from '@react-spring/web';

export const Overlay = styled(a.div)`
  width: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Sheet = styled(a.div)`
  z-index: 100;
  position: fixed;
  height: calc(100vh + 100px);
  width: 100%;
  background: white;
  touch-action: none;
`;

export const Line = styled.div`
  display: block;
  margin: 14px auto;
  width: 80px;
  height: 6px;
  border-radius: 4.5px;
  background-color: ${({ theme }) => theme.colors.primary.lighter};
`;
