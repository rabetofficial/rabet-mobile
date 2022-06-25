import React from 'react';
import Link from 'next/link';

import ArrowRight from 'svgs/AngleRight';

type AppProps = {
  name: string;
  link?: string;
  icon: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

const NavLink = ({
  name,
  link,
  icon,
  className,
  onClick,
}: AppProps) => {
  const element = (
    <div
      className="flex justify-between items-center py-[18px]"
      onClick={onClick}
    >
      <div className={`flex items-center ${className}`}>
        <span>{icon}</span>
        <span className="text-lg ml-[6px]">{name}</span>
      </div>
      {link && <ArrowRight />}
    </div>
  );

  return <>{link ? <Link href={link}>{element}</Link> : element}</>;
};

NavLink.defaultProps = {
  link: '',
  className: '',
  onClick: () => {},
};

export default NavLink;
