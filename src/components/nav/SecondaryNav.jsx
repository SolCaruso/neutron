"use client";
import React, { useEffect, useRef } from "react";
import TopRight from "@/components/icons/TopRight";

export default function SecondaryNav() {
  const scrollerRef = useRef(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    // Bail out if no scroller or user prefers reduced motion
    if (!scroller || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Add "data-animated" attribute to enable the CSS animation
    scroller.setAttribute("data-animated", "true");

    // Duplicate the items inside .scroller__inner to achieve infinite scrolling
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerItems = Array.from(scrollerInner.children);

    scrollerItems.forEach((item) => {
      const clone = item.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      scrollerInner.appendChild(clone);
    });
  }, []);

  return (
    <div className="md/lg:px-4">
      <div className="noise-bg h-11 flex items-center text-white text-sm md/lg:rounded-b-lg max-w-8xl mx-auto">
        {/* 
          data-speed can be "fast" (20s) or "slow" (60s). 
          data-direction can be "left" or "right".
          Adjust or remove them as you like.
        */}
        <div ref={scrollerRef} className="scroller" data-speed="slow" data-direction="right">
          <ul className="scroller__inner">
            {/* Repeat these <li> items however many times you want (the JS will clone them again) */}
            <MarqueeItem />
            <MarqueeItem />
            <MarqueeItem />
            <MarqueeItem />
          </ul>
        </div>
      </div>

      <style jsx>{`

        .noise-bg {
          position: relative;
          background: transparent; /* Ensure background remains transparent */
          border-bottom-radius: 20px; /* Adjust this value for rounded corners */
          padding: 20px; /* Optional: Prevent text from touching edges */
          overflow: hidden; /* Ensures blur effect respects border-radius */
          transition: color 0.3s ease-in-out; /* Smooth text color transition */
          z-index: 1; /* Keeps content above */
          color: #BDBDBD;
        }

        /* Blur Background */
        .noise-bg::before {
          content: "";
          position: absolute;
          inset: 0; /* Covers entire parent */
          background: rgba(67, 95, 225, 0.7); /* Semi-transparent blue */
          backdrop-filter: blur(10px); /* Apply blur effect */
          -webkit-backdrop-filter: blur(10px); /* Safari support */
          border-radius: inherit; /* Ensures blur effect follows border radius */
          z-index: -1; /* Keeps blur behind content */
        }

        /* Hover Effect: Change Text Color */
        .noise-bg:hover {
          color: white;
          cursor: pointer;
          
        }
          

        /* ========================
          SCROLLER BASE STYLES
        ======================== */
        .scroller {
          /* The container for our scroller */
          position: relative;
          overflow: hidden;
          /* 
            Optional: control the scroller width. 
            Or let your outer .noise-bg container handle it.
          */
          width: 100%;
        }
        .scroller__inner {
          display: flex;
          flex-wrap: nowrap;
          white-space: nowrap;
        }

        /* 
          When we add data-animated="true",
          we mask out the edges and animate the contents. 
        */
        .scroller[data-animated="true"] {
          -webkit-mask: linear-gradient(90deg, transparent, white 5%, white 95%, transparent);
          mask: linear-gradient(90deg, transparent, white 5%, white 95%, transparent);
        }
        .scroller[data-animated="true"] .scroller__inner {
          /* 
            Make it a single row wide enough to scroll 
            The animation keyframe is called scroll.
          */
          width: max-content;
          animation: scroll var(--_animation-duration, 40s) var(--_animation-direction, forwards) linear infinite;
        }

        /* ========================
          SPEED + DIRECTION
        ======================== */
        .scroller[data-direction="right"] {
          --_animation-direction: reverse;
        }
        .scroller[data-direction="left"] {
          --_animation-direction: normal;
        }
        .scroller[data-speed="fast"] {
          --_animation-duration: 20s;
        }
        .scroller[data-speed="slow"] {
          --_animation-duration: 120s;
        }

        @keyframes scroll {
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}

function MarqueeItem() {
  return (
    <li className="inline-block whitespace-nowrap font-medium text-[15px]">
      INTERSOLAR | Event Feb 25–27, 2025
      <a href="https://www.intersolar.us/" target="_blank" className="underline pr-8 pl-12 font-normal" style={{ textUnderlineOffset: '6px' }}>
        Learn more <TopRight className="inline-block w-4 h-4 mb-1" />
      </a>
    </li>
  );
}