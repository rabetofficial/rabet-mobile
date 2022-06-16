import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  padding: 13px 16px;
  box-shadow: 0 2px 22px 0 rgba(0, 0, 0, 0.07);
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
`;

export const Icon = styled.div`
  position: absolute;
  left: 15px;
`;

export const Status = styled.h1`
  font-size: 16px;
  font-weight: 500;
  display: flex;
  align-items: center;

  span {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin-right: 6px;
  }

  &.warn {
    color: ${({ theme }) => theme.colors.warn.main};
    span {
      background: ${({ theme }) => theme.colors.warn.main};
    }
  }

  &.success {
    color: ${({ theme }) => theme.colors.success.main};
    span {
      background: ${({ theme }) => theme.colors.success.main};
    }
  }
`;
