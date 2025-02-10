// MobileNavDropdown.jsx
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const dropdownVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  exit: {

    opacity: 0,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};

export default function MobileNavDropdown({ closeMenu }) {
  return (
    <motion.div
      variants={dropdownVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="
        absolute
        top-[85px] 
        left-0
        w-full
        h-[calc(100vh-85px)]
        bg-black/60
        backdrop-blur-xl
        z-50
        flex
        flex-col
        items-center
        p-6
      "
    >

      {/* Mobile nav links (no hidden classes) so they're visible on small */}
      <nav className="flex flex-col text-center space-y-6 text-[18px] mt-10 text-white">
        <Link href="/services" onClick={closeMenu}>
          Services
        </Link>
        <Link href="/about" onClick={closeMenu}>
          About
        </Link>
        <Link href="/careers" onClick={closeMenu}>
          Careers
        </Link>
        <Link href="/contact" onClick={closeMenu}>
          Contact
        </Link>
      </nav>
    </motion.div>
  );
}