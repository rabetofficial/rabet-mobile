import React from 'react';
import styled from 'styled-components';

import CopyText from 'components/common/CopyText';
import Card from 'components/common/Card';

const CopyTextContainer = styled.div`
  display: block;
  width: fit-content;
  margin-top: 4px;
  margin-left: auto;
`;

type AppProps = {
  keyValue: string;
};

const CopyKey = ({ keyValue }: AppProps) => (
  <Card type="primary" className="p-2">
    <div className="leading-normal text-base break-all m-0">
      {keyValue}
      <CopyTextContainer>
        <CopyText text={keyValue} fullIcon />
      </CopyTextContainer>
    </div>
  </Card>
);

export default CopyKey;
