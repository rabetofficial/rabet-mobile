import {
  Memo as M,
  MemoType as MT,
  Networks,
  Operation as O,
  Transaction as Tx,
  xdr,
} from 'stellar-sdk';
import React, { useEffect, useRef, useState } from 'react';

import World from 'svgs/LargeWorld';
import Layout from 'components/common/Layouts/BaseLayout';

import NoData from 'components/common/NoData';
import BottomSheet from 'components/common/BottomSheet';
import installRabet from 'actions/interactions/install';
import ConnectRequest from 'blocks/ConnectRequest';
import ApproveTransaction from 'blocks/ApproveTransaction';
import useActiveAccount from 'hooks/useActiveAccount';
import addConnectedWebsite from 'actions/accounts/addConnectedWebsite';

import useTypedSelector from 'hooks/useTypedSelector';
import signEnvelope from 'helpers/signEnvelope';
import * as S from './styles';

export type ApproveTransactionState = {
  network?: string;
  origin?: string;
  transaction?: Tx<M<MT>, O[]>;
};

const Browser = () => {
  const account = useActiveAccount();
  const [user, options] = useTypedSelector((store) => [
    store.user,
    store.options,
  ]);

  const [at, setAT] = useState<ApproveTransactionState>({});
  const [loaded, setLoaded] = useState(false);
  const [result, setResult] = useState<'valid' | 'invalid' | 'empty'>(
    'empty',
  );
  const [url, setUrl] = useState('');
  const iframe = useRef();
  const [openConnect, setOpenConnect] = useState(false);
  const [openApprove, setOpenApprove] = useState(false);
  const [event, setEvent] = useState(null);

  const handleLoad = () => {
    setLoaded(true);

    iframe.current.contentWindow.postMessage(installRabet, url);

    setTimeout(() => {
      iframe.current.contentWindow.postMessage(installRabet, url);
    }, 150);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.target.search.blur();
    setLoaded(false);

    let { value: url } = e.target.search;

    if (!url) {
      setResult('empty');

      return;
    }

    if (!url.includes('http')) {
      url = `https://${url}`;
    }

    try {
      new URL(url);
      setResult('valid');
      setUrl(url);
    } catch (_) {
      setResult('invalid');
    }
  };

  const onConnectConfirm = () => {
    event.source.postMessage(
      {
        type: 'RABET/CONNECT/RESPONSE',
        message: {
          publicKey: account.publicKey,
        },
      },
      event.origin,
    );

    const { hostname } = new URL(event.origin);

    addConnectedWebsite({
      host: hostname,
      publicKey: account.publicKey,
    });

    setOpenConnect(false);
  };

  const onConnectClose = () => {
    event.source.postMessage(
      {
        type: 'RABET/CONNECT/RESPONSE',
        message: {
          error: 'user-rejected',
        },
      },
      event.origin,
    );

    setOpenConnect(false);
  };

  const onApproveConfirm = () => {
    const signed = signEnvelope(
      event?.data.message.xdr,
      event?.data.message.network,
      account.privateKey,
    );

    event.source.postMessage(
      {
        type: 'RABET/SIGN/RESPONSE',
        message: {
          sign: signed,
        },
      },
      event.origin,
    );

    setOpenApprove(false);
  };

  const onApproveClose = () => {
    event.source.postMessage(
      {
        type: 'RABET/SIGN/RESPONSE',
        message: {
          error: 'user-rejected',
        },
      },
      event.origin,
    );

    setOpenApprove(false);
  };

  const handler = (e) => {
    if (e?.data?.type === 'RABET/CONNECT') {
      setEvent(e);

      if (options.privacyMode) {
        if (
          user.connectedWebsites.includes(
            `${new URL(e.origin).host}/${account.publicKey}`,
          )
        ) {
          e.source.postMessage(
            {
              type: 'RABET/CONNECT/RESPONSE',
              message: {
                publicKey: account.publicKey,
              },
            },
            e.origin,
          );
        } else {
          setOpenConnect(true);
        }
      } else {
        e.source.postMessage(
          {
            type: 'RABET/CONNECT/RESPONSE',
            message: {
              publicKey: account.publicKey,
            },
          },
          e.origin,
        );
      }
    }

    if (e.data.type === 'RABET/SIGN') {
      if (!e.data.message.xdr || !e.data.message.network) {
        e.source.postMessage(
          {
            type: 'RABET/SIGN/RESPONSE',
            message: {
              error: 'invalid-input',
            },
          },
          e.origin,
        );
      }

      try {
        const xte = xdr.TransactionEnvelope.fromXDR(
          e.data.message.xdr,
          'base64',
        );
        const transaction = new Tx(xte, Networks.PUBLIC);

        setAT({
          transaction,
          origin: e.origin,
          network: e.data.message.network,
        });
      } catch (err) {
        setAT({
          origin: e.origin,
        });
      }

      setEvent(e);

      setOpenApprove(true);
    }
  };

  useEffect(() => {
    window.addEventListener('message', handler);

    return () => {
      window.removeEventListener('message', handler);
    };
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit} maximum-scale={1}>
        <S.InputBox>
          <S.Label>
            <S.InputSearch
              autoComplete="off"
              name="search"
              type="text"
              enterKeyHint="go"
              placeholder="Search or enter website url"
            />
          </S.Label>
        </S.InputBox>
      </form>

      <Layout>
        <S.Text>
          {result === 'empty' ? (
            <>
              <World />
              <p>
                Type a URL or search to access your favorite stellar
                apps
              </p>
            </>
          ) : (
            ''
          )}
        </S.Text>

        <div>
          {result === 'invalid' ? (
            <S.Text>
              <NoData msg="Invalid URL" />
            </S.Text>
          ) : (
            ''
          )}

          {result === 'valid' ? (
            <S.FrameParent>
              <S.IframeContainer
                height={document.documentElement.clientHeight - 131}
                ref={iframe}
                title={url}
                src={url}
                onLoad={handleLoad}
                style={{
                  display: loaded ? 'block' : 'none',
                }}
                frameborder="0"
              >
                {!loaded ? <S.Loading>Loading</S.Loading> : ''}
              </S.IframeContainer>
            </S.FrameParent>
          ) : (
            ''
          )}
        </div>
      </Layout>

      <BottomSheet
        isOpen={openConnect}
        setOpen={setOpenConnect}
        height={504}
      >
        <ConnectRequest
          origin={event?.origin}
          account={account}
          onCancel={onConnectClose}
          onConfirm={onConnectConfirm}
        />
      </BottomSheet>

      <BottomSheet
        isOpen={openApprove}
        setOpen={setOpenApprove}
        height={727}
        isDark
      >
        <ApproveTransaction
          data={at}
          onCancel={onApproveClose}
          onConfirm={onApproveConfirm}
        />
      </BottomSheet>
    </>
  );
};

export default Browser;
