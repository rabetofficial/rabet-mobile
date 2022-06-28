import React from 'react';

import QRCode from 'components/QRCode';
import ExtTitle from 'components/common/ExitTitle';
import Layout from 'components/common/Layouts/BaseLayout';

const Receive = () => (
  <>
    <ExtTitle title="Receive" />

    <Layout>
      <div className="mt-[53px]">
        <QRCode />
      </div>
    </Layout>
  </>
);

export default Receive;
