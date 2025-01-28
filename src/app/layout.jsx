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
      <body className="text-gray-950 antialiased">
        {/* The dotted/cursor mask background rendered by a client component */}
        <DigitalBackground />

        {/* Optional gradient at the bottom (can remain server-side) */}
        <div className="fixed inset-x-0 bottom-0 h-full bg-gradient-to-b from-white to-[#e1ecf6] -z-20 dark:hidden" />
        
        {children}
      </body>
    </html>
  )
}