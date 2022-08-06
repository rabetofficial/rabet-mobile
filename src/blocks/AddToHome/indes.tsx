import React from 'react';

import { useRouter } from 'next/router';
import RouteName from 'staticRes/routes';
import Button from 'components/common/Button';
import ButtonContainer from 'components/common/ButtonContainer';

import Upload from 'svgs/Upload';
import AddPlus from 'svgs/AddPlus';
import logo from 'public/images/rectangle-logo.png';

import * as S from './styles';

type ListProps = {
  id: string;
  margin: string;
  icon: React.ReactNode;
  description: React.ReactNode;
};

const AddToHome = () => {
  const router = useRouter();

  const handleClick = () => {
    // router.push(RouteName.Home);
  };

  const List: ListProps[] = [
    {
      id: '1',
      margin: 'ml-[29px]',
      icon: <Upload />,
      description: (
        <span>
          Click the <b>“Share”</b> button in the bottom bar.
        </span>
      ),
    },
    {
      id: '2',
      margin: 'ml-[27px]',
      icon: <AddPlus />,
      description: (
        <span>
          In the menu that opens at the bottom, select the
          <b className="ml-[3px]">“Add to Home Screen”</b> option.
        </span>
      ),
    },
    {
      id: '3',
      margin: 'ml-[23px]',
      icon: <S.Add>Add</S.Add>,
      description: (
        <span>
          In the next step, tap <b>“Add”</b> at the top.
        </span>
      ),
    },
  ];

  return (
    <div className="content">
      <S.TopContainer>
        <img src={logo.src} alt="logo" />
        <p>Add Rabet to your home screen</p>
      </S.TopContainer>

      <S.Hr />

      {List.map((listPg) => (
        <S.List listId={listPg.id}>
          <span>{listPg.icon}</span>
          <S.Item className={listPg.margin}>
            {listPg.id}- {listPg.description}
          </S.Item>
        </S.List>
      ))}

      <ButtonContainer fixedBottom mb={39}>
        <Button
          type="button"
          variant="primary"
          size="medium"
          content="Got it"
          onClick={handleClick}
        />
      </ButtonContainer>
    </div>
  );
};

export default AddToHome;
