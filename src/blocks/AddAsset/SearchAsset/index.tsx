import React, { useState } from 'react';
import { Field, Form } from 'react-final-form';
import isValidDomain from 'is-valid-domain';

import isEmpty from 'helpers/isEmpty';
import Input from 'components/common/Input';
import Button from 'components/common/Button';
import getAssetsAction from 'api/getSearchedAssets';
import useTypedSelector from 'hooks/useTypedSelector';
import useActiveAccount from 'hooks/useActiveAccount';
import { AssetImageWithActive } from 'reducers/assetImages';
import ButtonContainer from 'components/common/ButtonContainer';
import AssetList from './AssetList';

import ResultTitle from './styles';

type FormValues = {
  asset: string;
};

type AppProps = {
  onSubmit: (x: AssetImageWithActive[]) => void;
};

const SearchAsset = ({ onSubmit }: AppProps) => {
  const [list, setList] = useState<AssetImageWithActive[]>([]);
  const [value, setValue] = useState('');
  const [selectedList, setSelectedList] = useState<
  AssetImageWithActive[]
  >([]);
  const options = useTypedSelector((store) => store.options);
  const account = useActiveAccount();

  const localOnSubmit = () => {
    onSubmit(selectedList);
  };

  const setActive = (index: number) => {
    const selected = selectedList.some(
      (x) =>
        x.asset_code === list[index].asset_code &&
        x.asset_issuer === list[index].asset_issuer,
    );

    if (selected) {
      const newSelectedList = selectedList.filter(
        (x) => x.asset_issuer !== list[index].asset_issuer,
      );

      setSelectedList(newSelectedList);
    } else {
      setSelectedList([...selectedList, list[index]]);
    }
  };

  const validateForm = async (values: FormValues) => {
    let isDomain = false;

    if (isValidDomain(values.asset)) {
      isDomain = true;
    }

    if (values.asset && value !== values.asset) {
      setValue(values.asset);

      const assets = account.assets || [];

      getAssetsAction(values.asset, isDomain).then((assetList) => {
        const newAssetList = [];

        for (let i = 0; i < assetList.length; i += 1) {
          const isOld = assets.some(
            (asset) =>
              (asset.asset_type === 'credit_alphanum4' ||
                asset.asset_type === 'credit_alphanum12') &&
              asset.asset_code === assetList[i].asset_code &&
              asset.asset_issuer === assetList[i].asset_issuer,
          );

          if (isOld) {
            newAssetList.push({
              ...assetList[i],
              active: false,
            });
          } else {
            newAssetList.push({
              ...assetList[i],
              active: true,
            });
          }
        }

        setList(newAssetList);
      });
    } else if (!values.asset && list.length) {
      setList([]);
      setValue('');
      setSelectedList([]);
    }
  };

  return (
    <Form
      onSubmit={localOnSubmit}
      validate={(values: FormValues) => validateForm(values)}
      render={({ handleSubmit }) => (
        <form
          className="form"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <Field name="asset">
            {({ input, meta }) => (
              <Input
                type="text"
                placeholder="Search assets"
                size="medium"
                variant="icon"
                input={input}
                meta={meta}
                disabled={options.network !== 'MAINNET'}
              />
            )}
          </Field>

          {!isEmpty(list) ? (
            <>
              <ResultTitle>Search result</ResultTitle>

              <AssetList
                list={list}
                setActive={setActive}
                selectedList={selectedList}
              />

              <ButtonContainer fixedBottom mb={39}>
                <Button
                  type="submit"
                  variant="primary"
                  size="medium"
                  content="Add"
                  disabled={!selectedList.length}
                />
              </ButtonContainer>
            </>
          ) : null}
        </form>
      )}
    />
  );
};

export default SearchAsset;
