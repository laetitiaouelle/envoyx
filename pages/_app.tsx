import { DashboardRouterProvider } from '../src/context/DashboardRouterContext'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Lato } from 'next/font/google'

const lato = Lato({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100','300','400','700'],
  variable: '--font-lato',
})


export default function App({ Component, pageProps }: AppProps) {
  return <main  className={`${lato.variable} bg-[#fff] `}><DashboardRouterProvider><Component  {...pageProps} /></DashboardRouterProvider></main>
  
}
