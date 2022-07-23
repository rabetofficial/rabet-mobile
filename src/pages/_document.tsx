import { useEffect } from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js', {
        scope: '/',
      });
    }
  }, []);

  return (
    <Html>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
