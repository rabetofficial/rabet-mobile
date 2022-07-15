import React from 'react';
import { useRouter } from 'next/router';

import Button from 'components/common/Button';
import RouteName from 'staticRes/routes';
import { Swap, Send, Receive } from 'svgs/TransactionActions';

const Links = () => {
  const router = useRouter();

  return (
    <div className="flex justify-center items-center mt-[20px]">
      <div>
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
          onClick={() => router.push(RouteName.Send)}
        />
      </div>

      <div>
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
          onClick={() => router.push(RouteName.Swap)}
        />
      </div>

      <div>
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
          onClick={() => router.push(RouteName.Receive)}
        />
      </div>
    </div>
  );
};

export default Links;
