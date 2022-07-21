import styled from 'styled-components';

export const List = styled.ul`
  height: 90px;
  background-color: ${({ theme }) => theme.colors.primary.lightest};
  padding: 0;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${({ theme }) => theme.colors.primary.lighter};
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0px;

  li {
    cursor: pointer;
    width: 25%;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: white;

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
  @media (max-height: 675px) {
    height: 70px;
  }
`;

export const Border = styled.span`
  position: absolute;
  z-index: 1;
  top: -2px;
  left: 0;
  margin-left: 22px;
  width: calc(100% - 44px);
  height: 2px;
  background: ${({ theme }) => theme.colors.primary.darkest};
  border-radius: 10px;
  -webkit-transition: all ease 0.4s;
  -moz-transition: all ease 0.4s;
  transition: all ease 0.4s;
`;
