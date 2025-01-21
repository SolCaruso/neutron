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
        bg-nav-gradient
        text-white
        mt-8
        rounded-t-xl
        max-w-7xl
        mx-auto
        px-4
        py-4
        grid
        grid-cols-[auto_1fr_auto_auto]
        items-center
      "
      style={{
        background: 'linear-gradient(45deg, #000000 0%, #000000 77%, #161616 100%)'
      }}
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