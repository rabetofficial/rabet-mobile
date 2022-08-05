import styled from 'styled-components';

export const Textarea = styled.textarea`
  border: 1px solid ${({ theme }) => theme.colors.primary.lighter};
  border-radius: 2px;
  padding: 10px 12px;
  resize: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.primary.dark};
  }

  &:focus {
    outline: none;
  }
`;
