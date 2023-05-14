import { Cursor } from '@/layouts/cursor'
import { WelcomeAnimation } from '@/layouts/welcomeAnimation'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
    return (
    <>
        <WelcomeAnimation />
        <Cursor>
            <Component {...pageProps} />
        </Cursor>
    </>
    )
}
