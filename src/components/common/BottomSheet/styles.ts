/* eslint-disable @typescript-eslint/indent */
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

interface LineProps {
  isDark: boolean | undefined;
  theme: any;
}

export const Line = styled.div<LineProps>`
  display: block;
  width: 80px;
  height: 6px;
  border-radius: 4.5px;
  background-color: ${({ theme, isDark }) =>
    isDark
      ? theme.colors.primary.dark
      : theme.colors.primary.lighter};
`;

export const LineConatiner = styled.div<LineProps>`
  border: ${({ theme, isDark }) =>
    isDark ? `1px solid ${theme.colors.primary.darkest}` : 'none'};
  width: 100%;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, isDark }) =>
    isDark ? theme.colors.primary.darkest : ''};
`;
