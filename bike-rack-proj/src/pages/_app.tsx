import Head from 'next/head';
import type { AppProps } from 'next/app';
import '../styles/globals.css'; // if you use global styles

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {process.env.NODE_ENV === 'development' && (
          <script src="http://localhost:8097" />
        )}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
