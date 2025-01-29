"use client"

import React, { useState, useEffect } from "react"
import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react"
import Energate from "@/components/logos/Energate"
import Energy from "@/components/icons/Energy"
import { motion, useAnimationControls } from "framer-motion"
import Link from "next/link"

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  // Track if component has mounted (prevents Framer Motion SSR errors)
  const [mounted, setMounted] = useState(false)

  // Mark as mounted after first client render
  useEffect(() => {
    setMounted(true)
  }, [])

  // ----- Initialize Keen Slider -----
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slidesPerView: 1,
    mode: "snap",
    spacing: 10,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
  })

  // ----- Dot Component -----
  function Dot({ index }) {
    const isActive = currentSlide === index

    const shapeControls = useAnimationControls() // animates circle→pill→circle
    const fillControls = useAnimationControls()  // animates fill bar

    useEffect(() => {
      // Don’t call controls.start() until after mount
      if (!mounted) return

      if (isActive) {
        // If this dot just became active, run expand→fill→collapse
        let canceled = false
        ;(async () => {
          try {
            // 1) Expand from 10px → 40px
            await shapeControls.start({
              width: "40px",
              transition: { duration: 0.3 },
            })
            if (canceled) return

            // 2) Fill from 0% → 100% over 8s
            await fillControls.start({
              width: "100%",
              transition: { duration: 8, ease: "linear" },
            })
            if (canceled) return

            // 3) Collapse from 40px → 10px (in parallel, fill from 100% → 0%)
            await Promise.all([
              shapeControls.start({
                width: "10px",
                transition: { duration: 0.3 },
              }),
              fillControls.start({
                width: "0%",
                transition: { duration: 0.3 },
              }),
            ])
            if (canceled) return

            // 4) If still the active slide, advance
            if (instanceRef.current && currentSlide === index) {
              instanceRef.current.next()
            }
          } catch (err) {
            /* swallow any unmount/interrupt errors */
          }
        })()

        // Cleanup if we become inactive mid‐animation
        return () => {
          canceled = true
        }

      } else {
        // Animate back to small circle (so we see a collapse if user drags away mid‐fill)
        shapeControls.start({
          width: "10px",
          transition: { duration: 0.3 },
        })
        fillControls.start({
          width: "0%",
          transition: { duration: 0.3 },
        })
      }
    }, [
      isActive,
      mounted,
      shapeControls,
      fillControls,
      index,
      currentSlide,
      instanceRef,
    ])

    return (
      <motion.div
        // Let user click a dot to jump to that slide
        onClick={() => {
          instanceRef.current?.moveToIdx(index)
        }}
        className="relative mr-3 flex items-center justify-center
                   h-[10px] bg-[#DBE1F9] rounded-full overflow-hidden
                   cursor-pointer"
        style={{ minWidth: "10px" }}
        // Outer pill shape
        animate={shapeControls}
        initial={{ width: "10px" }}
      >
        {/* Inner fill bar */}
        <motion.div
          className="absolute left-0 top-0 h-full bg-[#566FE3]"
          animate={fillControls}
          initial={{ width: "0%" }}
        />
      </motion.div>
    )
  }
  // ----- End Dot -----

  return (
    <div className="mx-auto w-full flex justify-center">
      <div className="relative w-full max-w-7xl bg-black md:rounded-3xl overflow-hidden">
        {/* Right-side background image */}
        <div
          className="absolute inset-y-0 right-0 w-[40%] bg-cover bg-no-repeat"
          style={{ backgroundImage: 'url("/slider/bg1.webp")' }}
        />

        {/* Title */}
        <h2 className="w-full text-center text-white md:text-4xl text-2xl font-bold z-10 absolute md:top-24 top-8">
          OUR INDUSTRY FOCUS
        </h2>

        {/* Keen Slider */}
        <div ref={sliderRef} className="keen-slider h-full w-full relative z-10">
          {/* Slide 1 */}
          <div className="keen-slider__slide relative">
            <div className="hidden md:flex flex-col items-center md:flex-row md:justify-center px-4 pt-44 pb-20 w-full h-full">
              <div className="relative">
                <img
                  src="/slider/slider3.webp"
                  alt="Energy Storage Crate"
                  className="h-auto w-[800px] max-w-full rounded-lg shadow-xl mr-32 mb-20"
                />
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
              <div className="hidden md:block absolute bottom-48 right-12 bg-white/85 backdrop-blur-sm px-4 py-[70px] rounded-lg shadow-md border-white/30">
                <Energate className="h-7 w-auto" />
              </div>
            </div>

            {/* Mobile layout */}
            <div className="md:hidden flex flex-col items-center w-full px-4 py-24">
              <div className="border border-white/10 rounded-md bg-gradient-to-tr from-[#0C0D0F] to-[#111214] via-[#111214]/75 backdrop-blur-sm shadow-lg w-full max-w-[700px] overflow-hidden">
                <img
                  src="/slider/slider3.webp"
                  alt="Energy Storage Crate"
                  className="w-full h-auto block border-b border-white/10"
                />
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
            </div>
          </div>

          {/* Slide 2 */}
          <div className="keen-slider__slide flex items-center justify-center text-white">
            Slide 2 Content
          </div>

          {/* Slide 3 */}
          <div className="keen-slider__slide flex items-center justify-center text-white">
            Slide 3 Content
          </div>
        </div>

        {/* Dots */}
        <div className="absolute bottom-10 md:bottom-24 w-full flex justify-center z-20">
          <Dot index={0} />
          <Dot index={1} />
          <Dot index={2} />
        </div>
      </div>
    </div>
  )
}