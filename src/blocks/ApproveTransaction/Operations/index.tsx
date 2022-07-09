import React from 'react';
import shortid from 'shortid';

import ShowOperation from './ShowOperation';

type OperationTypes = { operations: any };
const Operations = ({ operations }: OperationTypes) => (
  <>
    {operations.map((operation, index) => (
      <ShowOperation
        operation={operation}
        key={shortid.generate()}
        index={index}
      />
    ))}
  </>
);

export default Operations;
