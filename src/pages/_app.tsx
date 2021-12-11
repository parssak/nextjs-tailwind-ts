import Head from 'next/head'
import { AppProps } from 'next/app'
import 'styles/index.css'
import Footer from 'components/layout/Footer'
import Nav from 'components/layout/Nav'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NextJS TW</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp