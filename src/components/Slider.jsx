import React from "react"
import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react"
import Energate from "@/components/logos/Energate"
import Energy from "@/components/icons/Energy"

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
      <div className="relative w-full max-w-7xl h-[800px] bg-black overflow-hidden rounded-2xl">
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
          <div className="keen-slider__slide flex items-center justify-center">
            {/* Main content (e.g. the crate image + floating cards) */}
            <div className="relative">
              {/* Crate image */}
              <img
                src="/slider/slider3.jpg"
                alt="Energy Storage Crate"
                className="h-auto w-[700px] max-w-full rounded-xl shadow-xl"
              />
              {/* Floating info card */}
              <div className="absolute top-4 right-4 lg:right-8 border-white/10 border
              bg-gradient-to-tr from-[#0C0D0F] to-[#111214] via-[#111214]/75 
                              backdrop-blur-sm text-white p-4 w-[280px] 
                              rounded-lg shadow-lg"
              >
                <h3 className="text-lg font-bold flex items-center mb-2">
                  {/* Icon */}
                  <Energy/>
                  Energy Storage
                </h3>
                <p className="text-sm text-gray-200 mb-3 leading-snug">
                  We deliver <strong>cutting-edge</strong> energy storage
                  control solutions designed to maximize efficiency and
                  reliability in energy and industrial power systems.
                </p>
                <button className="text-sm font-semibold bg-blue-600 
                                   hover:bg-blue-500 transition-colors 
                                   px-4 py-2 rounded"
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Small white logo card */}
            <div className="absolute bottom-8 right-8 bg-white p-4 rounded-lg shadow-md">
              <Energate className="h-12 w-auto" />
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