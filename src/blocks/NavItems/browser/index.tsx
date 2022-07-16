import isValidDomain from 'is-valid-domain';
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

import * as S from './styles';

const Browser = () => {
  const account = useActiveAccount();
  const [loaded, setLoaded] = useState(false);
  const [result, setResult] = useState<'valid' | 'invalid' | 'empty'>(
    'empty',
  );
  const [url, setUrl] = useState('');
  const iframe = useRef();
  const [openConnect, setOpenConnect] = useState(false);
  const [openApprove, setOpenApprove] = useState(false);
  const [event, setEvent] = useState(null);

  const handler = (e) => {
    if (e.data.type === 'RABET/CONNECT') {
      setEvent(e);
      setOpenConnect(true);
    }

    if (e.data.type === 'RABET/SIGN') {
      setEvent(e);
      setOpenApprove(true);
    }
  };

  useEffect(() => {
    // if (!loaded && result === 'valid') {
    //   setTimeout(() => {
    //     setResult('invalid');
    //   }, 2000);
    // }
  }, [loaded]);

  useEffect(() => {
    window.addEventListener('message', handler);

    return () => {
      window.removeEventListener('message', handler);
    };
  });

  const handleLoad = () => {
    setLoaded(true);

    iframe.current.contentWindow.postMessage(installRabet, url);
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

    if (!url.includes('http') && isValidDomain(url)) {
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
    event.source.postMessage(
      {
        type: 'RABET/SIGN/RESPONSE',
        message: {
          sign: event.data.message.xdr.toLowerCase(),
          network: event.data.message.network,
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

  return (
    <>
      <form onSubmit={handleSubmit}>
        <S.InputBox>
          <S.Label>
            <S.InputSearch
              autoComplete="off"
              autoFocus="off"
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
          onCancel={onApproveClose}
          onConfirm={onApproveConfirm}
        />
      </BottomSheet>
    </>
  );
};

export default Browser;
