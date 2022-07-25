import { useState, useEffect, useRef } from 'react';

import useActiveAccount from 'hooks/useActiveAccount';
import useTypedSelector from 'hooks/useTypedSelector';

import loadBids from 'features/loadBids';
import loadAccount from 'features/loadAccount';
import loadCurrencies from 'features/loadCurrencies';
import loadAssetImages from 'features/loadAssetImages';

import config from 'config';
import { AppDispatch } from 'store';

const useLoadHome = (
  dispatch: AppDispatch,
  forceUpdate: () => void,
) => {
  const activeAccount = useActiveAccount();
  const [isLoading, setIsLoading] = useState(true);
  const { network } = useTypedSelector((store) => store.options);
  const interval = useRef();

  useEffect(() => {
    setIsLoading(true);

    loadCurrencies();
    loadAccount(activeAccount).then(() => {
      Promise.all([loadBids(dispatch), loadAssetImages()]).then(
        () => {
          forceUpdate();
        },
      );

      setIsLoading(false);
    });

    interval.current = setInterval(() => {
      loadCurrencies();

      loadAccount(activeAccount).then(() => {
        Promise.all([loadBids(dispatch), loadAssetImages()]).then(
          () => {
            forceUpdate();
          },
        );

        setIsLoading(false);
      });
    }, config.INTERVAL_TIME_SECONDS * 1000);

    return () => clearInterval(interval.current);
  }, [activeAccount.publicKey, network]);

  return isLoading;
};

export default useLoadHome;
