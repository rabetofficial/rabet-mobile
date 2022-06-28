import styled from 'styled-components';

export const Desc = styled.p`
  font-size: 16px;
  margin-top: 16px;
  margin-bottom: 0;
`;

export const Website = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  border: 1px solid ${({ theme }) => theme.colors.primary.lighter};
  padding: 12px 10px;

  &:first-child {
    margin-top: 32px;
  }
`;

export const Link = styled.a`
  font-size: 16px;
  font-weight: 500;
  color: #3273ff;
`;

export const Icon = styled.span`
  color: ${({ theme }) => theme.colors.primary.lighter};
  cursor: pointer;
`;
