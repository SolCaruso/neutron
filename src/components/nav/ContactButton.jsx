// DownloadButton.jsx
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function DownloadButton() {
  return (
    <Link href="/#" passHref>
      <motion.div
        className={`
          inline-flex items-center justify-center
          min-h-[36px]
          gap-1
          sm:px-4 sm:py-3
          px-3 py-2
          text-gray-800
          bg-[#E6E6E6]
          hover:bg-white
          rounded-md
          border-2-[#FEFEFE]
          cursor-pointer
          transition-all
          duration-100
          ease-in-out
          btn-glass
          uppercase
          text-[10px]
          sm:text-[12px] tracking-[1px] font-bold
        `}
      >    
        Contact Us
      </motion.div>
    </Link>
  );
}