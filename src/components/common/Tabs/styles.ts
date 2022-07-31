import styled from 'styled-components';

export const Tabs = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  border-bottom: 1px solid
    ${({ theme }) => theme.colors.primary.lighter};
  position: relative;
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
`;

export const AnimatedLine = styled.div`
  position: absolute;
  z-index: 1;
  bottom: 0;
  height: 2px;
  background: black;
  border-radius: 10px;
  transition: all ease 0.3s;
`;

export const TabContent = styled.div`
  padding-top: 24px;
  margin: 0;
`;
