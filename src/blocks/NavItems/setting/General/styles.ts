import styled from 'styled-components';

export const Select = styled.div`
  .ops__indicator svg {
    color: ${({ theme }) => theme.colors.primary.main} !important;
  }
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 16px;
`;

export const Version = styled.div`
  color: ${({ theme }) => theme.colors.primary.dark};
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;
`;
