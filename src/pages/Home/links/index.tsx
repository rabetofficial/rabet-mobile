import React from 'react';

import Button from 'components/common/Button';
// import useTypedSelector from 'hooks/useTypedSelector';
import { Swap, Send, Receive } from 'svgs/TransactionActions';
import Link from 'next/link';

const Links = () => (
  <div className="flex justify-center items-center mt-[22px]">
    <div>
      <Link href="./" passHref>
        <Button
          iconBtn
          size="small"
          variant="icon-circle"
          content={
            <span>
              <Send size="22" />
            </span>
          }
          title="Send"
        />
      </Link>
    </div>

    <div>
      <Link href="./" passHref>
        <Button
          size="small"
          variant="icon-circle"
          content={
            <span>
              <Swap width="20" height="22" />
            </span>
          }
          iconBtn
          title="Swap"
        />
      </Link>
    </div>

    <div>
      <Link href="./" passHref>
        <Button
          size="small"
          variant="icon-circle"
          content={
            <span>
              <Receive size="22" />
            </span>
          }
          iconBtn
          title="Receive"
        />
      </Link>
    </div>
  </div>
);

export default Links;
