import React from 'react';

import OpAdvance from 'blocks/Op/Advance';
import ScrollBar from 'components/common/ScrollBar';

const OperationAdvance = () => (
  <ScrollBar isHidden maxHeight={600}>
    <div className="pb-6">
      <div className="content mt-8">
        <OpAdvance usage="extension" />
      </div>
    </div>
  </ScrollBar>
);

export default OperationAdvance;
