// MainNav.jsx
import React from "react"
import NavLogo from "./NavLogo"
import NavLinks from "./NavLinks"
import ContactButton from "./ContactButton"

export default function MainNav({ isOpen, setIsOpen }) {
  return (
    <header className= "px-8 ">
      <div
        className="
        bg-[#0B1120] text-white
          mt-8 rounded-t-lg max-w-7xl mx-auto
          px-3
          py-5
          grid
          grid-cols-[auto_1fr_auto_auto]
          items-center
        "
      >
        <NavLogo />

        {/* NavLinks: hidden on screens < md */}
        <NavLinks />

        {/* Contact Us button (always visible) */}
        <ContactButton />

        {/* Hamburger Icon: show only on screens < md */}
        <button
          className="block md:hidden ml-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Simple hamburger icon (Tailwind recommended classes for size/color) */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
    </header>
  )
}