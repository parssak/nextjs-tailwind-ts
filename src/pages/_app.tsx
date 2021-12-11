import Head from 'next/head'
import { AppProps } from 'next/app'
import '../styles/index.css'
import Nav from '../components/layout/Nav'
import Footer from '../components/layout/Footer'

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