import React from 'react';

import NoteCard from 'components/NoteCard';
import ExclamationTriangle from 'svgs/ExclamationTriangle';

export type ErrorProps = {
  message: string | string[] | any;
  onClick: () => void;
};

const Error = ({ onClick, message }: ErrorProps) => (
  <div className="flex justify-center items-center h-screen">
    <div style={{ width: '100%' }}>
      <NoteCard
        title="Error"
        message={message || 'ERROR!'}
        icon={<ExclamationTriangle />}
        btnText="Got it"
        onClick={onClick}
      />
    </div>
  </div>
);

export default Error;
