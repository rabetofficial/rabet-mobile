import React from 'react';

const Icon = () => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 36 36"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <filter
        x="-25%"
        y="-25%"
        width="150%"
        height="150%"
        filterUnits="objectBoundingBox"
        id="8fzrvs0i7a"
      >
        <feOffset
          dy="1"
          in="SourceAlpha"
          result="shadowOffsetOuter1"
        />
        <feGaussianBlur
          stdDeviation="1"
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
        />
        <feColorMatrix
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0993498689 0"
          in="shadowBlurOuter1"
          result="shadowMatrixOuter1"
        />
        <feMerge>
          <feMergeNode in="shadowMatrixOuter1" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g
      filter="url(#8fzrvs0i7a)"
      transform="translate(5 5)"
      fillRule="nonzero"
      fill="none"
    >
      <path
        d="M26 13c0 7.18-5.82 13-13 13S0 20.18 0 13 5.82 0 13 0s13 5.82 13 13z"
        fill="#000"
      />
      <path
        fill="#FFF"
        d="m19.88 6.88-8.82 8.832-3.64-3.631-1.84 1.838 5.483 5.47L21.72 8.718z"
      />
    </g>
  </svg>
);

export default Icon;
