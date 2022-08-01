import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { useRouter } from 'next/router';

import { Page } from 'models';
import theme from 'styles/theme';
import Global from 'styles/global';
import pages from 'staticRes/exitPages';
import ExtTitle from 'components/common/ExitTitle';
import RoutesManager from 'components/RoutesManager';
import Opening from 'components/Opening';
import SpringLoad from 'components/common/SpringLoad';

import 'react-slideshow-image/dist/styles.css';
import 'tippy.js/dist/svg-arrow.css';
import 'tippy.js/animations/scale.css';
import 'tippy.js/animations/shift-away.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'styles/global.css';
import 'styles/font.css';

import store from '../store';

function MyApp({ Component, pageProps }: AppProps) {
  const [opening, setOpening] = useState(true);
  const router = useRouter();

  const [page, setPage] = useState<Page | undefined>(undefined);

  useEffect(() => {
    const findPage = pages.find((p) => p.route === router.pathname);

    setPage(findPage);
  }, [router]);

  useEffect(() => {
    setTimeout(() => {
      setOpening(false);
    }, 1700);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Global theme={theme} />
      {opening ? <Opening /> : ''}
      <Provider store={store}>
        <RoutesManager pageProps={pageProps}>
          <div
            className="page-transition-wrapper"
            style={{ display: opening ? 'none' : 'block' }}
          >
            {router.pathname === '/home' ? (
              <Component {...pageProps} />
            ) : (
              <>
                {page && (
                  <ExtTitle
                    title={page.title}
                    borderless={page.borderless}
                  />
                )}
                <SpringLoad>
                  <Component {...pageProps} />
                </SpringLoad>
              </>
            )}
          </div>
        </RoutesManager>
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
