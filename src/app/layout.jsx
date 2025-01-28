// app/layout.jsx (Server Component)
import '@/styles/tailwind.css'
import DigitalBackground from '@/components/DigitalBackground' // <-- We'll write this next

export const metadata = {
  title: {
    template: 'Neutron Controls',
    default: 'Where Custom Design Powers Performance',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body
        className="text-gray-950 antialiased"
        style={{
          background: "linear-gradient(to top right, #EEEEEE 55%, #ECECEC 100%)",
        }}
      >
        {/* The dotted/cursor mask background rendered by a client component */}
        <DigitalBackground />  
        {children}
      </body>
    </html>
  )
}