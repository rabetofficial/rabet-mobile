/* eslint-disable @typescript-eslint/indent */
import styled from 'styled-components';
import Close from 'svgs/MultiplyInCircle';

import svgToMarkupString from 'helpers/svgToMarkupString';

export const InputBox = styled.div`
  height: 40px;
  display: flex;
  padding: 8px 10px;
  margin: 8px 16px 7px;
  border-radius: 4px;
  align-content: center;
  box-sizing: border-box;
  justify-content: center;
  border: 1px solid transparent;
  color: ${({ theme }) => theme.colors.primary.dark};
  background-color: ${({ theme }) => theme.colors.primary.lighter};
`;

interface LabelProps {
  searching: boolean;
}

export const Label = styled.label<LabelProps>`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
`;

export const InputSearch = styled.input`
  width: 100%;
  display: flex;
  font-size: 14px;
  line-height: 1.43;
  font-style: normal;
  font-weight: normal;
  align-items: center;
  font-stretch: normal;
  letter-spacing: normal;
  justify-content: center;

  color: ${({ theme }) => theme.colors.primary.dark};
  background-color: ${({ theme }) => theme.colors.primary.lighter};
  &:focus,
  &:focus-within {
    outline: none;
    background-color: ${({ theme }) => theme.colors.primary.lighter};
  }
  &::-webkit-search-cancel-button {
    -webkit-appearance: none;

    height: 16px;
    width: 16px;
    background: ${({ color }) =>
      `url(${svgToMarkupString(Close, {
        color,
      })}) no-repeat center`};
  }
`;

export const Text = styled.div`
  margin-top: 115px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  p {
    margin-top: 24px;
    width: 238px;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: center;
    color: ${({ theme }) => theme.colors.primary.darkest};
  }
`;

export const IframeContainer = styled.iframe`
  width: 101%;
  height: 82vh;
`;

export const Loading = styled.div`
  margin-top: 115px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FrameParent = styled.div`
  overflow: hidden;
  height: 82vh;
  margin: -115px 0 0;
`;

export const Hr = styled.hr`
  color: ${({ theme }) => theme.colors.primary.lighter};
`;
