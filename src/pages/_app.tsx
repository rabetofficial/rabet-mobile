import { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { useRouter, NextRouter } from 'next/router';
import { animated, Transition } from 'react-spring';

import RouteName from 'staticRes/routes';
import ExtTitle from 'components/common/ExitTitle';
import 'react-slideshow-image/dist/styles.css';
import 'tippy.js/dist/svg-arrow.css';
import 'tippy.js/animations/scale.css';
import 'tippy.js/animations/shift-away.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'styles/global.css';
import 'styles/font.css';
import theme from 'styles/theme';
import Global from 'styles/global';

import store from '../store';

type Page = {
  route: string;
  title: string;
  borderless?: boolean;
};

const pages: Page[] = [
  { route: RouteName.Send, title: 'Send' },
  { route: RouteName.About, title: 'About' },
  { route: RouteName.Backup, title: 'Backup' },
  { route: RouteName.Receive, title: 'Receive' },
  { route: RouteName.Contacts, title: 'Contacts' },
  { route: RouteName.AddAsset, title: 'AddAsset' },
  { route: RouteName.EditName, title: 'Edit name' },
  { route: RouteName.General, title: 'General settings' },
  { route: RouteName.CreateWallet, title: 'Create Wallet' },
  { route: RouteName.Swap, title: 'Swap', borderless: true },
  { route: RouteName.RestoreWallet, title: 'Import wallet' },
  { route: RouteName.PrivateKey, title: 'Show private key' },
  { route: RouteName.WalletOption, title: 'Show Private key' },
  { route: RouteName.ChangePassword, title: 'Change Password' },
  { route: RouteName.ConnectedWebsites, title: 'Connected websites' },
  { route: RouteName.BasicSendConfirm, title: 'Confirm send' },
  { route: RouteName.BasicSwapConfirm, title: 'Confirm swap' },
];

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const items = [
    {
      id: router.route,
      Component,
      pageProps,
    },
  ];

  const getPathDepth = (location: NextRouter) => {
    let pathArr = location.pathname.split('/');
    pathArr = pathArr.filter((n) => n !== '');
    return pathArr.length;
  };

  const [page, setPage] = useState<Page | undefined>(undefined);
  useEffect(() => {
    const findPage = pages.find((p) => p.route === router.pathname);
    setPage(findPage);
  }, [router]);

  return (
    <ThemeProvider theme={theme}>
      <Global theme={theme} />
      <Provider store={store}>
        <div className="page-transition-wrapper">
          <Transition
            items={items}
            keys={(item: any) => item.id}
            from={{
              opacity: 0,
              transform:
                page && getPathDepth(router) <= 1
                  ? 'translateX(-100vw)'
                  : 'translateX(100vw)',
            }}
            enter={{
              opacity: 1,
              transform: 'translateX(0)',
            }}
            leave={{
              opacity: 0,
              transform:
                page && getPathDepth(router) <= 1
                  ? 'translateX(20vw)'
                  : 'translateX(-20vw)',
              position: 'absolute',
              inset: '0',
            }}
          >
            {(
              styles,
              {
                pageProps: animatedPageProps,
                Component: AnimatedComponent,
              },
            ) => (
              <animated.div
                className="page-transition-container"
                style={{ ...styles }}
              >
                <>
                  {page && (
                    <ExtTitle
                      title={page.title}
                      borderless={page.borderless}
                    />
                  )}
                  <AnimatedComponent {...animatedPageProps} />
                </>
              </animated.div>
            )}
          </Transition>
        </div>
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
