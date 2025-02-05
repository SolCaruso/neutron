// DownloadButton.jsx
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function DownloadButton() {
  return (
    <Link href="/#" passHref>
      <motion.a
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`
          inline-flex items-center justify-center
          min-h-[36px]
          gap-1
          px-4 py-3
          text-gray-800
          bg-gray-50
          rounded-md
          border-none
          cursor-pointer
          transition-all
          duration-50
          ease-in-out
          btn-glass /* Our custom utility class for the multi-layer box-shadow */
          uppercase
          text-[12px] tracking-[2px] font-bold
        `}
      >    
        Contact Us
      </motion.a>
    </Link>
  );
}