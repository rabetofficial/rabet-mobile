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

  > div {
    height: 60px;
    border-bottom: 1px solid #eee;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    text-transform: capitalize;
  }
`;
