import React, { useState } from 'react';

import CircleQuestion from 'svgs/CircleQuestion';
import BottomSheet from 'components/common/BottomSheet';
import Layout from 'components/common/Layouts/BaseLayout';
import Button from 'components/common/Button';

type AppProps = {
  title: string;
  info: string;
};

const Subject = ({ title, info }: AppProps) => {
  const [open, setOpen] = useState(false);
  const onClose = () => setOpen(false);
  const onOpen = () => setOpen(true);
  return (
    <div>
      <div
        className="whitespace-nowrap font-medium flex items-center"
        onClick={onOpen}
      >
        {title}
        <span className="ml-[5px]">
          <CircleQuestion />
        </span>
      </div>
      <BottomSheet isOpen={open} setOpen={setOpen} height={250}>
        <Layout>
          <div className="text-xl font-medium">{title}</div>
          <div className="mt-2">{info}</div>
          <Button
            variant="primary"
            className="mt-8"
            content="Got it"
            size="medium"
            onClick={onClose}
          />
        </Layout>
      </BottomSheet>
    </div>
  );
};

export default Subject;
