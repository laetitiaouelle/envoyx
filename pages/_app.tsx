import { DashboardRouterProvider } from '../src/context/DashboardRouterContext'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Lato } from 'next/font/google'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { ClinicDashboardRouterProvider } from '../src/context/ClinicDashboardRouterContext'

const lato = Lato({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100','300','400','700'],
  variable: '--font-lato',
})

export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
   AOS.init({
    duration:800,
    once: false
   })
  }, [])
  
  return (
    <main  className={`${lato.variable} bg-[#fff]`}>
      <DashboardRouterProvider>
        <ClinicDashboardRouterProvider>
          <Component  {...pageProps} />
        </ClinicDashboardRouterProvider>
      </DashboardRouterProvider>
      
    </main>
  )
}