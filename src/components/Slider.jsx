import React from "react"
import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react"
import Energate from "@/components/logos/Energate"
import Energy from "@/components/icons/Energy"
import { motion } from "framer-motion";
import Link from "next/link";

export default function Slider() {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slidesPerView: 1,
    mode: "snap",
    spacing: 10,
  })

  return (
    <div className="mx-auto w-full flex justify-center">
      {/* Outer container: static BG + Title stays put */}
      <div className="relative w-full max-w-7xl h-[800px] bg-black overflow-hidden rounded-3xl">
        {/* Right-side background image */}
        <div
          className="absolute inset-y-0 right-0 w-[40%] bg-cover bg-no-repeat"
          style={{ backgroundImage: 'url("/slider/bg1.webp")' }}
        />

        {/* Title that never moves */}
        <h2 className="absolute top-24 w-full text-center text-white text-4xl font-bold z-10">
          OUR INDUSTRY FOCUS
        </h2>

        {/* Keen Slider: only the content that should slide goes here */}
        <div ref={sliderRef} className="keen-slider h-full w-full relative z-10">
          {/* Slide 1 */}
          <div className="keen-slider__slide flex top-44 -left-32 justify-center">
            {/* Main content (e.g. the crate image + floating cards) */}
            <div className="relative">
              {/* Crate image */}
              <img
                src="/slider/slider3.webp"
                alt="Energy Storage Crate"
                className="h-auto w-[700px] max-w-full rounded-lg shadow-xl"
              />
              {/* Floating info card */}
              <div className="absolute top-16 -right-52 border-white/10 border
              bg-gradient-to-tr from-[#0C0D0F] to-[#111214] via-[#111214]/75 
                              backdrop-blur-sm text-white p-5 pt-7 w-[440px] 
                              rounded-md shadow-lg"
              >
                <h3 className="text-lg font-bold flex items-center mb-4">
                  {/* Icon */}
                  <Energy className="mr-3 "/>
                  Energy Storage
                </h3>
                <p className="text-sm text-gray-200 mb-6 tracking-wide ">
                  We deliver <span className="text-[#8CD6FF] bg-[#1C445D] rounded-sm px-1">cutting-edge energy storage
                  control solutions</span> designed to maximize efficiency and
                  reliability in energy and industrial power systems.
                </p>
                  <Link href="/#" passHref>
                    <motion.div
                      className="
                        inline-flex 
                        items-center 
                        justify-center
                        py-2
                        px-2.5
                        md:px-3.5
                        mr-1
                        text-[12px]
                        font-bold
                        tracking-[0.2px]
                        whitespace-nowrap
                        cursor-pointer
                        border-none
                        rounded-[4px]
                        transition-colors
                        duration-200
                        ease-in-out
                        bg-[#E6E6E6]
                        hover:bg-[#FFF]
                        shadow-[0_0_2px_rgba(0,0,0,0.5),_0_0_14px_rgba(255,255,255,0.19),_inset_0_-1px_0.4px_rgba(0,0,0,0.2)]
                        opacity-90
                        hover:opacity-100
                        text-black
                        uppercase
                      "
                    >
                    <span>Learn More</span>
                  </motion.div>
                </Link>
              </div>
            </div>

            {/* Small white logo card */}
            <div className="absolute bottom-80 right-6 bg-white/85 backdrop-blur-sm px-4 py-[70px] rounded-lg shadow-md border-white/30 ">
              <Energate className="h-7 w-auto" />
            </div>
          </div>

          {/* Slide 2 */}
          <div className="keen-slider__slide flex items-center justify-center">
            <h2 className="text-white">Slide 2 Content</h2>
          </div>

          {/* Slide 3 */}
          <div className="keen-slider__slide flex items-center justify-center">
            <h2 className="text-white">Slide 3 Content</h2>
          </div>
        </div>
      </div>
    </div>
  )
}