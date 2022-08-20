const browserDetect = (): string => {
  const { userAgent } = navigator;
  let browserName;

  if (userAgent.match(/brave/i)) {
    browserName = 'brave';
  } else if (userAgent.match(/duckduckgo/i)) {
    browserName = 'duckduckgo';
  } else if (userAgent.match(/chrome|chromium|crios/i)) {
    browserName = 'chrome';
  } else if (userAgent.match(/firefox|fxios/i)) {
    browserName = 'firefox';
  } else if (userAgent.match(/safari/i)) {
    browserName = 'safari';
  } else if (userAgent.match(/opr\//i)) {
    browserName = 'opera';
  } else if (userAgent.match(/edg/i)) {
    browserName = 'edge';
  } else {
    browserName = '0';
  }

  return browserName;
};

export default browserDetect;
