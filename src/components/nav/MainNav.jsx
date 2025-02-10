// MainNav.jsx
import React from "react"
import NavLogo from "@/components/logos/Logo"
import NavLinks from "./NavLinks"
import ContactButton from "./ContactButton"

export default function MainNav({ isOpen, setIsOpen }) {
  return (
    <header className= "md/lg:px-4 md/lg:pt-4">
    <div
      className="
        text-white
        bg-gradient-to-t from-[#0f0e0e] to-black/60 shadow-[0px_-4px_4px_0px_rgba(0,0,0,0.25)] backdrop-blur-[40px]
        md/lg:rounded-t-lg
        max-w-8xl
        mx-auto
        md:py-6
        px-3.5
        md/lg:py-4
        py-4
        flex
        justify-between
        items-center
      "
      // style={{
      //   background: 'linear-gradient(45deg, #000000 0%, #000000 77%, #161616 100%)'
      // }}
    >
        <NavLogo className="w-44"/>

        {/* NavLinks: hidden on screens < md */}
        <NavLinks />

        {/* Contact Us button (always visible) */}
        <div className="flex ">
          <ContactButton className="hidden sm:block"/>

          {/* Hamburger Icon: show only on screens < md */}
          <button
            className="block md/lg:hidden ml-3 md:ml-7"
            onClick={() => setIsOpen(!isOpen)}
          >
            {/* Simple hamburger icon (Tailwind recommended classes for size/color) */}
            <svg
              className="w-6 h-6 mr-1"
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
        
      </div>
    </header>
  )
}