import styled from 'styled-components';
import Search from 'svgs/Search';
import svgToMarkupString from 'helpers/svgToMarkupString';

export const ToggleButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #395dc5;
  border: 1px solid #c9e6ff;
  background-color: #c9e6ff !important;
  font-size: 16px;
  padding: 0;
`;

export const Label = styled.label`
  position: relative;
  display: flex;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 10px;
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
  border: none;
  padding: 0 14px 0 20px;
  border-bottom: 1px solid
    ${({ theme }) => theme.colors.primary.lighter};
  box-sizing: border-box;
  height: 41px;
  font-size: 14px;

  &:focus {
    outline: none;
    border: none;
    border-bottom: 1px solid
      ${({ theme }) => theme.colors.primary.lighter};
  }

  &::placeholder {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.primary.main};
  }
`;

export const Group = styled.div`
  padding: 11px 0 100px 0;
  background-color: ${({ theme }) => theme.colors.primary.lighter};
`;

export const GroupLink = styled.a`
  font-size: 16px;
  color: black;
  background-color: ${({ theme }) => theme.colors.primary.lighter};
  text-decoration: none !important;
  padding: 11px 17px;
  display: flex;
  align-items: center;

  svg {
    margin-right: 13px;
  }
`;
