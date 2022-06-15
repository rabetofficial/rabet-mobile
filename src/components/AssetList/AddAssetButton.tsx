import React, { CSSProperties } from 'react';
import Link from 'next/link';

import Plus from 'svgs/Plus';
import Button from 'components/common/Button';

import { Text } from './styles';

type AssetsButtonType = { style: CSSProperties };

const AddAssetButton = ({ style }: AssetsButtonType) => (
  <div>
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
  </div>
);

export default AddAssetButton;
