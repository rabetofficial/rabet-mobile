import React from 'react';
import shortid from 'shortid';

import Card from 'components/common/Card';
import camelToTitleCase from 'helpers/camelToTitle';
import ShowField from './ShowField';

import * as S from './styles';

const ShowOperation = ({ operation: op, index }: any) => {
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
    <Card type="secondary" className="mt-4">
      <S.Box>
        <S.CardTitle>
          #{index + 1}-{camelToTitleCase(type || 'ABCDEFG')}
        </S.CardTitle>

        {arr.map((keyValue) => (
          <ShowField keyValue={keyValue} key={shortid.generate()} />
        ))}
      </S.Box>
    </Card>
  );
};

export default ShowOperation;
