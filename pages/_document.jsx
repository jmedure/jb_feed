import Document, { Html, Head, Main, NextScript } from 'next/document';
// import Script from 'next/script'

class MyDocument extends Document {
  render() {
    return (
      <Html
        lang="en-us"
        className="scroll-smooth font-mont font-light scroll-pt-44"
      >
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link rel="shortcut icon" type="image/png" href="logo.png" />
          <meta name="robots" content="index, follow" />
          <link rel="stylesheet" href="https://use.typekit.net/wzt4vsj.css" />
          <link
            rel="preload"
            href="/fonts/cardinalfruit-italic.otf"
            as="font"
            type="font/otf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/cardinalfruit-regular.otf"
            as="font"
            type="font/otf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/PPNeueMontreal-Book.otf"
            as="font"
            type="font/otf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/PPNeueMontreal-Italic.otf"
            as="font"
            type="font/otf"
            crossOrigin="anonymous"
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* <Script
            src="https://scripts.simpleanalyticscdn.com/latest.js"
            strategy="afterInteractive"
          /> */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
