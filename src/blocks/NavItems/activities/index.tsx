/* eslint-disable @typescript-eslint/indent */
import React, { useEffect, useState } from 'react';
import { ServerApi } from 'stellar-sdk';

import useActiveAccount from 'hooks/useActiveAccount';
import loadTransactions from 'features/loadTransactions';
import Loading from 'components/Loading';
import ScrollBar from 'components/common/ScrollBar';
import NoData from 'components/common/NoData';
import Layout from 'components/common/Layouts/BaseLayout';
import ExtTitle from 'components/common/ExitTitle';
import Transaction from './Transaction';

const Activities = () => {
  const { publicKey } = useActiveAccount();
  const [transactions, setTransactions] = useState<
    ServerApi.CollectionPage<ServerApi.OperationRecord>[]
  >([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadTransactions(publicKey).then((txs) => {
      setTransactions(txs);
      setIsLoading(false);
    });
  }, [publicKey]);

  if (isLoading) {
    return (
      <>
        <ExtTitle title="Recent activities" backIcon={false} />
        <div className="flex justify-center items-center h-[85vh]">
          <Loading size={78} />
        </div>
      </>
    );
  }

  if (!transactions.length) {
    return (
      <>
        <ExtTitle title="Recent activities" backIcon={false} />
        <div className="flex justify-center items-center h-[85vh]">
          <NoData msg="There is no activity" className="text-base" />
        </div>
      </>
    );
  }

  const scrollMaxHeight = document.documentElement.clientHeight - 121;

  return (
    <>
      <ExtTitle title="Recent activities" backIcon={false} />
      <ScrollBar isHidden maxHeight={scrollMaxHeight}>
        <Layout>
          {transactions.map((tx, index) => (
            <div key={tx.records[0].transaction_hash}>
              <Transaction transaction={tx} publicKey={publicKey} />

              {transactions.length !== index + 1 && (
                <hr className="border-t-primary-lighter" />
              )}
            </div>
          ))}
        </Layout>
      </ScrollBar>
    </>
  );
};

export default Activities;
