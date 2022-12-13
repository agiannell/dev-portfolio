import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Favicon } from 'components'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Anthony Giannell</title>
        <Favicon />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}
