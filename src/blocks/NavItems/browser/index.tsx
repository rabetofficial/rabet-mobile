import isValidDomain from 'is-valid-domain';
import React, { useEffect, useRef, useState } from 'react';

import World from 'svgs/LargeWorld';
import Layout from 'components/common/Layouts/BaseLayout';

import installRabet from 'actions/interactions/install';
import * as S from './styles';

const handler = (e) => {
  if (e.data.type === 'RABET/CONNECT') {
    e.source.postMessage(
      {
        type: 'RABET/CONNECT/RESPONSE',
        message: {
          publicKey: 'ABCDEFU',
        },
      },
      e.origin,
    );
  }

  if (e.data.type === 'RABET/SIGN') {
    e.source.postMessage(
      {
        type: 'RABET/SIGN/RESPONSE',
        message: {
          sign: e.data.message.xdr.toLowerCase(),
          network: e.data.message.network,
        },
      },
      e.origin,
    );
  }
};

const Browser = () => {
  const [loaded, setLoaded] = useState(false);
  const [result, setResult] = useState<'valid' | 'invalid' | 'empty'>(
    'empty',
  );
  const [url, setUrl] = useState('');
  const iframe = useRef();

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

  return (
    <>
      <form onSubmit={handleSubmit}>
        <S.InputBox>
          <S.Label>
            <S.InputSearch
              name="search"
              type="text"
              enterKeyHint="go"
              placeholder="Search or enter website url"
            />
          </S.Label>
        </S.InputBox>
      </form>

      <Layout>
        <S.NoData>
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
        </S.NoData>

        <div>
          {result === 'invalid' ? <p>Invalid URL</p> : ''}

          {result === 'valid' ? (
            <>
              <iframe
                ref={iframe}
                title={url}
                src={url}
                onLoad={handleLoad}
                style={{
                  display: loaded ? 'block' : 'none',
                  width: '100%',
                  height: '80vh',
                  marginTop: '-100px',
                }}
              />

              {!loaded ? <p>Loading</p> : ''}
            </>
          ) : (
            ''
          )}
        </div>
      </Layout>
    </>
  );
};

export default Browser;
