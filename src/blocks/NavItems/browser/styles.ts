/* eslint-disable @typescript-eslint/indent */
import styled from 'styled-components';
import Search from 'svgs/Search';
import svgToMarkupString from 'helpers/svgToMarkupString';

export const InputBox = styled.div`
  padding: 8px 16px;
  box-shadow: 0 2px 22px 0 rgba(0, 0, 0, 0.07);
  background-color: ${({ theme }) => theme.colors.primary.lightest};
`;

export const Label = styled.label`
  position: relative;
  display: flex;

  &:before {
    content: '';
    position: absolute;
    left: 10px;
    top: 12px;
    bottom: 0;
    width: 15px;
    height: 15px;
    background: ${({ color }) =>
      `url(${svgToMarkupString(Search, {
        color,
      })}) no-repeat center`};
  }
`;

export const InputSearch = styled.input`
  width: 100%;
  font-size: 14px;
  line-height: 1.43;
  font-style: normal;
  border-radius: 4px;
  padding: 10px 32px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: normal;
  box-sizing: border-box;
  border: 1px solid transparent;
  color: ${({ theme }) => theme.colors.primary.dark};
  background-color: ${({ theme }) => theme.colors.primary.lighter};

  &:focus,
  &:focus-within {
    outline: none;
    background-color: ${({ theme }) => theme.colors.primary.lighter};
  }

  &::placeholder {
    font-size: 14px;
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
  margin: 0 16px;
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
  width: 105%;
  margin: -110px -16px 0;
`;
