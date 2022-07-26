const isInPWA = () => {
  const isInWebAppiOS = window.navigator.standalone === true;
  const isInWebAppChrome = window.matchMedia(
    '(display-mode: standalone)',
  ).matches;

  return isInWebAppiOS || isInWebAppChrome;
};

export default isInPWA;
