import React, { useState } from "react";
import { motion } from "framer-motion";
import Down from "@/components/icons/Down";

const NavLinks = () => {
  const [isRotated, setIsRotated] = useState(false);

  return (
    // Hide the entire <nav> on screens < md; show on md and larger
    <nav className="hidden md:block">
      <ul className="flex justify-center gap-10 list-none m-0 p-0 text-[#C7C2BE]">
        <li className="relative">
          <a
            href="#"
            className="font-medium flex items-center group hover:text-white"
            onClick={(e) => {
              e.preventDefault(); // Prevent default link behavior
              setIsRotated(!isRotated); // Toggle rotation state
            }}
          >
            Solutions
            <motion.div
              className="inline-block w-4 h-4 ml-1 group-hover:fill-white"
              animate={{
                rotate: isRotated ? -180 : 0, // Opposite direction rotation
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20, // Tiny spring touch
              }}
            >
              <Down className="w-full h-full fill-current group-hover:text-white" />
            </motion.div>
          </a>
          <ul className="absolute top-8 left-0 bg-white text-black hidden text-[16px]">
            <li>
              <a href="#" className="block px-3 py-2 hover:bg-gray-200">
                Sub Solution 1
              </a>
            </li>
            <li>
              <a href="#" className="block px-3 py-2 hover:bg-gray-200">
                Sub Solution 2
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#" className="font-medium hover:text-white">
            Services
          </a>
        </li>
        <li>
          <a href="#" className="font-medium hover:text-white">
            About
          </a>
        </li>
        <li>
          <a href="#" className="font-medium hover:text-white">
            Careers
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;