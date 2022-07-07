import React from 'react';
import shortid from 'shortid';

import camelToTitleCase from 'helpers/camelToTitle';
import ShowField from './ShowField';

import * as S from './styles';

const ShowOperation = ({ operation: op, index }) => {
  const { type, ...other } = op;

  let arr = Object.entries(other);

  if (type === 'setOptions' && op.signer) {
    arr = Object.entries(op.signer);
  }

  if (type === 'changeTrust' && op.line) {
    const { type: tttttp, line, ...others } = op;
    arr = Object.entries({
      ...line,
      ...others,
    });
  }

  return (
    <S.Box key={shortid.generate()}>
      <S.Card>
        <S.CardTitle>
          #{index + 1}-{camelToTitleCase(type)}
        </S.CardTitle>

        {arr.map((keyValue) => (
          <ShowField keyValue={keyValue} />
        ))}
      </S.Card>
    </S.Box>
  );
};

export default ShowOperation;
