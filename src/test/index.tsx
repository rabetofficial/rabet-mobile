import React, { useState } from 'react';
import BottomBar from 'components/common/BottomBar';
import BottomSheet from 'components/common/BottomSheet';

const items = [
  'save item',
  'open item',
  'share item',
  'delete item',
  'cancel',
];
const height = items.length * 60 + 80;

const TestPage = () => {
  const [open, setOpen] = useState(false);
  const onClose = () => setOpen(false);
  const onOpen = () => setOpen(true);

  return (
    <>
      <button type="button" onClick={onOpen}>
        open
      </button>
      <br />
      some content
      <BottomSheet isOpen={open} setOpen={setOpen} height={height}>
        {items.map((entry) => (
          <div key={entry} onClick={onClose}>
            {entry}
          </div>
        ))}
      </BottomSheet>
      <BottomBar />
    </>
  );
};

export default TestPage;
