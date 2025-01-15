"use client"
import React from "react"

export default function SecondaryNav() {
  return (
    <div className="px-8">
      <div className=" h-8 overflow-hidden bg-[#344CB7] flex items-center text-white text-sm rounded-b-lg max-w-7xl mx-auto">
        {/* 
          A flex container with width:300%. 
          We insert 3 copies of the same text, side by side. 
        */}
        <div className="marquee flex">
          <MarqueeText />
          <MarqueeText />
          <MarqueeText />
        </div>

        <style jsx>{`
          .marquee {
            /* 
              Animate from translateX(0) to translateX(-33.3333%). 
              - At 0%, copy #1 is fully visible, copy #2 is partially visible on the right, 
                and copy #3 is even further right. 
              - By 100%, the first copy has fully scrolled out, and the second is fully in. 
                Meanwhile, #3 is partially visible, so there's never a gap. 
            */
            animation: marquee 60s linear infinite;
          }

          @keyframes marquee {
            0% {
              transform:  translateX(0);
            }
            100% {
              transform: translateX(-33.3333%);
            }
          }
        `}</style>
      </div>
    </div>
  )
}

/** The repeated text content (used 3 times inside .marquee). */
function MarqueeText() {
  return (
    <>
      <span className="inline-block whitespace-nowrap font-medium">
        The Battery Show Europe  <span className="px-1.5">|</span> Event June 3-5, 2025
        <a href="#" className="underline font-normal px-8">
          Learn more?
        </a>
      </span>
      <span className="inline-block whitespace-nowrap font-medium">
        The Battery Show Europe <span className="px-1.5">|</span> Event June 3-5, 2025
        <a href="#" className="underline font-normal px-8">
          Learn more?
        </a>
      </span>
      <span className="inline-block whitespace-nowrap font-medium">
        The Battery Show Europe  <span className="px-1.5">|</span> Event June 3-5, 2025
        <a href="#" className="underline font-normal px-8">
          Learn more?
        </a>
      </span>
      {/* ...Add as many repeated items as you want... */}
    </>
  )
}