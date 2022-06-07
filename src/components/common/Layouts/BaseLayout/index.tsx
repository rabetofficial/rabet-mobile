import React from 'react';
import classNames from 'classnames';

type LayoutProps = {
  children: JSX.Element | JSX.Element[];
  alignCenter?: boolean;
  className?: string;
};

const Layout = ({
  children,
  alignCenter,
  className,
}: LayoutProps) => (
  <div
    className={classNames(
      `flex h-full justify-center px-4 pb-8 ${
        alignCenter ? 'place-items-center' : ''
      }`,
      className,
    )}
  >
    <div className="w-full">{children}</div>
  </div>
);

Layout.defaultProps = {
  alignCenter: false,
  className: '',
};

export default Layout;
