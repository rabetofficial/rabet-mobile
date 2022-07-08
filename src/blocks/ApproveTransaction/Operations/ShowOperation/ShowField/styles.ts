import styled from 'styled-components';

export const cardSubject = styled.div`
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${({ theme }) => theme.colors.primary.darkest};
  margin: 13px 0 4px;
`;
export const cardValue = styled.p`
  margin-bottom: 3px;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: normal;
  color: ${({ theme }) => theme.colors.primary.dark};
`;
