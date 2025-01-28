"use client"
import { useState, useEffect } from 'react'

export default function DigitalBackground() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="hidden 2sm:block fixed inset-0 -z-25 pointer-events-none">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Dot pattern */}
          <pattern
            id="dotPattern"
            width="12"
            height="12"
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx="6"
              cy="6"
              r="1.5"
              fill="gray"
              fillOpacity="0.25"
            />
          </pattern>

          {/* Cursor spotlight gradient */}
          <radialGradient
            id="cursorGradient"
            gradientUnits="userSpaceOnUse"
            cx={cursorPos.x}
            cy={cursorPos.y}
            // Adjust this radius to control the spotlight size
            r={600}
          >
            <stop offset="0%" stopColor="white" />
            <stop offset="100%" stopColor="black" />
          </radialGradient>

          {/* Center mask gradient */}
          <radialGradient
            id="centerMaskGradient"
            gradientUnits="userSpaceOnUse"
            cx="50%"
            cy="50%"
            // Make this larger or smaller to taste
            r={900}
          >
            <stop offset="0%" stopColor="black" />
            <stop offset="100%" stopColor="white" />
          </radialGradient>

          {/* Combined mask: black hides dots, white shows them */}
          <mask id="cursorMask">
            {/* Cursor spotlight */}
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="url(#cursorGradient)"
            />
            {/* Soft-edged circle in center */}
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="url(#centerMaskGradient)"
              style={{ mixBlendMode: "multiply" }}
            />
          </mask>
        </defs>

        {/* Dots across entire screen, masked by the combined gradients */}
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="url(#dotPattern)"
          mask="url(#cursorMask)"
        />
      </svg>
    </div>
  )
}