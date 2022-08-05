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

export const Submit = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 11.5px 24px;
  width: 100%;
  text-align: right;
  font-weight: 400;
  border-top: 1px solid ${({ theme }) => theme.colors.primary.lighter};
  display: flex;
  justify-content: right;

  svg {
    margin-left: 6px;
    width: 7px;
  }
`;
