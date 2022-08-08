import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-us">
        <Head>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <link rel="shortcut icon" type="image/png" href="logo.png" />
            <meta name="robots" content="index, follow" />
            <link rel="stylesheet" href="https://use.typekit.net/wzt4vsj.css" />
            <link rel="preload" href="/fonts/cardinalfruit-italic.otf" as="font" type="font/otf" crossOrigin="anonymous"/>
            <link rel="preload" href="/fonts/cardinalfruit-regular.otf" as="font" type="font/otf" crossOrigin="anonymous"/>
            <link rel="preload" href="/fonts/PPNeueMontreal-Book.otf" as="font" type="font/otf" crossOrigin="anonymous"/>
            <link rel="preload" href="/fonts/PPNeueMontreal-Italic.otf" as="font" type="font/otf" crossOrigin="anonymous"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument