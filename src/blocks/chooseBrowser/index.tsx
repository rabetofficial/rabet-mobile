import React from 'react';
import detectMobile from 'utils/detectMobile';

import detectOS from 'utils/detectOS';

const ChooseBrowser = () => {
  const os = detectOS();
  const isMobile = detectMobile();

  const text = os === 'ios' ? 'Safari' : 'Chrome';

  return (
    <div className="h-screen flex justify-center items-center">
      {isMobile ? (
        <p className="text-lg">Use {text} to install the app</p>
      ) : (
        <p>Use phone to install the app</p>
      )}
    </div>
  );
};

export default ChooseBrowser;
