/* eslint-disable @typescript-eslint/indent */
import styled from 'styled-components';

export const BurgerImageStyle = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.div`
  text-align: center;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  span[class^='icon'] {
    margin-right: 10px;
  }

  &.large {
    width: 100%;
    height: 56px;
    font-size: 16px;
    font-weight: 500;
    border: none;
    border-radius: 2px;
  }

  &.medium {
    width: 100%;
    height: 48px;
    font-size: 16px;
    font-weight: 500;
    padding-right: 26px;
    padding-left: 26px;
    border-radius: 2px;
  }

  &.small {
    width: 100%;
    height: 40px;
    font-size: 16px;
    font-weight: 500;
    padding-right: 20px;
    padding-left: 20px;
    border-radius: 2px;
  }

  &.danger {
    color: ${({ theme }) => theme.colors.primary.lighter};
    background-color: ${({ theme }) => theme.colors.error.main};
    border: 2px solid ${({ theme }) => theme.colors.error.main};
    path {
      fill: ${({ theme }) => theme.colors.primary.lighter};
    }
    &:hover {
      box-shadow: 0 2px 13px 0 rgba(0, 0, 0, 0.12);
    }

    &:disabled {
      color: ${({ theme }) => theme.colors.primary.lighter};
      border: 2px solid ${({ theme }) => theme.colors.primary.main};
      background-color: ${({ theme }) => theme.colors.primary.main};

      path {
        fill: ${({ theme }) => theme.colors.primary.lighter};
      }
    }
  }

  &.danger-fill {
    color: white;
    background-color: ${({ theme }) => theme.colors.error.main};
    border: 2px solid ${({ theme }) => theme.colors.error.main};
    path {
      fill: white;
    }
    &:hover {
      box-shadow: 0 2px 13px 0 rgba(0, 0, 0, 0.12);
    }

    &:disabled {
      opacity: 0.7;
    }
  }

  &.basic-default {
    background: ${({ theme }) => theme.colors.primary.lighter};
    border: 2px solid ${({ theme }) => theme.colors.primary.lighter};
    color: ${({ theme }) => theme.colors.primary.dark};
    &:hover {
      color: ${({ theme }) => theme.colors.primary.dark};
      path {
        fill: ${({ theme }) => theme.colors.primary.darkest};
      }
    }
  }

  &.default {
    background: transparent;
    border: 2px solid transparent;
    color: ${({ theme }) => theme.colors.primary.dark};
    &:hover {
      color: ${({ theme }) => theme.colors.primary.darkest};
      path {
        fill: ${({ theme }) => theme.colors.primary.darkest};
      }
    }
  }

  &.outlined {
    background: transparent;
    border: 1px solid ${({ theme }) => theme.colors.primary.darkest};
    color: ${({ theme }) => theme.colors.primary.darkest};
  }

  &.icon-circle {
    width: 48px;
    height: 48px;
    color: white;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.primary.darkest};
    margin: 0 36px;
    path {
      fill: ${({ theme }) =>
        theme.colors.primary.lightest} !important;
    }
    &:hover {
      box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.25);
    }

    &:disabled {
      background: ${({ theme }) => theme.colors.primary.main};
      border: 2px solid ${({ theme }) => theme.colors.primary.main};
      color: ${({ theme }) => theme.colors.primary.lightest};
    }
    @media (max-width: 360px) {
      width: 44px;
      height: 44px;
      margin: 0 26px;
    }
  }

  &.primary {
    background: ${({ theme }) => theme.colors.primary.darkest};
    border: 2px solid ${({ theme }) => theme.colors.primary.darkest};
    color: ${({ theme }) => theme.colors.primary.lightest};

    &:hover {
      box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.25);
    }

    &:disabled {
      background: ${({ theme }) => theme.colors.primary.main};
      border: 2px solid ${({ theme }) => theme.colors.primary.main};
      color: ${({ theme }) => theme.colors.primary.lightest};
    }
  }

  &.secondary {
    background: ${({ theme }) => theme.colors.primary.lightest};
    border: 2px solid ${({ theme }) => theme.colors.primary.darkest};
    color: ${({ theme }) => theme.colors.primary.darkest};

    &:disabled {
      background: ${({ theme }) => theme.colors.primary.main};
      border: 2px solid ${({ theme }) => theme.colors.primary.main};
      color: ${({ theme }) => theme.colors.primary.lightest};
    }
  }

  .button {
    width: 100%;
    border: none;

    &:focus {
      border: none;
      outline: none;
    }

    &:disabled {
      cursor: default;

      &:hover {
        box-shadow: none;
      }
    }
  }
`;
