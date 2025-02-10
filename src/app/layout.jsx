// Layout.jsx
import '@/styles/tailwind.css'
import DigitalBackground from '@/components/DigitalBackground'
import MobileLogo from '@/components/logos/MobileLogo'
import NoiseOverlay from '@/components/NoiseOverlay'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata = {
  title: {
    template: 'Neutron Controls',
    default: 'Test Your Strength',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Geist+Mono:wght@100..900&display=swap"
            rel="stylesheet"
          />
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