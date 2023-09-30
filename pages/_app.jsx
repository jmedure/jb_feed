import Layout from '../components/Layout';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';
import '../styles/globals.css';
import '../styles/fonts.css';
import '@marketsystems/nextjs13-appdir-breadcrumbs/dist/styles.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Analytics />
      <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
      <Script
        async
        src="https://scripts.simpleanalyticscdn.com/auto-events.js"
      />
    </Layout>
  );
}

export default MyApp;
