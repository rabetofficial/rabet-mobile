import styled from 'styled-components';

export const List = styled.ul`
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${({ theme }) => theme.colors.primary.lighter};
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;

  li {
    cursor: pointer;
    width: 25%;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    svg {
      transition: all 0.3s ease-out;
      fill: ${({ theme }) => theme.colors.primary.dark};
    }

    &.active {
      svg {
        fill: ${({ theme }) => theme.colors.primary.darkest};
      }
    }
  }
`;

export const Border = styled.span`
  position: absolute;
  z-index: 1;
  top: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background: ${({ theme }) => theme.colors.primary.darkest};
  border-radius: 10px;
  -webkit-transition: all ease 0.4s;
  -moz-transition: all ease 0.4s;
  transition: all ease 0.4s;
`;
