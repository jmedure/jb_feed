import Layout from '../components/Layout'
import '../styles/globals.css'
import '../styles/fonts.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import Script from "next/script";
// import 'nextjs-breadcrumbs/dist/index.css';

function MyApp({ Component, pageProps,}) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Script src="https://scripts.simpleanalyticscdn.com/latest.js"  />
    </Layout>
  )
}

export default MyApp
