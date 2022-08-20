import React from 'react';

import { Usage } from 'models';

import Phone from 'svgs/Phone';
import Upload from 'svgs/Upload';
import AddPlus from 'svgs/AddPlus';
import logo from 'public/images/rectangle-logo.png';
import Expand from 'svgs/ExpandHorizontal';

import * as S from './styles';

type ListProps = {
  id: string;
  margin: string;
  icon: React.ReactNode;
  description: React.ReactNode;
};

type AddToHomeProps = {
  usage: Usage;
};

const AddToHome = ({ usage }: AddToHomeProps) => {
  const List: ListProps[] = [
    {
      id: '1',
      margin: 'ml-[29px]',
      icon:
        usage === 'ios' ? (
          <Upload />
        ) : (
          <S.Rotate>
            <Expand />
          </S.Rotate>
        ),
      description: (
        <span>
          Click the <b>“{usage === 'ios' ? 'Share' : 'More'}”</b>
          button in the bottom bar.
        </span>
      ),
    },
    {
      id: '2',
      margin: 'ml-[27px]',
      icon: usage === 'ios' ? <AddPlus /> : <Phone />,
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
    </div>
  );
};

export default AddToHome;
