import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import config from 'config';
import { GenericElementOption } from 'models';
import RouteName from 'staticRes/routes';
import Button from 'components/common/Button';
import useTypedSelector from 'hooks/useTypedSelector';
import changeOptionsAction from 'actions/options/change';
import * as currenciesModule from 'staticRes/currencies';
import ToggleSwitch from 'components/common/ToggleSwitch';
import ButtonContainer from 'components/common/ButtonContainer';
import Options from './Options';
import Subject from './Subject';

import * as S from './styles';

const explorerOptions = [
  { value: 'steexp', label: 'Steexp' },
  { value: 'lumenscan', label: 'Lumenscan' },
  { value: 'stellarexpert', label: 'StellarExpert' },
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

  const [selectedExplorer, setSelectedExplorer] = useState<
  GenericElementOption<string>
  >({} as GenericElementOption<string>);

  const [selectedCurrency, setSelectedCurrency] = useState<
    GenericElementOption<string>
  >(currenciesList[0]);

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

  const onChangeCurrency = (e: GenericElementOption<string>) => {
    setSelectedCurrency(e);
  };

  const onChangeNetwork = (e: GenericElementOption<string>) => {
    setSelectedExplorer(e);
  };

  const handleSubmit = () => {
    changeOptionsAction({
      privacyMode: checked,
      explorer: selectedExplorer.value,
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
        <Subject
          title="Explorer"
          info="You will be referred to this Explorer to see the details of your transactions."
        />
        <Options
          items={explorerOptions}
          defaultValue={selectedExplorer}
          onChange={onChangeNetwork}
        />
      </S.Item>

      <S.Item>
        <Subject
          title="Currency"
          info="Rabet supports popular global currencies, and you can change your wallet currency here."
        />
        <Options
          items={currenciesList}
          defaultValue={selectedCurrency}
          onChange={onChangeCurrency}
        />
      </S.Item>

      <S.Item>
        <Subject
          title="Privacy mode"
          info="Websites must request access to view your account information."
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
