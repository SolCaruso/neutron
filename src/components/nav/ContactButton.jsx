// DownloadButton.jsx
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function DownloadButton() {
  return (
          <Link href="/contact" passHref>
            <motion.div
              className="
                items-center 
                justify-center
                gap-2
                min-h-[40px]
                sm:min-h-[43px]
                px-3
                hidden lg:inline-flex 
                sm:px-[18px] py-1.5
                text-[12px]
                sm:text-[14px] 
                font-semibold 
                leading-[16px][#3558f2]
                tracking-[0.2px]
                whitespace-nowrap
                cursor-pointer
                border-none
                rounded-md
                transition-colors
                duration-200
                ease-in-out
                bg-[#E6E6E6]
                hover:bg-[#FFF]
                shadow-[0_0_2px_rgba(0,0,0,0.5),_0_0_14px_rgba(255,255,255,0.19),_inset_0_-1px_0.4px_rgba(0,0,0,0.2)]
                opacity-90
                hover:opacity-100
                text-black
              "
            >
              
              <span>Contact us</span>
            </motion.div>
          </Link>
  );
}