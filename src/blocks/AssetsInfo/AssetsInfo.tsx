import React from 'react';
import { Horizon } from 'stellar-sdk';

import BN from 'helpers/BN';
import shorter from 'utils/shorter';
import ShareArrow from 'svgs/ShareArrow';
import xlmLogo from 'public/images/xlm-logo.svg';
import Button from 'components/common/Button';
import formatBalance from 'utils/formatBalance';
import CopyText from 'components/common/CopyText';
import accountLink from 'utils/horizon/accountLink';
import addAssetAction from 'actions/operations/addAsset';
import ButtonContainer from 'components/common/ButtonContainer';
import Card from 'components/common/Card';

import * as S from './styles';
import useAssetInfo from './useAssetInfo';

type AssetType = {
  isNative?: boolean;
  onDelete: (result: [boolean, string]) => void;
  children?: React.ReactNode;
  asset?: Horizon.BalanceLine;
  onBeforeDelete: () => void;
};

const AssetInfo = ({
  isNative,
  asset,
  onDelete,
  children,
  onBeforeDelete,
}: AssetType) => {
  const { loading, error, assetData } = useAssetInfo(asset);

  const handleDelete = () => {
    if (
      asset.asset_type === 'credit_alphanum4' ||
      asset.asset_type === 'credit_alphanum12'
    ) {
      onBeforeDelete();

      addAssetAction(asset.asset_code, asset.asset_issuer, '0').then(
        (result) => {
          onDelete(result);
        },
      );
    }
  };

  const HandleDomain = () => {
    if (loading) {
      return <S.Info>Loading</S.Info>;
    }

    if (error) {
      return <S.Info>Error</S.Info>;
    }

    if (!assetData?.home_domain) {
      return <S.Info>No home domain</S.Info>;
    }

    return (
      <a
        href={`https://${assetData?.home_domain}`}
        target="_blank"
        rel="noreferrer"
        style={{ color: 'black' }}
      >
        {assetData?.home_domain}
      </a>
    );
  };

  const HandleIssuer = () => {
    if (loading) {
      return <S.Info>Loading</S.Info>;
    }

    return (
      <div className="inline-flex">
        <CopyText
          text={assetData?.asset_issuer || ''}
          custom={
            <S.Value>{shorter(assetData?.asset_issuer, 6)}</S.Value>
          }
        />

        <a
          href={accountLink(assetData?.asset_issuer)}
          target="_blank"
          rel="noreferrer"
          className="cursor-pointer"
        >
          <ShareArrow />
        </a>
      </div>
    );
  };

  const assetBalance = [
    {
      title: 'Balance',
      value: formatBalance(assetData?.balance) || 'LOADING',
    },
    {
      title: 'Selling liabilities',
      value: formatBalance(assetData?.selling_liabilities),
    },
    {
      title: 'Buying liabilities',
      value:
        formatBalance(assetData?.buying_liabilities) || 'LOADING',
    },
  ];

  const assetInfo = [
    {
      title: 'Assets code',
      value: assetData?.asset_code || 'LOADING',
    },
    {
      title: 'Issuer',
      value: <HandleIssuer />,
    },
    {
      title: 'Website',
      value: <HandleDomain />,
    },
  ];

  const nBalance = new BN(asset.balance);

  let nSL; // BigNumber for asset's selling liabilities
  let nBL; // BigNumber for assets's buying liabilities

  if (asset.asset_type === 'liquidity_pool_shares') {
    nSL = new BN('');
    nBL = new BN('');
  } else {
    nSL = new BN(asset.selling_liabilities);
    nBL = new BN(asset.buying_liabilities);
  }

  let isDeletable = false;
  let notDeletableReason = '';

  if (!nBalance.isEqualTo('0') || !nSL.plus(nBL).isEqualTo('0')) {
    isDeletable = true;
    notDeletableReason =
      'You cannot remove this asset unless the balance and liabilities are zero.';
  }

  if (isNative) {
    return (
      <S.Container>
        <div className="flex flex-col h-[490px]">
          {children}
          <S.Circle>
            <S.ImgContainer>
              <img src={xlmLogo.src} alt="xlm logo" />
            </S.ImgContainer>
          </S.Circle>
          <p className="text-base">
            <strong className="text-lg">XLM</strong> is the native
            currency of the network. An XLM is the only asset type
            that can be used on the Stellar network that doesn&apos;t
            require an issuer or a trustline. Any account can hold
            XLM. You can trade XLM for other assets in the network
          </p>
        </div>
      </S.Container>
    );
  }
  return (
    <>
      {children}
      <S.Page>
        <div>
          <S.Label>Your balance</S.Label>
          <Card type="secondary" className="px-[10px]">
            {assetBalance.map((item) => (
              <S.InfoContainer key={item.title}>
                <S.Title>{item.title}</S.Title>
                <S.Value>{item.value}</S.Value>
              </S.InfoContainer>
            ))}
          </Card>
        </div>

        <div>
          <S.Label>Asset info</S.Label>
          <Card type="secondary" className="px-[10px]">
            {assetInfo.map((item) => (
              <S.InfoContainer key={item.title}>
                <S.Title>{item.title}</S.Title>
                <S.Value>{item.value}</S.Value>
              </S.InfoContainer>
            ))}
          </Card>
        </div>

        {isDeletable ? (
          <S.ErrorBox className="text-error">
            {notDeletableReason}
          </S.ErrorBox>
        ) : (
          ''
        )}
      </S.Page>
      <ButtonContainer fixedBottom mb={39}>
        <Button
          type="button"
          variant="danger-fill"
          size="medium"
          content="Delete"
          disabled={isDeletable}
          onClick={handleDelete}
        />
      </ButtonContainer>
    </>
  );
};

AssetInfo.defaultProps = {
  children: '',
  isNative: false,
  asset: {
    asset_code: 'ABCD',
    asset_issuer: 'ABCDEFG',
    asset_type: 'credit_alphanum4',
    balance: '0.11234',
  },
};

export default AssetInfo;
