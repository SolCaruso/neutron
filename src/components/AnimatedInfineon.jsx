'use client'
import React, { useEffect, useRef, useState } from "react";
import InfineonIcon from "@/components/icons/Infineon";

export default function AnimatedInfineon() {
  const containerRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When at least 50% is visible, mark as active
        setInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
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
      className={`animate-svg ${inView ? "active" : ""}`}
    >
      <InfineonIcon />
    </div>
  );
}