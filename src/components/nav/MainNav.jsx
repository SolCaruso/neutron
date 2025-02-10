// MainNav.jsx
import React from "react";
import NavLogo from "@/components/logos/Logo";
import NavLinks from "./NavLinks";
import ContactButton from "./ContactButton";
import { motion } from "framer-motion";
import MobileNavDropdown from "./MobileNavDropdown";

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="2"
    stroke="currentColor"
    strokeLinecap="round"
    {...props}
  />
);

export default function MainNav({ isOpen, setIsOpen }) {
  return (
    <header className="relative md/lg:px-4 md/lg:pt-4">
      <div
        className="
          text-white
          bg-gradient-to-t from-[#0f0e0e] to-black/70 
          shadow-[0px_-4px_4px_0px_rgba(0,0,0,0.25)] 
          backdrop-blur-[40px]
          md/lg:rounded-t-lg
          max-w-8xl
          mx-auto
          md/lg:py-6
          px-3.5
          py-4
          flex
          justify-between
          items-center
          relative
        "
      >
        {/* Logo */}
        <NavLogo className="w-44" />

        {/* Desktop NavLinks (hidden on mobile) */}
        <NavLinks />

        <div className="flex items-center">
          <ContactButton className="hidden sm:block" />

          {/* Animated Hamburger / X for mobile */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="block md/lg:hidden ml-3"
            aria-label="Toggle mobile menu"
          >
            <motion.svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              animate={isOpen ? "open" : "closed"}
            >
              {/* Top line */}
              <Path
                variants={{
                  closed: { d: "M 3 6 L 21 6" },
                  open:   { d: "M 4 19 L 20 5" },
                }}
                transition={{ duration: 0.3 }}
              />
              {/* Middle line */}
              <Path
                variants={{
                  closed: { d: "M 3 12 L 21 12", opacity: 1 },
                  open:   { opacity: 0 },
                }}
                transition={{ duration: 0.3 }}
              />
              {/* Bottom line */}
              <Path
                variants={{
                  closed: { d: "M 3 18 L 21 18" },
                  open:   { d: "M 4 5 L 20 19" },
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.svg>
          </motion.button>
        </div>
      </div>

      {/* Mobile nav only if isOpen === true */}
      {isOpen && <MobileNavDropdown closeMenu={() => setIsOpen(false)} />}
    </header>
  );
}