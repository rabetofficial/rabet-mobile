import { StrKey } from 'stellar-sdk';
import React, { useState } from 'react';
import { Field, Form } from 'react-final-form';
import { useRouter } from 'next/router';

import BN from 'helpers/BN';
import getAccount from 'api/getAccount';
import RouteName from 'staticRes/routes';
import Error from 'components/common/Error';
import Input from 'components/common/Input';
import getMaxBalance from 'utils/maxBalance';
import Button from 'components/common/Button';
import isTransferable from 'utils/isTransferable';
import useActiveAccount from 'hooks/useActiveAccount';
import controlNumberInput from 'utils/controlNumberInput';
import isInsufficientAsset from 'utils/isInsufficientAsset';
import ButtonContainer from 'components/common/ButtonContainer';
import Layout from 'components/common/Layouts/BaseLayout';
import DestinationSuggest from './DestinationSuggestion';
import AssetTrigger from './AssetTrigger';

import { ModalInput, PopoverContainer } from './styles';

type FormValues = {
  memo: string;
  amount: string;
  destination: string;
};

const BasicSend = () => {
  const router = useRouter();
  const account = useActiveAccount();
  const [isAccountNew, setIsAccountNew] = useState(false);

  const assets = account.assets || [];

  const [selectedAsset, setSelectedAsset] = useState(assets[0]);

  const onSubmit = async (v: FormValues) => {
    const values = {
      ...v,
      asset: selectedAsset,
      isAccountNew,
    };

    //   navigate(RouteName.BasicSendConfirm, {
    //     state: {
    //       values,
    //     },
    //   });

    router.push(RouteName.BasicSendConfirm);

    return {};
  };

  const validateForm = async (v: FormValues) => {
    const values = {
      ...v,
      asset: selectedAsset,
    };

    const errors: Partial<FormValues> = {};

    if (!values.amount) {
      errors.amount = '';
    } else if (new BN(values.amount).isLessThanOrEqualTo('0')) {
      errors.amount = 'Amount must be higher than 0.';
    }

    if (values.memo && values.memo.length > 28) {
      errors.memo = 'Memo should not be more than 28 characters';
    }

    if (!values.destination) {
      errors.destination = '';
    } else if (!StrKey.isValidEd25519PublicKey(values.destination)) {
      errors.destination = 'Invalid destination.';
    } else if (!values.asset) {
      errors.destination = 'No asset selected.';
    }

    if (
      errors.memo !== undefined ||
      errors.destination !== undefined ||
      errors.amount !== undefined
    ) {
      return errors;
    }

    if (
      !isInsufficientAsset(
        values.asset,
        account.subentry_count,
        values.amount,
      )
    ) {
      let code = 'XLM';

      if (
        values.asset.asset_type !== 'native' &&
        values.asset.asset_type !== 'liquidity_pool_shares'
      ) {
        code = values.asset.asset_code;
      }

      return {
        amount: `Insufficient ${code} balance.`,
      };
    }

    const destinationAccount = await getAccount(values.destination);
    const [isAllowed, transferResult] = isTransferable(
      values,
      destinationAccount,
    );
    if (!isAllowed && transferResult === 'INACTIVE') {
      return {
        destination: 'Inactive accounts cannot receive tokens.',
      };
    }

    if (!isAllowed && transferResult === 'NO_TRUST') {
      return {
        destination:
          'The destination account does not trust the asset you are attempting to send.',
      };
    }

    if (!isAllowed && transferResult === 'LIMIT_EXCEED') {
      return {
        destination:
          'The destination account balance would exceed the trust of the destination in the asset.',
      };
    }

    setIsAccountNew(transferResult === 'INACTIVE');

    return {};
  };

  return (
    <Layout>
      <Form
        validate={validateForm}
        onSubmit={onSubmit}
        mutators={{
          setMax: (args, state, tools) => {
            tools.changeValue(state, 'amount', () =>
              getMaxBalance(selectedAsset, account),
            );
          },
          changeDestination: (args, state, tools) => {
            tools.changeValue(state, 'destination', () => args[0]);

            if (args[1]) {
              tools.changeValue(state, 'memo', () => args[1]);
            }
          },
        }}
        render={({
          form,
          invalid,
          pristine,
          submitting,
          submitError,
          handleSubmit,
        }) => (
          <form
            onSubmit={(e) => {
              handleSubmit(e).then(form.reset);
            }}
          >
            <label className="label-primary block mt-6 mb-2">
              Assets
            </label>
            <Field name="asset">{() => <AssetTrigger />}</Field>

            <label className="label-primary block mt-6">Amount</label>
            <ModalInput>
              <Field name="amount">
                {({ input, meta }) => (
                  <Input
                    type="number"
                    placeholder="0.0"
                    size="medium"
                    input={input}
                    meta={meta}
                    variant="max"
                    styleType="light"
                    setMax={form.mutators.setMax}
                    onKeyPress={controlNumberInput}
                    className="w-full"
                  />
                )}
              </Field>
            </ModalInput>

            <Field name="destination">
              {({ input, meta }) => (
                <PopoverContainer className="relative" id="full">
                  <label className="label-primary block mt-4">
                    Destination
                  </label>
                  <Input
                    type="text"
                    placeholder="G..."
                    size="medium"
                    styleType="light"
                    input={input}
                    meta={meta}
                  />

                  {(meta.active || meta.touched) && (
                    <DestinationSuggest
                      handleChange={(pk, memo) => {
                        form.mutators.changeDestination(pk, memo);
                      }}
                    />
                  )}
                </PopoverContainer>
              )}
            </Field>

            <Field name="memo">
              {({ input, meta }) => (
                <>
                  <label className="label-primary block mt-6">
                    Memo
                    <span className="label-optional">
                      {' '}
                      (optional)
                    </span>
                  </label>
                  <Input
                    type="text"
                    placeholder="My friend"
                    size="medium"
                    styleType="light"
                    input={input}
                    meta={meta}
                  />
                </>
              )}
            </Field>

            {submitError && <Error>{submitError}</Error>}

            <ButtonContainer fixedBottom mb={32}>
              <Button
                type="submit"
                variant="primary"
                size="medium"
                content="Send"
                disabled={invalid || pristine || submitting}
              />
            </ButtonContainer>
          </form>
        )}
      />
    </Layout>
  );
};

export default BasicSend;
