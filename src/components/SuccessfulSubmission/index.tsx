import React from 'react';
import styled from 'styled-components';

import NoteCard from 'components/NoteCard';
import BlackCheck from 'svgs/BlackCheck';
import ShareArrowSquare from 'svgs/ShareArrowSqaure';
import explorer from 'utils/horizon/transactionLink';

export type SuccessfulSubmissionType = {
  onClick: () => void;
  message: string;
};

const SuccessfulSubmission = ({
  onClick,
  message,
}: SuccessfulSubmissionType) => {
  const ShareLink = styled.a`
    margin-left: 4px;
    cursor: pointer;
    display: inline-flex;
  `;

  const Text = (
    <>
      <span>{message}</span>
      <ShareLink
        href={explorer(message)}
        target="_blank"
        rel="noreferrer"
      >
        <ShareArrowSquare />
      </ShareLink>
    </>
  );

  return (
    <div className="flex justify-center items-center h-screen ">
      <div style={{ width: '100%' }}>
        <NoteCard
          title="Transaction Sent"
          message={message ? Text : 'SUCCESS!'}
          btnText="OK"
          icon={<BlackCheck />}
          onClick={onClick}
        />
      </div>
    </div>
  );
};

export default SuccessfulSubmission;
