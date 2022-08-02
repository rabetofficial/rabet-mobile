import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 13px 0px;
  border-bottom: 1px solid
    ${({ theme }) => theme.colors.primary.lighter};
  background-color: ${({ theme }) => theme.colors.primary.lightest};
`;

export const Title = styled.div`
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: center;
  margin-left: -25px;
`;

export const IconContainer = styled.div`
  width: 35px;
  height: auto;
  display: flex;
  justify-content: center;
`;
