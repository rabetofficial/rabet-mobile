import { useRouter } from 'next/router';
import { Horizon, ServerApi } from 'stellar-sdk';
import React, { useState, useEffect } from 'react';
import { useForm, Controller, useWatch } from 'react-hook-form';

import config from 'config';
import BN from 'helpers/BN';
import Swap from 'svgs/Swap';
import RouteName from 'staticRes/routes';
import Loading from 'components/Loading';
import getMaxBalance from 'utils/maxBalance';
import Button from 'components/common/Button';
import defaultAssets from 'staticRes/defaultAssets';
import SwapDetail from 'blocks/Op/Basic/Swap/Detail';
import Input from 'components/common/Input/InputHook';
import useActiveAccount from 'hooks/useActiveAccount';
import SelectAsset from 'blocks/Op/Basic/SelectAsset';
import combineAssets from 'utils/swap/addDefaultAssets';
import Layout from 'components/common/Layouts/BaseLayout';
import controlNumberInput from 'utils/controlNumberInput';
import isInsufficientAsset from 'utils/isInsufficientAsset';
import ButtonContainer from 'components/common/ButtonContainer';

import humanizeAmount from 'helpers/humanizeNumber';
import * as S from './styles';
import validateForm from './validateForm';

export type FormValues = {
  path: any[];
  to: string;
  from: string;
  minimumReceived: number;
  asset1: Horizon.BalanceLine;
  asset2: Horizon.BalanceLine;
};

declare global {
  interface Window {
    calculateTo: () => void;
  }
}

