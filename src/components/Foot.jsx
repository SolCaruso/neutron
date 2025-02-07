import React from "react";
import Image from "next/image";
import Logo from "@/components/logos/Logo";
import Equ8 from "@/components/logos/ECU8white";
import Equ8ter from "@/components/logos/ECU8TRwhite";
import Energate from "@/components/logos/ENERG8TEwhite";
import BackgroundFooter from '@/components/BackgroundFooter';
import LinkedIn from '@/components/icons/LinkedIn';
import { motion } from "framer-motion";


export default function Foot() {
  return (
    <footer
      className="
        relative
        bg-[#090A0B] 
        text-white
      "
    >
    <BackgroundFooter className="z-0" />

      {/* Content container */}
      <div className="relative mx-auto md:pb-40 pb-12 pt-28 px-6 z-10 w-full bg-gradient-to-t from-[#07080a] to-black/70 shadow-[0px_-4px_4px_0px_rgba(0,0,0,0.25)] border-t border-[#111213] backdrop-blur-[72px]">
        
        {/* ============== TOP ROW: 3 Columns ============== */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 max-w-7xl mx-auto ">
          
          {/* LOCATIONS Column */}
          <div>
            <h3 className="text-sm uppercase tracking-[7px] font-semibold mb-3 text-white">
              Ottawa
            </h3>
            <p className="mb-6 leading-[1.8] text-white/60">
              1145 Innovation Drive, Suite 101<br />
              Kanata, Ontario, K2K 3G8<br />
              Canada
            </p>

            <h3 className="text-sm uppercase tracking-[7px] font-semibold mb-3 text-white">
              Toronto
            </h3>
            <p className="mb-6 leading-[1.8] text-white/60">
              5270 Solar Drive, Unit 21<br />
              Mississauga, Ontario, L4W 0G7<br />
              Canada
            </p>
          </div>

          {/* SOLUTIONS Column (Product logos) */}
          <div>
            <h3 className="text-sm uppercase tracking-[7px] font-semibold mb-4 text-white">
              Solutions
            </h3>
            <div>
              {/* Replace with your actual logo components */}
              <Equ8 className="h-6 opacity-60 hover:opacity-100 cursor-pointer transition-all duration-50 ease-in-out" />
              <Equ8ter className="h-[26px] mt-4 opacity-60 hover:opacity-100 cursor-pointer transition-all duration-50 ease-in-out" />
              <Energate className="h-4 mt-5 opacity-60 hover:opacity-100 cursor-pointer transition-all duration-50 ease-in-out" />
            </div>
          </div>

          {/* COMPANY Column */}
          <div>
            <h3 className="text-sm uppercase tracking-[7px] font-semibold mb-3">
              Company
            </h3>
            <ul className="space-y-[2px] leading-relaxed text-white/60">
              <li><a href="/services" className="hover:text-white">Services</a></li>
              <li><a href="/about" className="hover:text-white">About</a></li>
              <li><a href="/careers" className="hover:text-white">Careers</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

        </div>
        
        {/* ============== BOTTOM ROW ============== */}
        <div className="mt-14 flex flex-col xs:flex-row items-center justify-between gap-4 max-w-7xl mx-auto">
          {/* Left: Neutron Controls logo */}
          <div className="flex-shrink-0">
            <Logo className="h-16" />
          </div>
          
          {/* Right: Social or "Follow us" */}
          <a
            href="https://www.linkedin.com/company/neutron-controls"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <motion.div
              className="text-sm text-gray-200 flex items-center space-x-4 group cursor-pointer"
            >
              {/* Follow us text */}
              <motion.p
                className="hidden xs:block text-[#BABABA] group-hover:text-white transition-colors duration-50 font-medium"
              >
                Follow us
              </motion.p>

              {/* LinkedIn Icon */}
              <div className="bg-white/5 rounded-[4px] p-1 group-hover:bg-white/10 transition-colors duration-50">
                <LinkedIn className="w-5 h-4.5" />
              </div>
            </motion.div>
          </a>
        </div>
      </div>
    </footer>
  );
}