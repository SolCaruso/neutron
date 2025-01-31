// Layout.jsx
import '@/styles/tailwind.css'
import DigitalBackground from '@/components/DigitalBackground'
import Gradient from '@/components/Gradient'
import MobileLogo from '@/components/logos/MobileLogo'
import NoiseOverlay from '@/components/NoiseOverlay'

export const metadata = {
  title: {
    template: 'Neutron Controls',
    default: 'Where Custom Design Powers Performance',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative">
        <Gradient />
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