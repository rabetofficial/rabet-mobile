import React from 'react';
import { useRouter } from 'next/router';

import AngleRight from 'svgs/AngleRight';
import RouteName from 'staticRes/routes';
import ExtTitle from 'components/common/ExitTitle';

import * as S from './styles';

type SettingPage = {
  id: string;
  title: string;
  description: string;
  onClick: () => void;
};

const Settings = () => {
  const router = useRouter();

  const settingList: SettingPage[] = [
    {
      id: '1',
      title: 'General',
      description: 'Currency conversion, Privacy mode, Explorer',
      onClick: () => {
        router.push(RouteName.GeneralSetting);
      },
    },
    {
      id: '2',
      title: 'Change password',
      description: 'Change your wallet password',
      onClick: () => {
        router.push(RouteName.ChangePasswordSetting);
      },
    },
    // {
    //   id: '3',
    //   title: 'Backup',
    //   description: 'Get a backup of all your imported wallets',
    //   onClick: () => {
    //     router.push(RouteName.BackupSetting);
    //   },
    // },
    {
      id: '4',
      title: 'Contacts',
      description: 'Add, edit, delete and manage your contacts',
      onClick: () => {
        router.push(RouteName.ContactsSetting);
      },
    },
    {
      id: '5',
      title: 'About',
      description: 'Version, Contact info, Community',
      onClick: () => {
        router.push(RouteName.AboutSetting);
      },
    },
  ];

  return (
    <>
      <ExtTitle title="Settings" backIcon={false} />

      {settingList.map((settingPg, index) => (
        <div key={`setting${settingPg.id}`}>
          <S.Container onClick={settingPg.onClick}>
            <S.TopContainer>
              <S.Title>{settingPg.title}</S.Title>
              <span>
                <AngleRight />
              </span>
            </S.TopContainer>

            <S.Description>{settingPg.description}</S.Description>
          </S.Container>

          {settingList.length !== index + 1 && <S.Hr />}
        </div>
      ))}
    </>
  );
};

export default Settings;
