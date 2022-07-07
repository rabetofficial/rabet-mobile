import ConnectRequest from 'blocks/ConnectRequest';
import BottomSheet from 'components/common/BottomSheet';
import React, { useState } from 'react';
import ApproveTransaction from 'blocks/ApproveTransaction';

const Test = () => {
  const [open, setOpen] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);
  const onConfirm = () => {
    setOpen(false);
    setTimeout(() => setOpenConfirm(true), 500);
  };
  const onConfirmClose = () => setOpenConfirm(false);

  return (
    <div>
      <div onClick={onOpen}>click me</div>

      <BottomSheet isOpen={open} setOpen={setOpen} height={504}>
        <ConnectRequest onCancel={onClose} onConfirm={onConfirm} />
      </BottomSheet>
      <BottomSheet
        isOpen={openConfirm}
        setOpen={setOpen}
        height={727}
      >
        <ApproveTransaction onCancel={onConfirmClose} />
      </BottomSheet>
    </div>
  );
};

export default Test;
