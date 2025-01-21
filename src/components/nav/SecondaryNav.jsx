"use client"
import React from "react"
import TopRight from "@/components/icons/TopRight"

export default function SecondaryNav() {
  return (
    <div className="px-8">
      <div className="noise-bg h-8 flex items-center text-white text-sm rounded-b-lg max-w-7xl mx-auto overflow-hidden">
        <div className="marquee">
          <div className="track">
            <MarqueeText />
            <MarqueeText />
            <MarqueeText />
            <MarqueeText /> 
          </div>
        </div>

        <style jsx>{`
          .noise-bg {
            background-color: #435FE1;
            background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22100%22%20height%3D%22100%22%3E%3Cdefs%3E%3Cfilter%20id%3D%22noiseFilter%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%2212%22%20numOctaves%3D%221%22%20seed%3D%221%22%20stitchTiles%3D%22stitch%22/%3E%3CfeColorMatrix%20type%3D%22saturate%22%20values%3D%220%22/%3E%3CfeComponentTransfer%3E%3CfeFuncR%20type%3D%22table%22%20tableValues%3D%220%200%22/%3E%3CfeFuncG%20type%3D%22table%22%20tableValues%3D%220%200%22/%3E%3CfeFuncB%20type%3D%22table%22%20tableValues%3D%220%200%22/%3E%3CfeFuncA%20type%3D%22table%22%20tableValues%3D%220.2%200%22/%3E%3C/feComponentTransfer%3E%3C/filter%3E%3C/defs%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20filter%3D%22url(%23noiseFilter)%22/%3E%3C/svg%3E");
            background-repeat: repeat;
            background-size: 200%;
          }

          .marquee {
            overflow: hidden;
            position: relative;
          }

          .track {
            display: flex;
            white-space: nowrap;
            animation: marquee 20s linear infinite;
          }

          @keyframes marquee {
            from {
              transform: translateX(-50%); /* Start halfway (since content is duplicated) */
            }
            to {
              transform: translateX(0); /* Reset position to scroll left to right */
            }
          }
        `}</style>
      </div>
    </div>
  )
}

function MarqueeText() {
  return (
    <span className="inline-block whitespace-nowrap font-medium">
      The Battery Show Europe | Event between June 3–5, 2025
      <a href="#" className="underline font-normal px-8">
        Learn more <TopRight className="inline-block w-4 h-4 mb-1" />
      </a>
    </span>
  )
}