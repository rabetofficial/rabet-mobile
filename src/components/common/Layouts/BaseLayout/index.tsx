import React from 'react';
import classNames from 'classnames';
import BottomBar from 'components/common/BottomBar';

type LayoutProps = {
  children: JSX.Element | JSX.Element[];
  alignCenter?: boolean;
  bottomBar?: boolean;
  className?: string;
};

const Layout = ({
  children,
  alignCenter,
  bottomBar,
  className,
}: LayoutProps) => (
  <div
    className={classNames(
      'px-4',
      alignCenter ? 'flex justify-center' : '',
      className,
    )}
  >
    {children}
    {bottomBar && <BottomBar />}
  </div>
);

Layout.defaultProps = {
  alignCenter: false,
  bottomBar: false,
  className: '',
};

export default Layout;
