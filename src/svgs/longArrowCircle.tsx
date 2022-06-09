import React from 'react';

export const ArrowLeft = () => (
  <svg
    width="24"
    height="17"
    viewBox="0 0 24 17"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.928.842a.79.79 0 0 1 1.129 0 .796.796 0 0 1 0 1.117L3.336 7.68h18.878c.44 0 .801.35.801.79 0 .44-.36.801-.801.801H3.336l5.72 5.71a.81.81 0 0 1 0 1.129.79.79 0 0 1-1.128 0L.853 9.034a.796.796 0 0 1 0-1.116L7.928.842z"
      fill="#000"
      fillRule="nonzero"
    />
  </svg>
);

export const ArrowLeftDisabled = () => (
  <svg
    width="24"
    height="17"
    viewBox="0 0 24 17"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.928.842a.79.79 0 0 1 1.129 0 .796.796 0 0 1 0 1.117L3.336 7.68h18.878c.44 0 .801.35.801.79 0 .44-.36.801-.801.801H3.336l5.72 5.71a.81.81 0 0 1 0 1.129.79.79 0 0 1-1.128 0L.853 9.034a.796.796 0 0 1 0-1.116L7.928.842z"
      fill="#AFAFAF"
      fillRule="nonzero"
    />
  </svg>
);

export const ArrowRight = () => (
  <svg
    width="24"
    height="17"
    viewBox="0 0 24 17"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.072.842a.79.79 0 0 0-1.129 0 .796.796 0 0 0 0 1.117l5.721 5.721H1.786c-.44 0-.801.35-.801.79 0 .44.36.801.801.801h18.878l-5.72 5.71a.81.81 0 0 0 0 1.129.79.79 0 0 0 1.128 0l7.075-7.076a.796.796 0 0 0 0-1.116L16.072.842z"
      fill="#000"
      fillRule="nonzero"
    />
  </svg>
);

type SlideProps = {
  disabled: boolean;
};

export const SlideRight = () => (
  <>
    <ArrowRight />
  </>
);
export const SlideLeft = ({ disabled }: SlideProps) => (
  <>{disabled ? <ArrowLeftDisabled /> : <ArrowLeft />}</>
);
