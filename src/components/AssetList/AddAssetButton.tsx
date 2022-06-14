import React, { CSSProperties } from 'react';
import Link from 'next/link';

import ButtonContainer from 'components/common/ButtonContainer';
import Button from 'components/common/Button';
import Plus from 'svgs/Plus';

import { Text } from './styles';

type AssetsButtonType = { style: CSSProperties };

const AddAssetButton = ({ style }: AssetsButtonType) => (
  <div>
    {/* <ButtonContainer btnSize={358} justify="center"> */}
    <Link href="./" passHref>
      <Button
        type="submit"
        variant="outlined"
        size="medium"
        style={{
          width: 'calc(100% - 32px)',
          ...style,
        }}
        content={
          <Text>
            <span className="mr-1.5">
              <Plus width="12" height="12" />
            </span>
            Add assets
          </Text>
        }
      />
    </Link>
    {/* </ButtonContainer> */}
  </div>
);

export default AddAssetButton;
