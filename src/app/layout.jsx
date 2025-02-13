// Layout.jsx
import '@/styles/tailwind.css'
import DigitalBackground from '@/components/DigitalBackground'
import NoiseOverlay from '@/components/NoiseOverlay'
import '@/styles/tailwind.css'
import { Montserrat } from 'next/font/google'
import localFont from 'next/font/local'
import Footer from '@/components/Footer'
import Nav from '@/components/nav/Nav';
import BackgroundHero from '@/components/BackgroundHero'

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
      <body className="relative z-10">
          <DigitalBackground />
          <NoiseOverlay />
          <div className="bg-[#090A0B] z-10 relative">
              <BackgroundHero/>
              <Nav className="mt-4"/>
          </div>
          {children}
          <Footer />
      </body>
    </html>
  )
}