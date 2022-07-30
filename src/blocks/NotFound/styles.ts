import styled from 'styled-components';

export const TextContainer = styled.div`
  margin-top: 65%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-height: 580px) {
    margin-top: 50%;
  }
`;

export const HeadText = styled.p`
  font-size: 56px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.75;
  letter-spacing: normal;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary.darkest};
`;

export const MainText = styled.span`
  margin-top: 32px;
  color: ${({ theme }) => theme.colors.primary.dark};
`;
