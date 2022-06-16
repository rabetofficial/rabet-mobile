import React from 'react';
import TextLogo from 'svgs/TextLogo';

type LogoProps = {
  className?: string;
};

const Logo = ({ className }: LogoProps) => (
  <div className={className}>
    <TextLogo />
  </div>
);

Logo.defaultProps = {
  className: '',
};

export default Logo;
