import React, { useEffect, useState } from 'react';
import { ServerApi } from 'stellar-sdk';

import useActiveAccount from 'hooks/useActiveAccount';
import loadTransactions from 'features/loadTransactions';
import Loading from 'components/Loading';
import Nodata from 'components/common/Nodata';
import ScrollBar from 'components/common/ScrollBar';
import Layout from 'components/common/Layouts/BaseLayout';
import ExtTitle from 'components/common/ExitTitle';
import Transaction from './Transaction';

type TransactionsType = {
  scrollMaxHeight?: number;
};

const Activities = ({ scrollMaxHeight }: TransactionsType) => {
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
      <div className="flex justify-center items-center h-[90vh]">
        <Loading size={60} />
      </div>
    );
  }

  if (!transactions.length) {
    return (
      <div className="mt-[32px]">
        <Nodata msg="You have no transaction" className="text-base" />
      </div>
    );
  }

  return (
    <ScrollBar isHidden maxHeight={scrollMaxHeight}>
      <ExtTitle title="Recent activities" backIcon={false} />
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
  );
};

Activities.defaultProps = {
  scrollMaxHeight: 600,
};
export default Activities;
