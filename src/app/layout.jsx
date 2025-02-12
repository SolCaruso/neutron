// Layout.jsx
import '@/styles/tailwind.css'
import DigitalBackground from '@/components/DigitalBackground'
import MobileLogo from '@/components/logos/MobileLogo'
import NoiseOverlay from '@/components/NoiseOverlay'
import '@/styles/tailwind.css'
import { Montserrat, Inter } from 'next/font/google'
import localFont from 'next/font/local'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100','200','300','400','500','600','700','800','900'],
  style: ['normal','italic'],
  variable: '--font-montserrat',
  display: 'swap',
})

const geistMono = localFont({
  src: [
    { path: '../fonts/GeistMono-VariableFont_wght.ttf', weight: '400', style: 'normal' },
  ],
  variable: '--font-geist-mono',
  display: 'swap',
})

export const metadata = {
  title: {
    template: 'Neutron Controls',
    default: 'Test Your Strength',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${geistMono.variable}`}>
      <head>
      </head>

      <body className="relative">
        <DigitalBackground />
        <MobileLogo className="hidden 2sm:block absolute top-24 left-6 -z-10 w-[550px] text-white/40"/>
        <NoiseOverlay />

        {/* Overlay above background but behind content */}
        <div className="absolute inset-0 bg-white/40 pointer-events-none -z-15 backdrop-blur-3xl" />
        
        {/* Actual content */}
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  )
}