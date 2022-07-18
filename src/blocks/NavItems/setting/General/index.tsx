import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import config from 'config';
import { ElementOption } from 'models';
import RouteName from 'staticRes/routes';
import Button from 'components/common/Button';
import useTypedSelector from 'hooks/useTypedSelector';
import changeOptionsAction from 'actions/options/change';
import * as currenciesModule from 'staticRes/currencies';
import TooltipLabel from 'components/common/TooltipLabel';
import ToggleSwitch from 'components/common/ToggleSwitch';
import ButtonContainer from 'components/common/ButtonContainer';

import * as S from './styles';
import Options from './Options';

const explorerOptions = [
  { value: 'steexp', label: 'Steexp' },
  { value: 'lumenscan', label: 'Lumenscan' },
  { value: 'stellarexpert', label: 'StellarExpert' },
];

const timerOptions = [
  { value: 5, label: '5 minutes' },
  { value: 15, label: '15 minutes' },
  { value: 30, label: '30 minutes' },
  { value: 60, label: '1 hour' },
  { value: 60 * 24 * 30 * 12 * 5, label: 'Never' },
];

const currencies = Object.values(currenciesModule);

const currenciesList = currencies.map((x) => ({
  ...x,
  value: x.name,
  label: x.name,
}));

const SettingGeneral = () => {
  const router = useRouter();

  const options = useTypedSelector((store) => store.options);
  const [checked, setChecked] = useState(true);

  const [selectedExplorer, setSelectedExplorer] =
    useState<ElementOption>({} as ElementOption);
  const [selectedTimer, setSelectedTimer] = useState<ElementOption>(
    {} as ElementOption,
  );
  const [selectedCurrency, setSelectedCurrency] =
    useState<ElementOption>(currenciesList[0]);

  useEffect(() => {
    let label;

    if (options.explorer === 'stellarexpert') {
      label = 'StellarExpert';
    } else if (options.explorer === 'lumenscan') {
      label = 'Lumenscan';
    } else {
      label = 'Steexp';
    }

    const newSelectedExplorer = {
      label,
      value: options.explorer.toLowerCase(),
    };

    setSelectedExplorer(newSelectedExplorer);

    let timerLabel;

    if (options.autoTimeLocker === 5) {
      timerLabel = '5 minutes';
    } else if (options.autoTimeLocker === 15) {
      timerLabel = '15 minutes';
    } else if (options.autoTimeLocker === 30) {
      timerLabel = '30 minutes';
    } else if (options.autoTimeLocker === 60) {
      timerLabel = '1 hour';
    } else if (options.autoTimeLocker === 60 * 24 * 30 * 12 * 5) {
      timerLabel = 'Never';
    }

    setSelectedTimer({
      value: options.autoTimeLocker,
      label: timerLabel,
    });
    setChecked(options.privacyMode);

    if (options.currency) {
      setSelectedCurrency({
        value: options.currency,
        label: options.currency.toUpperCase(),
      });
    }
  }, [options]);

  const handleChecked = (c: boolean) => {
    setChecked(c);
  };

  const onChangeCurrency = (e: ElementOption) => {
    setSelectedCurrency(e);
  };

  const onChangeTimer = (e: ElementOption) => {
    setSelectedTimer(e);
  };

  const onChangeNetwork = (e: ElementOption) => {
    setSelectedExplorer(e);
  };

  const handleSubmit = () => {
    changeOptionsAction({
      privacyMode: checked,
      explorer: selectedExplorer.value,
      autoTimeLocker: selectedTimer.value,
      currency: selectedCurrency.value,
      mode: 'BASIC',
    });

    router.push({
      pathname: RouteName.Home,
      query: {
        menu: 4,
      },
    });
  };

  return (
    <>
      <S.Item className="mt-4">
        <TooltipLabel
          text="Explorer"
          tooltipText="You will be referred to this Explorer to see the details of your transactions."
        />
        <Options
          items={explorerOptions}
          defaultValue={selectedExplorer}
          onChange={onChangeNetwork}
        />
      </S.Item>

      <S.Item>
        <TooltipLabel
          text="Currency"
          tooltipText="Rabet supports popular global currencies, and you can change your wallet currency here."
        />
        <Options
          items={currenciesList}
          defaultValue={selectedCurrency}
          onChange={onChangeCurrency}
        />
      </S.Item>

      <S.Item>
        <TooltipLabel
          text="Auto-lock timer"
          tooltipText="Rabet will lock automatically after a set amount of time."
        />
        <Options
          items={timerOptions}
          defaultValue={selectedTimer}
          onChange={onChangeTimer}
        />
      </S.Item>

      <S.Item>
        <TooltipLabel
          text="Privacy mode"
          tooltipText="Websites must request access to view your account information."
        />

        <ToggleSwitch
          checked={checked}
          handleChange={handleChecked}
        />
      </S.Item>

      <ButtonContainer mb={74} fixedBottom>
        <Button
          onClick={handleSubmit}
          variant="primary"
          size="medium"
          content="Save"
        />
      </ButtonContainer>
      <ButtonContainer mb={39} mt={16} fixedBottom justify="center">
        <S.Version>Version {config.VERSION}</S.Version>
      </ButtonContainer>
    </>
  );
};

export default SettingGeneral;
