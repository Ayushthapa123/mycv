import '../css/globals.css';
import '../css/nav.css';
import '../css/index.css';

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
