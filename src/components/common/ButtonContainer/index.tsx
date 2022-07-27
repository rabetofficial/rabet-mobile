/* eslint-disable @typescript-eslint/indent */
import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import { JustifyContent } from 'models';

type AppProps = {
  children: React.ReactNode;
  btnSize?: number;
  justify?: JustifyContent;
  gap?: number;
  mt?: number;
  mb?: number;
  className?: string;
  fixedBottom?: boolean;
  fixedUntil?: number;
};

const Container = styled.div.attrs((props: AppProps) => props)`
  margin-top: ${(props) => props.mt}px;

  button {
    ${({ btnSize }) =>
      btnSize !== 0 && `width: ${btnSize}px!important;`}

    &:first-child {
      margin-right: ${(props) => props.gap}px;
    }
  }

  &.fixed-bottom {
    position: absolute;
    right: 16px;
    left: 16px;
    bottom: 0;
    margin-bottom: ${(props) => props.mb}px;
    @media (max-height: ${(props) => props.fixedUntil}px) {
      position: static;
      margin-top: 20px;
    }
  }
`;

const ButtonContainer = (props: AppProps) => {
  const { children, justify, className, fixedBottom, fixedUntil } =
    props;
  return (
    <Container
      {...props}
      fixedUntil={fixedUntil}
      className={classNames(
        'flex',
        justify && `justify-${justify}`,
        className,
        fixedBottom && 'fixed-bottom',
      )}
    >
      {children}
    </Container>
  );
};

ButtonContainer.defaultProps = {
  btnSize: 0,
  gap: 0,
  mt: 0,
  mb: 0,
  justify: '',
  className: '',
  fixedBottom: false,
  fixedUntil: 0,
};

export default ButtonContainer;
