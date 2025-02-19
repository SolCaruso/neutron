import React, { useRef, useEffect, useState } from "react";
import NavLogo from "@/components/logos/Logo";
import NavLinks from "./NavLinks";
import ContactButton from "./ContactButton";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Equ8 from "@/components/logos/ECU8";
import Equ8ter from "@/components/logos/ECU8TR";
import Energate from "@/components/logos/ENERG8TE";

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="2"
    stroke="currentColor"
    strokeLinecap="round"
    {...props}
  />
);

// Variants for the container that staggers its children
const dropdownContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  exit: {},
};

// Variants for each dropdown item (animates from above)
const dropdownItemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export default function MainNav({ isOpen, setIsOpen, secondaryNavReady }) {
  const navRef = useRef(null);
  const mainNavHeight = 106;
  const dropdownExtraHeight = 300;
  const [mobileDropdownExtraHeight, setMobileDropdownExtraHeight] =
    useState(dropdownExtraHeight);

  useEffect(() => {
    // Update mobile height based on window width
    function updateHeight() {
      if (window.innerWidth < 640) {
        // Adjust this value as needed for mobile screens
        setMobileDropdownExtraHeight(400);
      } else {
        setMobileDropdownExtraHeight(dropdownExtraHeight);
      }
    }
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

  return (
    <header
      ref={navRef}
      className="absolute lg:relative top-0 left-0 w-full z-50 px-4 pt-4"
    >
      <motion.div
        initial={{
          opacity: 0,
          height: mainNavHeight,
          background: "linear-gradient(to top, #0f0e0e, rgba(0,0,0,0.7))"
        }}
        animate={{
          opacity: secondaryNavReady ? 1 : 0,
          height: isOpen ? mainNavHeight + mobileDropdownExtraHeight : mainNavHeight,
          background: isOpen
            ? "linear-gradient(to top, rgba(255,255,255,0.8), rgba(255,255,255,0.9))"
            : "linear-gradient(to top, #0f0e0e, rgba(0,0,0,0.7))"
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="shadow-[0px_-4px_4px_0px_rgba(0,0,0,0.25)] backdrop-blur-[40px] rounded-lg lg:rounded-b-none lg:rounded-t-lg max-w-8xl mx-auto py-6 px-3.5 flex flex-col relative"
      >
        {/* Top Navigation Row */}
        <div className="flex justify-between items-center">
          <Link href="/" onClick={() => setIsOpen(false)}>
            {/* Wrap the logo to animate its color */}
            <motion.div
              animate={{ color: isOpen ? "#000" : "#fff" }}
              transition={{ duration: 0.3 }}
            >
              <NavLogo className="w-44" />
            </motion.div>
          </Link>

          <NavLinks />

          <div className="flex items-center">
            <ContactButton className="hidden lg:block" />

            {/* Animated Hamburger / X for mobile */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="block lg:hidden mr-3"
              aria-label="Toggle mobile menu"
            >
              <motion.svg
                initial="closed"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                variants={{
                  closed: { color: "#fff" },
                  open: { color: "#000" },
                }}
                animate={isOpen ? "open" : "closed"}
                transition={{ duration: 0.3 }}
              >
                {/* Top line */}
                <Path
                  variants={{
                    closed: { d: "M 3 6 L 21 6" },
                    open: { d: "M 4 19 L 20 5" },
                  }}
                  transition={{ duration: 0.3 }}
                />
                {/* Middle line */}
                <Path
                  variants={{
                    closed: { d: "M 3 12 L 21 12", opacity: 1 },
                    open: { d: "M 3 12 L 21 12", opacity: 0 },
                  }}
                  transition={{ duration: 0.3 }}
                />
                {/* Bottom line */}
                <Path
                  variants={{
                    closed: { d: "M 3 18 L 21 18" },
                    open: { d: "M 4 5 L 20 19" },
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.svg>
            </motion.button>
          </div>
        </div>

        {/* Dropdown Content with Items Animating from Top to Bottom */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              variants={dropdownContainerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => {
                // If the click did not occur within a link, close the nav.
                if (!e.target.closest("a")) {
                  setIsOpen(false);
                }
              }}
              className="left-8 w-full flex sm:flex-row flex-col justify-around items-stretch pt-10 sm:pt-12 pb-8 pl-6 sm:pl-0"
            >
              {/* Company Links Group */}
              <motion.div variants={dropdownItemVariants} className="flex flex-col">
                <p className="sm:text-base text-sm font-bold mb-6 text-black uppercase tracking-[7px]">
                  Company
                </p>
                <div className="flex flex-col space-y-3 sm:space-y-4 text-[13px] sm:text-[14px] uppercase tracking-[3px] font-semibold text-gray-500">
                  <Link href="/services" className="hover:text-black" onClick={() => setIsOpen(false)}>
                    Services
                  </Link>
                  <Link href="/about" className="hover:text-black" onClick={() => setIsOpen(false)}>
                    About
                  </Link>
                  <Link href="/careers" className="hover:text-black" onClick={() => setIsOpen(false)}>
                    Careers
                  </Link>
                  <Link href="/contact" className="hover:text-black" onClick={() => setIsOpen(false)}>
                    Contact
                  </Link>
                </div>
              </motion.div>

              {/* Divider */}
              <motion.div
                variants={dropdownItemVariants}
                className="w-[1.5px] bg-black/10 mx-8 self-stretch sm:block hidden"
              />

              {/* Solutions Icons Group */}
              <motion.div variants={dropdownItemVariants} className="flex flex-col mt-10 sm:mt-0">
                <p className="sm:text-base text-sm font-bold mb-6 text-black uppercase tracking-[7px]">
                  Solutions
                </p>
                <div className="flex flex-col">
                  <Link href="/solutions/ecu8tr" onClick={() => setIsOpen(false)}>
                    <Equ8 className="h-[18px] sm:h-[22px] opacity-60 hover:opacity-100 cursor-pointer transition-all duration-50 ease-in-out" />
                  </Link>
                  <Link href="/solutions/ecu8tr" onClick={() => setIsOpen(false)}>
                    <Equ8ter className="h-[20px] sm:h-[26px] mt-4 opacity-60 hover:opacity-100 cursor-pointer transition-all duration-50 ease-in-out" />
                  </Link>
                  <Link href="/solutions/energ8te" onClick={() => setIsOpen(false)}>
                    <Energate className="h-[14px] sm:h-[17px] mt-5 opacity-60 hover:opacity-100 cursor-pointer transition-all duration-50 ease-in-out" />
                  </Link>
                </div>
              </motion.div>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}