const BasicSwap = () => {
  const router = useRouter();
  const account = useActiveAccount();
  const [assets] = useState(() => {
    const accountAssets = account.assets || [];

    const assetsPlusDefaultAssets = combineAssets(
      accountAssets,
      defaultAssets,
    );

    return assetsPlusDefaultAssets;
  });

  const [path, setPath] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showSwapInfo, setShowSwapInfo] = useState(false);
  const [minimumReceived, setMinimumReceived] = useState(0);
  const [isRotateActive, setIsRotateActive] = useState(false);
  const [shouldRotate, setShouldRotate] = useState(false);

  const {
    reset,
    trigger,
    control,
    setValue,
    getValues,
    handleSubmit,
    clearErrors,
    formState: { errors, isValid, isValidating },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      to: '',
      from: '',
      asset1: assets[0],
      asset2: assets[1],
      lastField: 'from',
    },
    resolver: (formValues) =>
      validateForm(
        formValues,
        account,
        setValue,
        setLoading,
        setRealData,
        setShowSwapInfo,
      ),
  });

  function setRealData(
    values: FormValues,
    calculatedResult: ServerApi.PaymentPathRecord,
  ) {
    clearErrors('from');
    clearErrors('to');

    setIsRotateActive(false);

    const calculatePath = [
      values.asset1,
      ...calculatedResult.path,
      values.asset2,
    ];

    setPath(calculatePath);

    if (values.lastField === 'from') {
      setValue('to', calculatedResult.destination_amount);

      const minReceived = new BN(calculatedResult.destination_amount)
        .div(100)
        .times(config.MIN_RECEIVED);

      setMinimumReceived(parseFloat(minReceived.toString()));
    } else {
      setValue('from', calculatedResult.source_amount);

      if (
        !isInsufficientAsset(
          values.asset1,
          account.subentry_count,
          values.from,
        )
      ) {
        errors.from = {
          type: 'error',
          message: 'Insufficient amount.',
        };
      }

      const minReceived = new BN(values.to)
        .div(100)
        .times(config.MIN_RECEIVED);

      setMinimumReceived(parseFloat(minReceived.toString()));
    }

    setShowSwapInfo(true);
  }

  useEffect(() => {
    trigger();
  }, [useWatch({ name: ['asset1', 'asset2'], control })]);

  const setFromMax = () => {
    const formValues = getValues();
    const maxValue = getMaxBalance(formValues.asset1, account);

    setValue('from', maxValue, {
      shouldValidate: true,
    });

    setValue('to', '0');
  };

  const handleSwapPlaces = () => {
    const { to, from, asset1, asset2 } = getValues();

    setValue('asset1', asset2, {
      shouldValidate: true,
    });

    setValue('asset2', asset1, {
      shouldValidate: true,
    });

    setValue('to', from);
    setValue('from', to);
  };

  const onSubmit = (v: FormValues) => {
    setShowSwapInfo(false);

    const values = {
      path: JSON.stringify(path),
      to: v.to,
      from: v.from,
      minimumReceived,
      asset1Code: v.asset1.asset_code,
      asset1Type: v.asset1.asset_type,
      asset1Issuer: v.asset1.asset_issuer,
      asset2Code: v.asset2.asset_code,
      asset2Type: v.asset2.asset_type,
      asset2Issuer: v.asset2.asset_issuer,
    };

    router.push({
      pathname: RouteName.BasicSwapConfirm,
      query: values,
    });

    reset();
  };

  const v = getValues();

  const setMaxBalance = () => {
    setValue('from', getMaxBalance(v.asset1, account));
    setValue('asset1', v.asset1, {
      shouldValidate: true,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <S.Shadow>
        <Layout>
          <div className="flex justify-between">
            <div className="text-primary-dark">You Pay</div>
            <div className="flex" onClick={setMaxBalance}>
              <div className="text-primary-dark">Max:</div>
              <div className="ml-[5px]">
                {humanizeAmount(getMaxBalance(v.asset1, account))}{' '}
                {v.asset1.asset_code || 'XLM'}
              </div>
            </div>
          </div>

          <Controller
            name="lastField"
            control={control}
            render={({ field }) => (
              <Input
                invisible
                type="text"
                size="medium"
                value={field.value}
                onChange={field.onChange}
                errorMsg={
                  errors.lastField && errors.lastField.message
                }
              />
            )}
          />

          <div className="flex items-start mt-[20px]">
            <Controller
              name="from"
              control={control}
              render={({ field }) => (
                <Input
                  type="number"
                  placeholder="0.0"
                  size="x-large"
                  variant="borderless"
                  value={field.value}
                  onChange={(e) => {
                    setValue('lastField', 'from');
                    field.onChange(e);
                  }}
                  setMax={setFromMax}
                  errorMsg={errors.from && errors.from.message}
                  onKeyPress={controlNumberInput}
                  styleType="light"
                  className="grow !my-0"
                />
              )}
            />
            <Controller
              name="asset1"
              control={control}
              render={({ field }) => (
                <SelectAsset
                  valueName="asset1"
                  asset={field.value}
                  onChange={field.onChange}
                  assets={assets}
                />
              )}
            />
          </div>
        </Layout>
      </S.Shadow>

      <div className="flex justify-center">
        <S.SwapSvg className="mt-[-20px]" onClick={handleSwapPlaces}>
          <Swap />
        </S.SwapSvg>
      </div>

      <Layout>
        <div className="text-primary-dark mt-[12px]">You Receive</div>

        <div className="flex items-start mt-[19px]">
          <Controller
            name="to"
            control={control}
            render={({ field }) => (
              <Input
                type="number"
                placeholder="0.0"
                size="x-large"
                variant="borderless"
                value={field.value}
                onChange={(e) => {
                  setValue('lastField', 'to');
                  field.onChange(e);
                }}
                errorMsg={errors.to && errors.to.message}
                onKeyPress={controlNumberInput}
                styleType="light"
                className="grow !my-0"
              />
            )}
          />
          <Controller
            name="asset2"
            control={control}
            render={({ field }) => (
              <SelectAsset
                asset={field.value}
                valueName="asset2"
                assets={assets}
                onChange={field.onChange}
              />
            )}
          />
        </div>

        <div className="mt-[40px] flex justify-center flex-col">
          {loading ? (
            <Loading size={60} className="!p-0 mt-[25px]" />
          ) : null}

          {showSwapInfo ? (
            <SwapDetail
              path={path}
              control={control}
              minimumReceived={minimumReceived}
            />
          ) : null}
        </div>

        <ButtonContainer fixedBottom fixedUntil={450} mb={39}>
          <Button
            type="submit"
            variant="primary"
            size="medium"
            content="Swap"
            disabled={!isValid || isValidating || !showSwapInfo}
          />
        </ButtonContainer>
      </Layout>
    </form>
  );
};

export default BasicSwap;
