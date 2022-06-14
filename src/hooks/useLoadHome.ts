import { useState, useEffect } from 'react';

import useActiveAccount from 'hooks/useActiveAccount';
import useTypedSelector from 'hooks/useTypedSelector';

import loadBids from 'features/loadBids';
import loadAccount from 'features/loadAccount';
import loadCurrencies from 'features/loadCurrencies';
import loadAssetImages from 'features/loadAssetImages';

import config from 'config';

const useLoadHome = () => {
  const activeAccount = useActiveAccount();
  const [isLoading, setIsLoading] = useState(true);
  const { network } = useTypedSelector((store) => store.options);

  useEffect(() => {
    setIsLoading(true);

    loadCurrencies();
    loadAccount(activeAccount).then(() => {
      loadBids();
      loadAssetImages();

      setIsLoading(false);
    });

    const intervalId = setInterval(() => {
      loadCurrencies();

      loadAccount(activeAccount).then(() => {
        loadBids();
        loadAssetImages();

        setIsLoading(false);
      });
    }, config.INTERVAL_TIME_SECONDS * 1000);

    return () => clearInterval(intervalId);
  }, [activeAccount.publicKey, network]);

  return isLoading;
};

export default useLoadHome;
