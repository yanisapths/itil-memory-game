import Head from 'next/head'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>⚡JUST REMEMBER</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Script src="/script/snow.js" defer />
    <Component {...pageProps} />
  </>
}
