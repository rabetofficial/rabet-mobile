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
    <Html lang="en">
      <Head>
        <title>Rabet</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta name="application-name" content="Rabet" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="default"
        />
        <meta name="apple-mobile-web-app-title" content="Rabet" />
        <meta
          name="description"
          content="Rabet, an open-source wallet for Stellar"
        />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#000000" />
        <meta name="twitter:card" content="Rabet" />
        <meta name="twitter:url" content="https://rabet.io" />
        <meta name="twitter:title" content="Rabet" />
        <meta
          name="twitter:description"
          content="Rabet is an open source wallet for Stellar"
        />
        <meta name="twitter:creator" content="@rabetofficial" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Rabet" />
        <meta
          property="og:description"
          content="Rabet is an open source wallet for Stellar"
        />
        <meta property="og:site_name" content="Rabet" />
        <meta property="og:url" content="https://rabet.io" />

        <link
          rel="apple-touch-icon"
          href="/public/images/logo/iOS/icon-32.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/public/images/logo/iOS/icon-152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="167x167"
          href="/public/images/logo/iOS/icon-167.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/public/images/logo/iOS/icon-180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/public/images/favicon.ico"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/public/images/favicon.ico"
        />
        <link
          rel="mask-icon"
          href="/icons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        {/* <meta
          name="twitter:image"
          content="https://yourdomain.com/icons/android-chrome-192x192.png"
        />
        <meta
          property="og:image"
          content="https://yourdomain.com/icons/apple-touch-icon.png"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_2048.png"
          sizes="2048x2732"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_1668.png"
          sizes="1668x2224"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_1536.png"
          sizes="1536x2048"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_1125.png"
          sizes="1125x2436"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_1242.png"
          sizes="1242x2208"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_750.png"
          sizes="750x1334"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_640.png"
          sizes="640x1136"
        /> */}
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
