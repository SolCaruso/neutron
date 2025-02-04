"use client";

import Image from "next/image";
import React from "react";

export default function VerticalSlider() {
  return (
    // Outer container with black background and large height.
    <div className="relative w-full h-[300vh] bg-black rounded-t-4xl">
      {/* --- Black Layer (pinned) --- */}
      <section className="sticky top-0 text-white z-10 flex items-center justify-center rounded-t-4xl lg:py-24 py-12">
        <div className="max-w-3xl p-8 text-center">
          <h2 className="lg:text-[40px] text-2xl font-semibold mb-10">
            CUSTOM ENGINEERING SERVICES
          </h2>
          <p className="lg:text-2xl text-lg text-left mb-10">
            Power your energy systems with tailored{" "}
            <span className=" px-[2.5px] bg-[#435FE1] rounded-sm">BMS</span> and{" "}
            <span className=" px-[2.5px] bg-[#435FE1] rounded-sm">ECU</span>{" "}
            solutions designed for efficiency, reliability, and safety.
          </p>
          <p className="lg:text-2xl text-lg text-left mb-10">
            From electric vehicles to industrial and renewable applications, our
            expertise ensures{" "}
            <span className=" px-[2.5px] bg-[#435FE1] rounded-sm">
              optimized performance
            </span>{" "}
            and extended battery life.
          </p>
          <p className="lg:text-2xl text-lg text-left">
            <span className=" px-[2.5px] bg-[#435FE1] rounded-sm">
              Safety is at our core,
            </span>{" "}
            with designs built to meet ISO 26262 standards and protect both
            people and environments.
          </p>
        </div>
      </section>

      {/* --- White Layer (pinned) --- */}
      {/* Use margins so you can see the black background around it */}
      <section className="sticky top-4 lg:h-screen bg-white text-black z-20 
                          flex flex-col-reverse lg:flex-row items-center 
                          justify-center rounded-4xl mx-4 py-20 xl:py-0">
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
          <button className="bg-black font-semibold text-white px-6 py-3 rounded-md hover:bg-gray-800">
            FIND OUT MORE
          </button>
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
      <section className="sticky top-8 lg:h-screen bg-gray-100 text-black z-30 
                          flex flex-col-reverse lg:flex-row items-center 
                          justify-center rounded-4xl mx-8 py-20 xl:py-0 mb-4">
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
          <button className="bg-black font-semibold text-white px-6 py-3 rounded-md hover:bg-gray-800">
            FIND OUT MORE
          </button>
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