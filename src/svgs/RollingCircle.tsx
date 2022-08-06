import React from 'react';

const Searching = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{
      margin: 'auto',
      background: 'none',
      shapeRendering: 'auto',
    }}
    width="18px"
    height="18px"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
  >
    <circle
      cx="50"
      cy="50"
      fill="none"
      stroke="#afafaf"
      strokeWidth="6"
      r="42"
      strokeDasharray="187"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        repeatCount="indefinite"
        dur="1s"
        from="0 50 50"
        to="360 50 50"
        keyTimes="0;1"
      />
    </circle>
  </svg>
);

export default Searching;
