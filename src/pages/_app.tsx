import Head from "next/head";
import { AppProps } from "next/app";
import "styles/index.css";
import { ThemeProvider, UniversalUIConfigProvider } from "@parssa/universal-ui";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NextJS TW</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="color-scheme" content="light dark" />
      </Head>
      <UniversalUIConfigProvider config={{ components: {}, ssr: true }}>
        <ThemeProvider className="min-h-screen bg-theme-pure">
          <Component {...pageProps} />
        </ThemeProvider>
      </UniversalUIConfigProvider>
    </>
  );
}

export default MyApp;
