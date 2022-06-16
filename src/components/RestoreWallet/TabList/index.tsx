import React from 'react';

import Tabs from 'components/common/Tabs';
import { Tab } from 'models';
import PrivateKey, { FormValues } from 'components/PrivateKey';
import ImportBackupFile from './ImportBackupFile';

type TabListProps = {
  onSubmitPrivateKey: (v: FormValues) => Promise<Partial<FormValues>>;
  onSubmitBackup: () => void;
};

const TabList = ({
  onSubmitBackup,
  onSubmitPrivateKey,
}: TabListProps) => {
  const tabs: Tab[] = [
    {
      id: '1',
      title: 'Private key',
      content: <PrivateKey onSubmit={onSubmitPrivateKey} />,
    },
    {
      id: '2',
      title: 'Backup file',
      content: <ImportBackupFile onSubmit={onSubmitBackup} />,
    },
  ];

  return <Tabs data={tabs} isEqualWidth />;
};

export default TabList;
