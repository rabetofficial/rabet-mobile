import React from 'react';

import Loading from 'components/Loading';
import openModalAction from 'actions/modal/open';
import Error, { ErrorProps } from 'components/Error';
import SuccessfulSubmission, {
  SuccessfulSubmissionType,
} from 'components/SuccessfulSubmission';

export const openLoadingModal = ({
  message,
}: {
  message?: string;
}) => {
  openModalAction({
    minHeight: 0,
    isStyled: false,
    size: 'medium',
    title: '',
    padding: 'medium',
    children: (
      <Loading
        size={110}
        title={message || 'Sending to network'}
        titleNonMargin
      />
    ),
  });
};

export const openErrorModal = ({ message, onClick }: ErrorProps) => {
  openModalAction({
    minHeight: 0,
    isStyled: false,
    size: 'medium',
    title: '',
    padding: 'medium',
    children: <Error onClick={onClick} message={message} />,
  });
};

export const openSucessModal = ({
  message,
  onClick,
}: SuccessfulSubmissionType) => {
  openModalAction({
    minHeight: 0,
    isStyled: false,
    size: 'medium',
    title: '',
    padding: 'medium',
    children: (
      <SuccessfulSubmission onClick={onClick} message={message} />
    ),
  });
};
