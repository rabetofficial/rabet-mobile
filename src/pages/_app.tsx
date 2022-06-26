import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { useRouter } from 'next/router';
import { animated, Transition } from 'react-spring';

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

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const items = [
    {
      id: router.route,
      Component,
      pageProps,
    },
  ];

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
              transform: 'translateX(100vw)',
            }}
            enter={{
              opacity: 1,
              transform: 'translateX(0)',
            }}
            leave={{
              opacity: 0,
              transform: 'translateX(-20vw)',
              position: 'absolute',
              inset: '0',
            }}
            onRest={() => window.scrollTo(0, 0)}
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
                <AnimatedComponent {...animatedPageProps} />
              </animated.div>
            )}
          </Transition>
        </div>
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
