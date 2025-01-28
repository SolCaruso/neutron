import React, { useState, useEffect, useRef } from "react"
import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react"
import Energate from "@/components/logos/Energate"
import Energy from "@/components/icons/Energy"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Slider() {
  // Track the current slide for pagination
  const [currentSlide, setCurrentSlide] = useState(0)
  // Whether to pause auto-play when dragging
  const [pause, setPause] = useState(false)

  // A ref for the autoplay timer
  const timerRef = useRef(null)

  // Initialize KeenSlider
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slidesPerView: 1,
    mode: "snap",
    spacing: 10,
    // Sync the current slide to state
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    dragStart: () => setPause(true),
    dragEnd: () => setPause(false),
  })

  // Autoplay effect: move to next slide every 8 seconds
  useEffect(() => {
    const slider = instanceRef.current
    if (!slider) return

    // Clear any previous interval
    if (timerRef.current) clearInterval(timerRef.current)

    timerRef.current = setInterval(() => {
      if (!pause) {
        slider.next()
      }
    }, 8000)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [pause, instanceRef])

  // A small dot/pill representing each slide
  const Dot = ({ index }) => {
    const isActive = currentSlide === index
    return (
      <div
        className="relative mr-3 flex items-center justify-center"
        style={{
          width: isActive ? "40px" : "10px", // Wider "pill" when active
          height: "10px",
          borderRadius: "9999px",
          backgroundColor: "#DBE1F9", // Default color
          overflow: "hidden",
          transition: "width 0.3s",
        }}
      >
        {isActive && (
          <div
            className="absolute left-0 top-0 h-full bg-[#566FE3]"
            style={{
              animation: "fillBar 8s linear forwards",
            }}
          />
        )}
      </div>
    )
  }

  return (
    <div className="mx-auto w-full flex justify-center">
      <div className="relative w-full max-w-7xl bg-black md:rounded-3xl overflow-hidden">
        {/* Right-side background image */}
        <div
          className="absolute inset-y-0 right-0 w-[40%] bg-cover bg-no-repeat"
          style={{ backgroundImage: 'url("/slider/bg1.webp")' }}
        />

        {/* Title */}
        <h2 className=" w-full text-center text-white text-4xl font-bold z-10 absolute top-24">
          OUR INDUSTRY FOCUS
        </h2>

        {/* Keen Slider */}
        <div ref={sliderRef} className="keen-slider h-full w-full relative z-10">
          {/* Slide 1 */}
          <div className="keen-slider__slide relative">
            {/* --- DESKTOP LAYOUT (md+) --- */}
            <div className="hidden md:flex flex-col items-center md:flex-row md:justify-center px-4 pt-44 pb-20 w-full h-full">
              {/* Image + floating card container */}
              <div className="relative">
                <img
                  src="/slider/slider3.webp"
                  alt="Energy Storage Crate"
                  className="h-auto w-[800px] max-w-full rounded-lg shadow-xl mr-32 mb-20"
                />

                {/* Floating info card */}
                <div
                  className="
                    hidden 
                    md:block 
                    absolute 
                    top-12
                    -right-24
                    border border-white/10
                    bg-gradient-to-tr from-[#0C0D0F] to-[#111214] via-[#111214]/85
                    backdrop-blur-sm 
                    text-white 
                    p-5 
                    pt-7
                    w-[460px]
                    rounded-lg
                    shadow-lg
                  "
                >
                  {/* Card content (Energy icon, text, link button, etc.) */}
                  <h3 className="text-lg font-bold flex items-center mb-4">
                    <Energy className="mr-3" />
                    Energy Storage
                  </h3>
                  <p className="text-base text-gray-200 mb-6 tracking-wide">
                    We deliver{" "}
                    <span className="text-[#8CD6FF] bg-[#1C445D] rounded-sm px-1">
                      cutting-edge energy storage control solutions
                    </span>{" "}
                    designed to maximize efficiency and reliability in energy
                    and industrial power systems.
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

              {/* Small white logo card (only on md+) */}
              <div className="hidden md:block absolute bottom-48 right-12 bg-white/85 backdrop-blur-sm px-4 py-[70px] rounded-lg shadow-md border-white/30">
                <Energate className="h-7 w-auto" />
              </div>
            </div>

            {/* --- MOBILE LAYOUT (< md) --- */}
            <div className="md:hidden flex flex-col items-center w-full px-4 py-16">
              <div className="border border-white/10 rounded-md bg-gradient-to-tr from-[#0C0D0F] to-[#111214] via-[#111214]/75 backdrop-blur-sm shadow-lg w-full max-w-[700px] overflow-hidden">
                {/* Image with 1px bottom border */}
                <img
                  src="/slider/slider3.webp"
                  alt="Energy Storage Crate"
                  className="w-full h-auto block border-b border-white/10"
                />
                {/* Info at the bottom */}
                <div className="text-white p-5 pt-7">
                  <h3 className="text-lg font-bold flex items-center mb-4">
                    <Energy className="mr-3" />
                    Energy Storage
                  </h3>
                  <p className="text-sm text-gray-200 mb-6 tracking-wide">
                    We deliver{" "}
                    <span className="text-[#8CD6FF] bg-[#1C445D] rounded-sm px-1">
                      cutting-edge energy storage control solutions
                    </span>{" "}
                    designed to maximize efficiency and reliability in energy
                    and industrial power systems.
                  </p>
                  <Link href="/#" passHref>
                    <motion.div
                      className="
                        inline-flex 
                        items-center 
                        justify-center
                        py-2
                        px-2.5
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
              {/* No small white logo card on mobile */}
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

        {/* --- Pagination Dots (absolute or wherever you prefer) --- */}
        <div className="absolute bottom-24 w-full flex justify-center z-20">
          <Dot index={0} />
          <Dot index={1} />
          <Dot index={2} />
        </div>
      </div>
    </div>
  )
}