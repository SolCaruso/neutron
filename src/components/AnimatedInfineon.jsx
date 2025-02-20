'use client'
import React, { useEffect, useRef, useState } from "react";
import InfineonIcon from "@/components/icons/Infineon";

export default function AnimatedInfineon({ className = "", ...props }) {
  const containerRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When any part is visible, mark as active
        setInView(entry.isIntersecting);
      },
      { threshold: 0.01 } // lower threshold so mobile doesn't miss it
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  return (
    <div
  ref={containerRef}
  className={`animate-svg ${inView ? "active" : ""} w-full h-full flex items-center justify-center`}
>
  <InfineonIcon className={className} {...props} />
</div>
  );
}