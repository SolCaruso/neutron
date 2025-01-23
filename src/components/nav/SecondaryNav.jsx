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
    <div className="px-8">
      <div className="noise-bg h-12 flex items-center text-white text-sm rounded-b-xl max-w-8xl mx-auto">
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
          background-color: #435fe1;
          background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22100%22%20height%3D%22100%22%3E%3Cdefs%3E%3Cfilter%20id%3D%22noiseFilter%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%2212%22%20numOctaves%3D%221%22%20seed%3D%221%22%20stitchTiles%3D%22stitch%22/%3E%3CfeColorMatrix%20type%3D%22saturate%22%20values%3D%220%22/%3E%3CfeComponentTransfer%3E%3CfeFuncR%20type%3D%22table%22%20tableValues%3D%220%200%22/%3E%3CfeFuncG%20type%3D%22table%22%20tableValues%3D%220%200%22/%3E%3CfeFuncB%20type%3D%22table%22%20tableValues%3D%220%200%22/%3E%3CfeFuncA%20type%3D%22table%22%20tableValues%3D%220.2%200%22/%3E%3C/feComponentTransfer%3E%3C/filter%3E%3C/defs%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20filter%3D%22url(%23noiseFilter)%22/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 200%;
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
    <li className="inline-block whitespace-nowrap font-medium text-base">
      The Battery Show Europe | Event June 3–5, 2025
      <a href="#" className="underline pr-8 pl-12 font-normal" style={{ textUnderlineOffset: '6px' }}>
        Learn more <TopRight className="inline-block w-4 h-4 mb-1" />
      </a>
    </li>
  );
}