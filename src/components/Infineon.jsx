import React from "react";
import TopRight from "@/components/icons/TopRight";
import Image from "next/image";
import { motion } from "framer-motion";

// Framer Motion variants for the arrow
const arrowVariants = {
  rest: { x: 0, y: 0 },
  hover: { x: 2, y: -2 }, // moves arrow slightly top-right
};

function Infineon() {
  return (
    <section className="bg-[#090A0B] text-white py-36">

      {/* ================== 5-COLUMN DESKTOP (≥LG) ================== */}
      <div className="hidden lg:flex max-w-7xl mx-auto">

        {/* COLUMN ONE */}
        <div className="flex flex-col w-1/2 border-r border-[#1B1C1E]">
          <div className="py-6" />
          <div className="border-t border-[#1B1C1E] py-6" />
          <div className="border-y border-[#1B1C1E] min-h-[360px]" />
          <div className="min-h-[354.74px]" />
          <div className="border-y border-[#1B1C1E] py-6" />
          <div className="py-6" />
        </div>

        {/* COLUMN TWO */}
        <div className="flex flex-col w-full border-r border-[#1B1C1E]">
          <div className="py-6" />
          <div className="border-t border-[#1B1C1E] py-6" />
          <div className="border-y border-[#1B1C1E]">
            <p className="text-6xl font-semibold p-12 leading-[1.1]">
              Infineon&apos;s Preferred Design House.
            </p>
          </div>

          {/* HOVER CONTAINER (Framer Motion) */}
          <motion.div
            className="p-12 pr-2 hover:bg-[#0C0D0F] cursor-pointer"
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            <p className="text-lg leading-relaxed max-w-xs font-geist text-[#6A6B6C]">
              As an Infineon Preferred Design House, Neutron Controls brings ideas to life,
              uniting Infineon&apos;s advanced solutions with our expert guidance.
            </p>
            <a
              href="/learn-more"
              className="inline-block font-medium text-white transition-colors font-geist pt-14"
            >
              Learn more
              {/* ARROW WRAPPED IN A MOTION.SPAN USING arrowVariants */}
              <motion.span
                className="inline-block w-5 h-5  ml-2"
                variants={arrowVariants}
              >
                <TopRight />
              </motion.span>
            </a>
          </motion.div>

          <div className="border-y border-[#1B1C1E] py-6" />
          <div className="py-6" />
        </div>

        {/* COLUMNS 3 & 4 MERGED: polka‐dot background behind image */}
        <div className="flex flex-col w-full border-r border-[#1B1C1E]">
          {/* Row 1 */}
          <div className="flex">
            <div className="w-1/2 py-6 border-r border-[#1B1C1E]" />
            <div className="w-1/2 py-6border-[#1B1C1E]" />
          </div>
          {/* Row 2 */}
          <div className="flex">
            <div className="w-1/2 border-t border-[#1B1C1E] py-6 border-r" />
            <div className="w-1/2 border-t border-[#1B1C1E] py-6 " />
          </div>

          {/* Rows 3 & 4 -> merged cell for the image */}
          <div className="relative border-y border-[#1B1C1E] min-h-[715.74px] flex items-center justify-center overflow-hidden">
            {/* Polka‐dot background (inline SVG, smaller + spaced) */}
            <div
              className="
                absolute inset-0 z-0
                bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Ccircle%20cx%3D%2212%22%20cy%3D%2212%22%20r%3D%221%22%20fill%3D%22%231B1C1E%22/%3E%3C/svg%3E')]
                bg-repeat
                pointer-events-none
              "
            />
            {/* Image on top (z-10) */}
            <Image
              className="relative z-10"
              src="/Infineon/app.svg"
              alt="Infineon App"
              width={600}
              height={400}
            />
          </div>

          {/* Row 5 */}
          <div className="flex">
            <div className="w-1/2 border-b border-[#1B1C1E] py-6 border-r" />
            <div className="w-1/2 border-b border-[#1B1C1E] py-6" />
          </div>
          {/* Row 6 */}
          <div className="flex">
            <div className="w-1/2 py-6 border-r border-[#1B1C1E]" />
            <div className="w-1/2 py-6  border-[#1B1C1E]" />
          </div>
        </div>

        {/* COLUMN FIVE */}
        <div className="flex flex-col w-1/2">
          <div className="py-6" />
          <div className="border-t border-[#1B1C1E] py-6" />
          <div className="border-y border-[#1B1C1E] min-h-[360px]" />
          <div className="min-h-[354.74px]" />
          <div className="border-y border-[#1B1C1E] py-6" />
          <div className="py-6" />
        </div>
      </div>


      {/* ================== RESPONSIVE (UNDER LG) ================== */}
      <div className="lg:hidden max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* ROW 1: top spacing + top border */}
        <div className="border-t border-[#1B1C1E] py-6" />

        {/* ROW 2: polka‐dot behind the image */}
        <div className="relative border-y border-[#1B1C1E] flex justify-center py-8 overflow-hidden">
          <div
            className="
              absolute inset-0 z-0
              bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Ccircle%20cx%3D%2212%22%20cy%3D%2212%22%20r%3D%221%22%20fill%3D%22%231B1C1E%22/%3E%3C/svg%3E')]
              bg-repeat
              pointer-events-none
            "
          />
          {/* Image sits on top */}
          <Image
            className="relative z-10"
            src="/Infineon/app.svg"
            alt="Infineon App"
            width={600}
            height={400}
          />
        </div>

        {/* ROW 3: two columns at md, single column below md */}
        <div className="border-b border-[#1B1C1E] grid grid-cols-1 md:grid-cols-2">
          {/* LEFT COLUMN: big heading (padded) */}
          <div className="border-r border-[#1B1C1E] p-8 flex items-center">
            <p className="text-4xl md:text-5xl font-semibold leading-tight">
              Infineon&apos;s Preferred Design House.
            </p>
          </div>

          {/* RIGHT COLUMN: text + button with Motion hover */}
          <motion.div
            className="p-8 hover:bg-[#0C0D0F]"
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            <p className="text-base md:text-lg leading-relaxed max-w-xs font-geist text-[#6A6B6C] mb-6">
              As an Infineon Preferred Design House, Neutron Controls brings ideas to life,
              uniting Infineon&apos;s advanced solutions with our expert guidance.
            </p>
            <a
              href="/learn-more"
              className="inline-block font-medium text-white transition-colors font-geist pt-2"
            >
              Learn more
              <motion.span
                className="inline-block w-5 h-5 mb-1 ml-2"
                variants={arrowVariants}
              >
                <TopRight />
              </motion.span>
            </a>
          </motion.div>
        </div>

        {/* ROW 4: bottom spacing */}
        <div className="py-6" />
      </div>

    </section>
  );
}

export default Infineon;