/* eslint-disable @typescript-eslint/indent */
import { ServerApi } from 'stellar-sdk';
import React, { useEffect, useState } from 'react';

import Loading from 'components/Loading';
import NoData from 'components/common/NoData';
import ExtTitle from 'components/common/ExitTitle';
import ScrollBar from 'components/common/ScrollBar';
import useActiveAccount from 'hooks/useActiveAccount';
import loadTransactions from 'features/loadTransactions';
import Layout from 'components/common/Layouts/BaseLayout';

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

  const scrollMaxHeight = document.documentElement.clientHeight - 131;

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
