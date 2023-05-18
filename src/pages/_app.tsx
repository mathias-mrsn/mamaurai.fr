import { Cursor } from '@/layouts/cursor'
import { WelcomeAnimation } from '@/layouts/welcomeAnimation'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
    return (
    <>
        <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"/>
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"  rel="stylesheet"/>
        </Head>
        {/* <WelcomeAnimation /> TODO: Uncomment this */}
        {/* <Cursor> */}
            <Component {...pageProps} />
        {/* </Cursor> */}
    </>
    )
}
