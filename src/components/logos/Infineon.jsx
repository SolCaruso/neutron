import * as React from "react"

const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-108.701 -69.945 1120.85 519.064"
    {...props}
  >
    <defs>
      <linearGradient
        id="logoGradient"
        x1="0"
        y1="0"
        x2="1"
        y2="1"
        gradientUnits="objectBoundingBox"
      >
        <stop offset="0%" stopColor="#676666" />
        <stop offset="100%" stopColor="#E3E1E1" />
      </linearGradient>
    </defs>
    <path
      fill="url(#logoGradient)"
      d="M301.669 18.245s-23.65 3.864-48.92 10.39c-19.11 4.908-32.32 9.033-37.28 10.6v-.157c-7.257 2.245-14.31 4.647-21.25 7.048a39.799 39.799 0 0 1 11.85 27.05 648.363 648.363 0 0 1 17.18-7.205v-.052c6.526-2.35 24.17-8.77 39.37-13.89 18.95-6.422 44.69-14.31 44.69-14.31 74.92-20.68 157.9-32.68 235.2-32.11-89.12-5.326-170.2-.156-240.8 12.64m709.3 281.9c-80.2 72.83-262.9 115.3-471.6 115.3-283.5 0-466.7-83.17-479.5-193.2-4.751-41.35 27.83-81.34 81.97-115.5-9.555-7.205-15.77-18.53-16.03-31.33-78.16 40.99-122.4 94.92-122.4 149.7 0 121.2 216.8 224 538.9 219.5 219.1-3.028 385.6-65.52 469.8-142l-1.253-2.454"
    />
    <path
      fill="url(#logoGradient)"
      d="M136.469 74.645c0-16.34 13.21-29.6 29.55-29.6s29.6 13.26 29.6 29.6-13.26 29.55-29.6 29.55-29.55-13.21-29.55-29.55m16.5 222.5v-169.6l27.88-3.707v173.3h-27.88m121.6.007v-97.06c0-11.07-.992-15.61-3.185-18.74-1.984-2.819-5.43-3.655-9.137-3.655-5.378 0-13.47 4.542-20.15 12.74v106.7h-27.72v-105.8c0-17.33-2.245-26.99-3.707-34.93l26.05-6.787c.731 2.558 3.185 9.607 3.446 17.02 7.101-8.824 20.15-16.19 32.89-16.19 9.868 0 17.7 3.968 22.61 10.23 5.691 7.101 6.631 16.71 6.631 26.37v110.1h-27.72m118.392-179.398c-3.185-2.558-8.354-4.229-13.26-4.229-6.892 0-11.07 6.526-11.07 17.6v22.09h26.05l-5.169 24.43h-20.88v119.5h-28.51v-119.5h-9.555v-24.43h9.555s-.47-9.92-.47-19c0-21.56 7.101-32.89 13.73-38.58 6.683-5.378 14.25-7.101 21.41-7.101 10.29 0 18.69 2.297 26.05 7.675l-7.884 21.56m23.103 179.385v-143l28.25-3.707v146.7h-28.25zm13.52-164c-10.08 0-18.17-8.197-18.17-18.43 0-10.18 8.354-18.38 18.64-18.38 10.08 0 18.22 8.197 18.22 18.38 0 10.23-8.354 18.43-18.69 18.43m110.48 164v-97.06c0-11.07-.94-15.61-3.185-18.74-1.932-2.819-5.378-3.655-9.085-3.655-5.43 0-13.52 4.542-20.15 12.74v106.7h-27.78v-105.8c0-17.33-2.193-26.99-3.655-34.93l26.05-6.787c.731 2.558 3.185 9.607 3.446 17.02 7.101-8.824 20.1-16.19 32.89-16.19 9.816 0 17.7 3.968 22.61 10.23 5.639 7.101 6.631 16.71 6.631 26.37v110.1h-27.78m116.408-113.798c-2.715-6.526-7.153-10.49-14.25-10.49-12.53 0-17.96 11.64-18.43 37.17h35.87c0-11.33-.992-20.99-3.185-26.68zm-32.68 49.65v2.872c0 9.346.73 17.86 4.177 25.27 4.177 8.771 11.28 13.63 19.89 13.63 10.08 0 18.69-5.117 27.31-14.2l11.02 20.68c-12.27 13.37-25.53 19.32-40.78 19.32-32.68 0-51.38-28.09-51.38-75.76 0-24.7 4.229-42.87 13.31-56.49 8.563-12.74 20.36-19 34.62-19 13.52 0 24.33 5.43 31.95 15.35 10.08 13.05 13.99 30.65 13.99 62.13v6.213h-64.12m131.393-58.165c-18.69 0-18.69 34.04-18.69 48.82 0 15.61-.47 51.64 19.42 51.64 18.43 0 18.43-36.03 18.43-51.06 0-15.61.731-49.39-19.16-49.39zm0 126c-38.32 0-48.4-40.83-48.66-76.02-.261-35.5 12.53-75.5 48.92-75.5 28.72 0 49.34 25.84 49.34 74.92 0 36.6-12.01 76.59-49.6 76.59m133.2-3.69v-97.06c0-11.07-.992-15.61-3.237-18.74-1.932-2.819-5.378-3.655-9.085-3.655-5.378 0-13.52 4.542-20.15 12.74v106.7h-27.72v-105.8c0-17.33-2.245-26.99-3.707-34.93l26.05-6.787c.731 2.558 3.185 9.607 3.446 17.02 7.101-8.824 20.1-16.19 32.89-16.19 9.816 0 17.7 3.968 22.61 10.23 5.639 7.101 6.631 16.71 6.631 26.37v110.1h-27.72"
    />
  </svg>
)

export default SvgComponent