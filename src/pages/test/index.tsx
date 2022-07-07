import ConnectRequest from 'blocks/ConnectRequest';
import BottomSheet from 'components/common/BottomSheet';
import React, { useState } from 'react';
import ApproveTransaction from 'blocks/ApproveTransaction';

const Test = () => {
  const [open, setOpen] = useState(false);
  const onClose = () => setOpen(false);
  const onOpen = () => setOpen(true);
  return (
    <div>
      <div onClick={onOpen}>click me</div>

      <BottomSheet isOpen={open} setOpen={setOpen} height={504}>
        <ApproveTransaction onCancel={onClose} />
      </BottomSheet>
    </div>
  );
};

export default Test;

// <ConnectRequest onCancel={onClose} />
