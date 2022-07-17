import React from 'react';
import logo from 'public/images/logo.svg';

const Opening = () => (
  <div className="flex justify-center items-center w-screen h-screen">
    <img
      src={logo.src}
      alt="logo"
      className="opening-animation"
      width="75px"
      height="75px"
    />
  </div>
);

export default Opening;
