import styled from 'styled-components';

export const ImgContainer = styled.div`
  margin-right: 10px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8;
  border: 1px solid #f8f8f8;
  border-radius: 50%;
`;

export const DateContainer = styled.div`
  color: ${({ theme }) => theme.colors.primary.dark};
  font-size: 12px;
`;

export const TextContainer = styled.div`
  font-size: 16px;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
`;
