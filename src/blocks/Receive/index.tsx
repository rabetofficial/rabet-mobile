import React from 'react';

import QRCode from 'components/QRCode';
import Layout from 'components/common/Layouts/BaseLayout';

const Receive = () => (
  <Layout>
    <div className="mt-[53px]">
      <QRCode />
    </div>
  </Layout>
);

export default Receive;
