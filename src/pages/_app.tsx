import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider, UniversalUIConfigProvider } from "@parssa/universal-ui";
import "styles/index.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NextJS TW</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="color-scheme" content="light dark" />
      </Head>
      <UniversalUIConfigProvider config={{ components: {} }}>
        <div className="min-h-screen bg-theme-pure">
          <Component {...pageProps} />
        </div>
      </UniversalUIConfigProvider>
    </>
  );
}

export default MyApp;
