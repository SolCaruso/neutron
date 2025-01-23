// ContactButton.jsx
import React from 'react'
import { motion } from "framer-motion";
import Link from "next/link";

const ContactButton = () => {
  return (
    <Link href="/#" passHref>
            <motion.div
              className="
                inline-flex 
                items-center 
                justify-center
                px-6 py-4
                mr-1
                text-[18px] 
                font-medium
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
              <span>Contact Us</span>
            </motion.div>
          </Link>
  )
}

export default ContactButton