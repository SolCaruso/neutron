"use client";
import { useEffect, useRef } from "react";
import PartnersLogo from "./PartnersLogo";

export default function Partners() {
  const scrollerRef = useRef(null);

  // list of images
  const images = [
    "/partners/infineon.webp",
    "/partners/matlab.webp",
    "/partners/tasking.webp",
    "/partners/infineon.webp",
    "/partners/matlab.webp",
    "/partners/tasking.webp",
    "/partners/matlab.webp",
  ];

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    // If user hasn't opted in for reduced motion, add the infinite scroll
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // Add data-animated="true"
      scroller.setAttribute("data-animated", "true");

      // Grab the inner container and duplicate its children
      const scrollerInner = scroller.querySelector(".scroller__inner");
      const scrollerContent = Array.from(scrollerInner.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", "true");
        scrollerInner.appendChild(duplicatedItem);
      });
    }
  }, []);

  return (
    <div className="pb-28 relative flex flex-col items-center justify-center">
      <p className="text-center mb-12 text-xl font-medium">
        Trusted by partners worldwide, we build relationships rooted in trust, respect, and shared success.
      </p>

      {/* 
        data-speed and data-direction can be toggled as you like
        e.g. data-speed="fast" or data-direction="right"
      */}
      <div
        ref={scrollerRef}
        className="scroller max-w-7xl"
        data-speed="slow"
        data-direction="right"
      >
        <div className="scroller__inner flex flex-wrap gap-4 py-4">
          {images.map((img, idx) => (
            <PartnersLogo image={img} key={idx} />
          ))}
        </div>
      </div>

      {/* Scoped Styles for the infinite-scroll effect */}
      <style jsx>{`
        /* Base "scroller" styles */
        .scroller[data-animated="true"] {
          overflow: hidden;
          /* The mask / gradient to hide edges */
          -webkit-mask: linear-gradient(
            90deg,
            transparent,
            white 20%,
            white 80%,
            transparent
          );
          mask: linear-gradient(
            90deg,
            transparent,
            white 20%,
            white 80%,
            transparent
          );
        }

        /* Inner container that actually slides */
        .scroller[data-animated="true"] .scroller__inner {
          width: max-content;
          flex-wrap: nowrap;
          animation: scroll var(--_animation-duration, 40s)
            var(--_animation-direction, forwards) linear infinite;
        }

        /* Direction settings */
        .scroller[data-direction="right"] {
          --_animation-direction: reverse;
        }
        .scroller[data-direction="left"] {
          --_animation-direction: forwards;
        }

        /* Speed settings */
        .scroller[data-speed="fast"] {
          --_animation-duration: 20s;
        }
        .scroller[data-speed="slow"] {
          --_animation-duration: 60s;
        }

        /* Keyframes for continuous scrolling */
        @keyframes scroll {
          to {
            transform: translate(calc(-50% - 0.5rem));
          }
        }
      `}</style>
    </div>
  );
}