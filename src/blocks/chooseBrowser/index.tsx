import React from 'react';

import detectOS from 'utils/detectOS';

const ChooseBrowser = () => {
  const os = detectOS();

  const text = os === 'ios' ? 'Safari' : 'Chrome';

  return (
    <div className="h-screen flex justify-center items-center">
      <p className="text-lg">Use {text} to install the app</p>
    </div>
  );
};

export default ChooseBrowser;
