import styled from 'styled-components';

export const Container = styled.div`
  padding: 16px 16px 15px;
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
`;

export const Title = styled.p`
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.primary.dark};
  font-size: 14px;
`;

export const Hr = styled.hr`
  background-color: ${({ theme }) => theme.colors.primary.lighter};
  margin: 0 16px;
`;
