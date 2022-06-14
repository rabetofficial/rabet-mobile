import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

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
  return (
    <ThemeProvider theme={theme}>
      <Global theme={theme} />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
