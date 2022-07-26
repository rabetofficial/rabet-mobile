import React from 'react';
import { useRouter } from 'next/router';

import { Tab } from 'models';
import timeout from 'utils/timeout';
import RouteName from 'staticRes/routes';
import Tabs from 'components/common/Tabs';
import addAssetAction from 'actions/operations/addAsset';
import { AssetImageWithActive } from 'reducers/assetImages';
import addMultipleAssets from 'actions/operations/addMultipleAssets';

import SearchAsset from './SearchAsset';
import CustomAsset, { FormValues } from './CustomAsset';

type AddAssetType = {
  children?: React.ReactNode;
};

const AddAsset = ({ children }: AddAssetType) => {
  const router = useRouter();

  const handleCustomAssetSubmitBtn = async (values: FormValues) => {
    await timeout(200);

    router.push(RouteName.LoadingNetwork);

    const [isSuccessful, message] = await addAssetAction(
      values.code,
      values.issuer,
      values.limit,
    );

    await timeout(100);

    if (isSuccessful) {
      router.push({
        pathname: RouteName.Success,
        query: {
          message,
        },
      });
    } else {
      router.push({
        pathname: RouteName.Error,
        query: {
          message,
        },
      });
    }

    return values;
  };

  const handleSearchAssetSubmitBtn = async (
    assets: AssetImageWithActive[],
  ) => {
    router.push(RouteName.LoadingNetwork);

    const result = await addMultipleAssets(assets);

    const isSuccessful = result[0];
    const message = result[1];

    if (isSuccessful) {
      router.push({
        pathname: RouteName.Success,
        query: {
          message,
        },
      });
    } else {
      router.push({
        pathname: RouteName.Error,
        query: {
          message,
        },
      });
    }
  };

  const handleCancel = () => {
    router.push(RouteName.Home);
  };

  const tabs: Tab[] = [
    {
      id: '1',
      title: 'Search',
      content: (
        <SearchAsset
          key="searchAsset"
          onSubmit={handleSearchAssetSubmitBtn}
          onCancel={handleCancel}
        />
      ),
    },
    {
      id: '2',
      title: 'Custom Asset',
      content: (
        <CustomAsset
          key="customAsset"
          onSubmit={handleCustomAssetSubmitBtn}
          onCancel={handleCancel}
        />
      ),
    },
  ];

  return (
    <div className="mt-[-1px]">
      {children}

      <Tabs
        data={tabs}
        isEqualWidth
        contentStyle={{
          padding: '32px 16px 0 16px',
        }}
      />
    </div>
  );
};

AddAsset.defaultProps = {
  children: '',
};

export default AddAsset;
