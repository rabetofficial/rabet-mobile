import styled from 'styled-components';

export const Box = styled.div`
  padding: 20px 11px 17px;
`;

export const CardTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${({ theme }) => theme.colors.primary.darkest};
`;
