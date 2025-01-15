"use client"
import React, { useState } from "react"
import MainNav from "./MainNav"
import SecondaryNav from "./SecondaryNav"
import MobileNavDropdown from "./SecondaryNav"

export default function Nav() {
  // State to toggle mobile dropdown
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      {/* Main black nav bar */}
      <MainNav isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Blue marquee bar */}
      <SecondaryNav />

      {isOpen && (
        <MobileNavDropdown />
      )}
    </div>
  )
}