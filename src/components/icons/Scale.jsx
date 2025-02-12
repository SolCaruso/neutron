import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 37 40"
    {...props}
  >
    <path
      stroke="#478BEB"
      strokeLinecap="round"
      strokeWidth={6}
      d="M5 36h18.5C29.299 36 34 31.299 34 25.5v0C34 19.701 29.299 15 23.5 15H13.345"
      opacity={0.6}
    />
    <path
      stroke="#478BEB"
      strokeLinecap="round"
      strokeWidth={6}
      d="M32 4.5H13.5C7.701 4.5 3 9.201 3 15v0c0 5.799 4.701 10.5 10.5 10.5h10.042"
    />
    <mask
      id="b1"
      width={35}
      height={28}
      x={0}
      y={1}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path
        stroke="#000"
        strokeLinecap="round"
        d="M5.5 15a8 8 0 0 1 8-8H32a2.5 2.5 0 0 0 0-5H13.5C6.32 2 .5 7.82.5 15s5.82 13 13 13h10.042a2.5 2.5 0 0 0 0-5H13.5a8 8 0 0 1-8-8Z"
        opacity={0.6}
      />
    </mask>
    <g
      filter="url(#a1)"
      mask="url(#b1)"
      style={{
        mixBlendMode: "overlay",
      }}
    >
      <path
        fill="#B3B3B3"
        d="M5.277 8.354c-4.639 6.863-1.631 17.605-8.266 13.12C-9.624 16.992-11.242 7.792-6.603.929-1.963-5.936 7.175-7.865 13.81-3.38S9.916 1.49 5.277 8.354"
      />
    </g>
    <mask
      id="d1"
      width={37}
      height={38}
      x={0}
      y={1}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path
        fill="#42A9F3"
        fillRule="evenodd"
        d="M13.5 7.5a7.5 7.5 0 0 0 0 15h10.042a3 3 0 0 1 0 6H13.5C6.044 28.5 0 22.456 0 15S6.044 1.5 13.5 1.5H32a3 3 0 1 1 0 6zm10 25.5a7.5 7.5 0 0 0 0-15H13.345a3 3 0 1 1 0-6H23.5C30.956 12 37 18.044 37 25.5S30.956 39 23.5 39H5a3 3 0 1 1 0-6z"
        clipRule="evenodd"
      />
    </mask>
    <g
      filter="url(#c1)"
      mask="url(#d1)"
      style={{
        mixBlendMode: "plus-lighter",
      }}
    >
      <ellipse cx={55.5} cy={-2.5} fill="#149CB7" rx={39.5} ry={25.5} />
    </g>
    <defs>
      <filter
        id="a1"
        width={31.195}
        height={34.336}
        x={-12.25}
        y={-8.797}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_3162_4344"
          stdDeviation={1.5}
        />
      </filter>
      <filter
        id="c1"
        width={107}
        height={79}
        x={2}
        y={-42}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_3162_4344"
          stdDeviation={7}
        />
      </filter>
    </defs>
  </svg>
)
export default SvgComponent
