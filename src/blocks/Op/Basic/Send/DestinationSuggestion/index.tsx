import React, { useState } from 'react';

import { Tab } from 'models';
import useTypedSelector from 'hooks/useTypedSelector';
import BottomSheet from 'components/common/BottomSheet';
import Layout from 'components/common/Layouts/BaseLayout';
import Accordion from 'components/common/Accordion';
import AccountList from './AccountList';

import * as S from './styles';

type DestinationProps = {
  handleChange: (publicKey: string, memo: string) => void;
  open: any;
  setOpen: any;
  input: any;
  meta: any;
};

const DestinationSuggest = ({
  handleChange,
  open,
  setOpen,
  input,
  meta,
}: DestinationProps) => {
  const [accounts, contacts] = useTypedSelector((store) => [
    store.accounts,
    store.contacts,
  ]);
  const [expanded, setExpanded] = useState<false | number>(0);

  const onChange = (publicKey: string, memo: string) => {
    handleChange(publicKey, memo);
  };

  const tabs: Tab[] = [
    {
      id: '1',
      title: 'My Accounts',
      content: (
        <AccountList
          purpose="suggestion"
          accounts={accounts}
          onChange={onChange}
          name="accounts"
        />
      ),
    },
    {
      id: '2',
      title: 'My Contacts',
      content: (
        <AccountList
          accounts={contacts}
          onChange={onChange}
          name="contacts"
        />
      ),
    },
  ];

  const isError = !meta.valid;

  return (
    <BottomSheet isOpen={open} setOpen={setOpen} height={550}>
      <Layout className="mt-4">
        <div className="flex flex-col">
          <label className="font-medium">Destination</label>
          <S.Textarea
            className="mt-[6px]"
            placeholder="Enter destination address"
            {...input}
          />
          {isError && (
            <div className="error">
              {meta.error || meta.submitError}
            </div>
          )}
        </div>
      </Layout>

      <hr className="mt-[31px] border-primary-lighter" />

      {tabs.map((tab, index) => (
        <div key={tab.id}>
          <Accordion
            index={index}
            expanded={expanded}
            setExpanded={setExpanded}
            data={tab}
          />
          {tabs.length - 1 !== index && (
            <hr className="border-primary-lighter" />
          )}
        </div>
      ))}
    </BottomSheet>
  );
};

export default DestinationSuggest;
