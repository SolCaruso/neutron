import * as React from "react";

const SVGIcon = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 23.389 17.998"
    fill="none"
    className={className}
    {...props}
  >
    <g fill="currentColor" fillOpacity={0.85}>
      <path d="M3.066 17.979h16.895c2.05 0 3.066-1.006 3.066-3.018V5.518c0-2.012-1.015-3.018-3.066-3.018h-1.348V1.191C18.613.45 18.183 0 17.432 0H14.55c-.742 0-1.172.45-1.172 1.191V2.5h-3.72V1.191C9.658.45 9.228 0 8.476 0H5.596c-.752 0-1.172.45-1.172 1.191V2.5H3.066C1.026 2.5 0 3.506 0 5.518v9.443c0 2.012 1.025 3.018 3.066 3.018Zm-1.494-3.106V5.605c0-1.015.537-1.533 1.514-1.533H19.94c.967 0 1.514.518 1.514 1.533v9.268c0 1.016-.547 1.533-1.514 1.533H3.086c-.977 0-1.514-.517-1.514-1.533Z" />
      <path d="M8.418 10.87c0 .185.146.312.332.312h2.422l-1.299 3.466c-.166.46.332.713.625.332l3.906-4.902a.461.461 0 0 0 .127-.283c0-.176-.156-.313-.341-.313h-2.413l1.29-3.457c.165-.468-.323-.722-.616-.341l-3.916 4.912c-.068.097-.117.185-.117.273Z" />
    </g>
  </svg>
);

export default SVGIcon;