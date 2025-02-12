"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Equ8tr() {
  return (

      // Outer container with black background and large height.
    <div className="relative w-full lg:h-[200vh] bg-[#090A0B] ">
    {/* --- White Layer (pinned) --- */}
    {/* Use margins so you can see the black background around it */}
    <section className="lg:sticky top-4 lg:h-[calc(100vh-32px)] bg-white text-black z-20 
                        flex flex-col-reverse lg:flex-row items-center 
                        justify-center lg:rounded-4xl lg:mx-4 py-20 xl:py-0">
      <div className="lg:w-1/2 text-left xl:pl-40 px-12">
        <p className="text-[#E00000] font-bold lg:text-[14px] text-[12px] tracking-[6px] mb-6">
          ECU8TR&trade;
        </p>
        <h2 className="3xl:text-5xl 2xl:text-4xl text-3xl font-bold xl:mb-10 mb-6">
          REVOLUTIONIZING QUALITY CONTROL
        </h2>
        <p className="2xl:text-2xl text-xl xl:mb-10 mb-6">
          ECUTEST™ is a cutting-edge tester crafted for the verification of
          cell monitor operations within battery modules or packs.
        </p>
        <ul className="list-disc font-semibold 2xl:text-2xl text-lg pl-4 leading-[1.8] lg:mb-12 mb-8 xl:space-y-3 pb-4">
          <li>Precision Monitoring</li>
          <li>iso SPI and iso UART compatible</li>
          <li>Quality Management</li>
        </ul>
        <Link href="#" passHref>
          <motion.div
            className="
              inline-flex 
              items-center 
              justify-center
              gap-2
              min-h-[40px]
              sm:min-h-[48px]
              px-3
              sm:px-6 py-1.5
              text-[14px]
              sm:text-[16px] 
              font-semibold 
              leading-[16px]
              tracking-[0.2px]
              whitespace-nowrap
              cursor-pointer
              border-none
              rounded-md
              transition-colors
              duration-200
              ease-in-out
            bg-[#000]
            hover:bg-[#191919]
              shadow-[0_0_2px_rgba(0,0,0,0.5),_0_0_14px_rgba(255,255,255,0.19),_inset_0_-1px_0.4px_rgba(0,0,0,0.2)]
              opacity-90
              hover:opacity-100
              text-white
              uppercase
            "
          >
            <span>Find out more</span>
          </motion.div>
        </Link>
      </div>
      <div className="flex justify-center mb-6 lg:mb-0">
        <Image
          src="/vertical/ecu8tr.webp"
          alt="ECU8TR Tester"
          width={700}
          height={500}
          className="w-full h-auto"
        />
      </div>
    </section>

    {/* --- Gray Layer (pinned) --- */}
    {/* Give it bigger margins so we see white around it */}
    <section className="lg:sticky top-8 lg:h-[calc(100vh-64px)] bg-gray-100 text-black z-30 
                        flex flex-col-reverse lg:flex-row items-center 
                        justify-center lg:rounded-4xl lg:mx-8 py-20 xl:py-0 lg:mb-4">
      <div className="lg:w-1/2 text-left xl:pl-40 px-12">
        <p className="text-[#E00000] font-bold lg:text-[14px] text-[12px] tracking-[6px] mb-6">
            EMUL8TR ESS CONTROLLER&trade;
        </p>
        <h2 className="3xl:text-5xl 2xl:text-4xl text-3xl font-bold xl:mb-10 mb-6">
          ADVANCED ENERGY STORAGE MANAGEMENT
        </h2>
        <p className="2xl:text-2xl text-xl xl:mb-10 mb-6"> 
          The EMUL8TR™ ESS Controller is an advanced Energy Storage System
          management product designed to optimize the performance of Battery
          Energy Storage Systems (BESS).
        </p>
        <ul className="list-disc font-semibold 2xl:text-2xl text-lg pl-4 leading-[1.8] lg:mb-12 mb-8 xl:space-y-3 pb-4">
          <li>Optimized Energy Efficiency</li>
          <li>System Reliability and Safety</li>
          <li>Flexible Integration</li>
        </ul>
        <Link href="#" passHref>
          <motion.div
            className="
              inline-flex 
              items-center 
              justify-center
              gap-2
              min-h-[40px]
              sm:min-h-[48px]
              px-3
              sm:px-6 py-1.5
              text-[14px]
              sm:text-[16px] 
              font-semibold 
              leading-[16px]
              tracking-[0.2px]
              whitespace-nowrap
              cursor-pointer
              border-none
              rounded-md
              transition-colors
              duration-200
              ease-in-out
            bg-[#000]
            hover:bg-[#191919]
              shadow-[0_0_2px_rgba(0,0,0,0.5),_0_0_14px_rgba(255,255,255,0.19),_inset_0_-1px_0.4px_rgba(0,0,0,0.2)]
              opacity-90
              hover:opacity-100
              text-white
              uppercase
            "
          >
            
            <span>Find out more</span>
          </motion.div>
        </Link>
      </div>
      <div className="flex justify-center mb-6 lg:mb-0">
        <Image
          src="/vertical/emula8tr.webp"
          alt="Emula8tr ESS Controller"
          width={700}
          height={500}
          className="w-full h-auto"
        />
      </div>
    </section>
  </div>
      
  );
}