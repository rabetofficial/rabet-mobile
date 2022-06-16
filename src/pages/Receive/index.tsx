import React from 'react';

import QRCode from 'components/QRCode';
import ExtTitle from 'components/common/ExitTitle';

const Receive = () => (
  <>
    <ExtTitle title="Receive" className="content" />

    <div className="content mt-[53px]">
      <QRCode />
    </div>
  </>
);

export default Receive;
