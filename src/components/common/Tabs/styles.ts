import styled from 'styled-components';

export const Tabs = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  border-bottom: 1px solid
    ${({ theme }) => theme.colors.primary.lighter};
  box-shadow: 0px 2px 22px 0 rgba(0, 0, 0, 0.07);
`;

export const TabTitle = styled.li`
  background-color: ${({ theme }) => theme.colors.primary.lightest};
  display: inline-block;
  padding: 17px 20px;
  color: ${({ theme }) => theme.colors.primary.dark};
  text-align: center;
  font-size: 16px;
  transition: all ease-in 0.15s;
  position: relative;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;

  &.active {
    color: black;
    position: relative;
    font-weight: 500;
  }

  &::before,
  &.active::before {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 2px;
    border-radius: 3px;
  }

  &::before {
    transition: all ease-in 0.15s;
    background: transparent;
  }

  &.active::before {
    background: black;
  }
`;

export const TabContent = styled.div`
  padding-top: 24px;
  margin: 0;
`;
