import React from 'react';
import { StrKey } from 'stellar-sdk';

import showObject from 'utils/showObject';
import * as S from './styles';

const ShowfieldJSX = ({ tKey, value }: any) => (
  <>
    <S.cardSubject>{tKey}</S.cardSubject>

    <S.cardValue>{value}</S.cardValue>
  </>
);

const ShowField = ({ keyValue }: any) => {
  const [key, value] = keyValue;

  const isObject = typeof value === 'object';

  if (!isObject) {
    if (
      StrKey.isValidEd25519PublicKey(value) &&
      key === 'ed25519PublicKey'
    ) {
      return <ShowfieldJSX tKey="publicKey" value={value} />;
    }

    if (!isNaN(value)) {
      return (
        <ShowfieldJSX
          tKey={key}
          value={parseFloat(value).toString()}
        />
      );
    }

    return <ShowfieldJSX tKey={key} value={value} />;
  }

  if (Array.isArray(value) && key === 'path') {
    let str = '[ ';

    for (let i = 0; i < value.length; i += 1) {
      if (Object.values(value[i])[0]) {
        str = `${str}${Object.values(value[i])[0]} `;
      }
    }

    str = `${str}]`;

    return <ShowfieldJSX tKey={key} value={str} />;
  }

  return <ShowfieldJSX tKey={key} value={showObject(value)} />;
};

export default ShowField;
