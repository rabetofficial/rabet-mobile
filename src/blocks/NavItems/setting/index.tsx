import React from 'react';
import { useRouter } from 'next/router';
import AngleRight from 'svgs/AngleRight';
import ExtTitle from 'components/common/ExitTitle';

// import About from './About';
// import Backup from './Backup';
// import General from './General';
// import Contacts from './Contacts';
// import ChangePassword from './ChangePassword';
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
      description: 'Currency conversion, Mode, Explorer',
      onClick: () => {
        router.push('settings/general');
      },
    },
    {
      id: '2',
      title: 'Change password',
      description: 'Change your wallet password',
      onClick: () => {
        router.push('settings/change-password');
      },
    },
    {
      id: '3',
      title: 'Backup',
      description: 'Get a backup of all your imported wallets',
      onClick: () => {
        router.push('settings/backup');
      },
    },
    {
      id: '4',
      title: 'Contacts',
      description: 'Add, edit, delete and manage your contacts',
      onClick: () => {
        router.push('settings/contacts');
      },
    },
    {
      id: '5',
      title: 'About',
      description: 'Version, Contact info, Community',
      onClick: () => {
        router.push('settings/about');
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
