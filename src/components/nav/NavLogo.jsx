// NavLogo.jsx
import React from 'react'
import Image from 'next/image';

const NavLogo = () => {
  return (
    <div className="flex items-center">
      {/* Replace with your actual logo path */}
      <Image 
        src="/logo/logo.svg" 
        alt="Neutron Controls Logo" 
        width={155} // Set the appropriate width
        height={42} // Set the appropriate height
      />
    </div>
  )
}

export default NavLogo