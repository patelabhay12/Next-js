import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      {/* <h1>Hello how Are U </h1> */}
      <Navbar />
      < Component {...pageProps} />
      <Footer />
    </>
  )

}