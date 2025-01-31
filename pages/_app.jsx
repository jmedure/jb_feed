import Layout from '../components/Layout';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';
import '../styles/globals.css';
import '../styles/fonts.css';
import '@marketsystems/nextjs13-appdir-breadcrumbs/dist/styles.css';
import { TypewriterProvider } from '../contexts/TypewriterContext';
import { ThemeProvider } from 'next-themes';
import { useEffect } from 'react';
import { useTheme } from 'next-themes';

// function ThemeHandler({ children }) {
//   const { setTheme, resolvedTheme } = useTheme();

//   useEffect(() => {
//     const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
//     const handleChange = () => {
//       const newTheme = mediaQuery.matches ? 'dark' : 'light';
//       if (resolvedTheme !== newTheme) {
//         setTheme(newTheme);
//       }
//     };

//     mediaQuery.addEventListener('change', handleChange);
//     handleChange(); // Set initial theme
//     return () => mediaQuery.removeEventListener('change', handleChange);
//   }, [setTheme, resolvedTheme]);

//   return <>{children}</>;
// }

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" enableSystem={true} defaultTheme="system">
      {/* <ThemeHandler> */}
      <TypewriterProvider>
        <Layout>
          <Component {...pageProps} />
          <Analytics />
          <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
          <Script
            async
            src="https://scripts.simpleanalyticscdn.com/auto-events.js"
          />
        </Layout>
      </TypewriterProvider>
      {/* </ThemeHandler> */}
    </ThemeProvider>
  );
}

export default MyApp;
