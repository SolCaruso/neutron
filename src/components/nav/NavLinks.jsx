// NavLinks.jsx
"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Down from "@/components/icons/Down";
import RightArrow from "@/components/icons/RightArrow";
import Equ8 from "@/components/logos/ECU8white";
import Equ8ter from "@/components/logos/ECU8TRwhite";
import Energate from "@/components/logos/ENERG8TEwhite";

export default function NavLinks() {
  const [isOpen, setIsOpen] = useState(false);

  // Ref on the <li> that wraps the "Solutions" link + dropdown
  const dropdownContainerRef = useRef(null);

  // Close dropdown if click is outside the dropdown container
  useEffect(() => {
    function handleClickOutside(e) {
      // If we have a container and the click is NOT inside it, close
      if (
        dropdownContainerRef.current &&
        !dropdownContainerRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    }

    // Listen for clicks at the document level
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Framer Motion variants
  const parentVariants = {
    rest: { backgroundColor: "rgba(0, 0, 0, 0)" },
    hover: { backgroundColor: "#0f1010" },
  };

  const logoVariants = {
    rest: { opacity: 0.6 },
    hover: { opacity: 1 },
  };

  const arrowVariants = {
    rest: { opacity: 0, x: 0 },
    hover: { opacity: 1, x: 5 },
  };

  return (
    <nav className="hidden md/lg:block">
      <ul className="flex justify-center gap-12 list-none m-0 p-0 text-[#C7C2BE]">
        {/* Wrap "Solutions" + Dropdown in a single <li> with a ref */}
        <li ref={dropdownContainerRef} className="relative">
          <a
            href="#"
            className="text-[12px] uppercase tracking-[3px] font-semibold 
                       hover:text-white inline-flex items-center"
            onClick={(e) => {
              e.preventDefault();
              setIsOpen(!isOpen);
            }}
          >
            Solutions
            <motion.div
              className="w-4 h-4 ml-1 flex items-center justify-center"
              animate={{
                rotate: isOpen ? -180 : 0,
                y: isOpen ? -2 : 0,
              }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <Down className="w-full h-full fill-current" />
            </motion.div>
          </a>

          {/* Dropdown */}
          <ul
            className={`
              absolute top-10 -left-6 
              text-white
              border-[#151618] border
              bg-gradient-to-t from-[#0f0e0e] to-black/90 
              shadow-[0px_-4px_4px_0px_rgba(0,0,0,0.25)] 
              backdrop-blur-[40px]
              text-[16px] 
              w-64
              rounded-xl
              transition-all 
              duration-150
              ${isOpen ? "block" : "hidden"}
            `}
          >
            <li>
              <motion.a
                href="#"
                initial="rest"
                whileHover="hover"
                animate="rest"
                variants={parentVariants}
                transition={{ duration: 0.2 }}
                className="flex items-center px-4 mx-3 mt-3 py-4 rounded-lg text-white cursor-pointer"
              >
                <motion.div
                  variants={logoVariants}
                  transition={{ duration: 0.2 }}
                  className="mr-2"
                >
                  <Equ8 className="h-5 " />
                </motion.div>
                <motion.div
                  variants={arrowVariants}
                  transition={{ duration: 0.2 }}
                  className="ml-auto"
                >
                  <RightArrow className="w-4 h-4" />
                </motion.div>
              </motion.a>
            </li>
            <li>
              <motion.a
                href="#"
                initial="rest"
                whileHover="hover"
                animate="rest"
                variants={parentVariants}
                transition={{ duration: 0.2 }}
                className="flex items-center px-4 mx-3 py-4 rounded-lg text-white cursor-pointer"
              >
                <motion.div
                  variants={logoVariants}
                  transition={{ duration: 0.2 }}
                  className="mr-2"
                >
                  <Equ8ter className="h-[23px] " />
                </motion.div>
                <motion.div
                  variants={arrowVariants}
                  transition={{ duration: 0.2 }}
                  className="ml-auto"
                >
                  <RightArrow className="w-4 h-4" />
                </motion.div>
              </motion.a>
            </li>
            <li>
              <motion.a
                href="#"
                initial="rest"
                whileHover="hover"
                animate="rest"
                variants={parentVariants}
                transition={{ duration: 0.2 }}
                className="flex items-center px-4 mx-3 mb-3 py-4 rounded-lg text-white cursor-pointer"
              >
                <motion.div
                  variants={logoVariants}
                  transition={{ duration: 0.2 }}
                  className="mr-2"
                >
                  <Energate className="h-[14px]" />
                </motion.div>
                <motion.div
                  variants={arrowVariants}
                  transition={{ duration: 0.2 }}
                  className="ml-auto"
                >
                  <RightArrow className="w-4 h-4" />
                </motion.div>
              </motion.a>
            </li>
            
          </ul>
        </li>

        <li>
          <a
            href="#"
            className="text-[12px] uppercase tracking-[3px] font-semibold hover:text-white"
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-[12px] uppercase tracking-[3px] font-semibold hover:text-white"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-[12px] uppercase tracking-[3px] font-semibold hover:text-white"
          >
            Careers
          </a>
        </li>
      </ul>
    </nav>
  );
}