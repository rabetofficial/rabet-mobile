import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { useRouter } from 'next/router';
import { useTransition, animated } from '@react-spring/web';

import 'react-slideshow-image/dist/styles.css';
import 'tippy.js/dist/svg-arrow.css';
import 'tippy.js/animations/scale.css';
import 'tippy.js/animations/shift-away.css';
import 'react-spring-bottom-sheet/dist/style.css';
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

  const transitions = useTransition(items, {
    keys: (item) => item.id,
    from: { opacity: 0 },
    initial: { opacity: 0 },
    enter: { opacity: 1, position: 'relative' },
    leave: { opacity: 0, position: 'absolute' },
    config: { duration: 150 },
  });

  return (
    <ThemeProvider theme={theme}>
      <Global theme={theme} />
      <Provider store={store}>
        {transitions(
          (
            props,
            {
              pageProps: animatedPageProps,
              Component: AnimatedComponent,
            },
          ) => (
            <animated.div
              style={{
                // ...props,
                width: '100%',
                height: '100%',
                overflow: 'hidden',
              }}
            >
              <AnimatedComponent {...animatedPageProps} />
            </animated.div>
          ),
        )}
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
