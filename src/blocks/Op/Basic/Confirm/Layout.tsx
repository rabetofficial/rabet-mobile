import React from 'react';
// import { useNavigate } from 'react-router-dom';

import { Usage } from 'models';
import maxText from 'utils/maxText';
import RouteName from 'staticRes/routes';
import Button from 'components/common/Button';
import CopyText from 'components/common/CopyText';
import useActiveAccount from 'hooks/useActiveAccount';
import ButtonContainer from 'components/common/ButtonContainer';

import * as S from './styles';

type AppProps = {
  className?: string;
  handleClick: () => void;
  children: React.ReactNode;
};

const BasicConfirmLayout = ({
  children,
  className,
  handleClick,
}: AppProps) => {
  // const navigate = useNavigate();
  const { name, publicKey } = useActiveAccount();

  const handleCancel = () => {
    // if (usage === 'desktop') {
    //   closeModalAction();
    // } else {
    //   navigate(RouteName.Home, {
    //     state: {
    //       alreadyLoaded: true,
    //     },
    //   });
    // }
  };

  return (
    <div className={className}>
      <S.Account>
        <S.AccountTitle>Source account:</S.AccountTitle>
        <div className="font-medium">
          <CopyText
            text={publicKey}
            custom={<span>{maxText(name, 12)}</span>}
          />
        </div>
      </S.Account>

      {children}

      <ButtonContainer fixedBottom mb={32}>
        <Button
          type="button"
          variant="primary"
          size="medium"
          content="Confirm"
          onClick={handleClick}
        />
      </ButtonContainer>
    </div>
  );
};

BasicConfirmLayout.defaultProps = {
  className: '',
};

export default BasicConfirmLayout;
