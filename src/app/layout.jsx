import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: 'Neutron Controls',
    default: 'Where Custom Design Powers Performance',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/css?f%5B%5D=switzer@400,500,600,700&amp;display=swap"
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Neutron Controls"
          href="/blog/feed.xml"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist+Mono:wght@100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="text-gray-950 antialiased">
        {/* Pokeball Background */}
        {/* <div className="hidden 2sm:block absolute top-0 -left-60 w-[50vw] h-[50vh] -z-10">
          <svg
            className="w-full h-full dark:hidden"
            viewBox="0 0 497 554"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M166.037 274.295C207.973 260.77 231.148 216.257 217.801 174.872C204.454 133.487 159.639 110.902 117.704 124.426C75.768 137.95 52.5923 182.463 65.9392 223.849C79.2861 265.234 124.101 287.819 166.037 274.295Z"
              fill="#F6F6F6"
            />
            <path
              d="M306.336 179.698C302.876 180.814 300.596 184.123 300.849 187.71C305.654 258.391 261.492 326.178 190.174 349.178C118.856 372.178 43.3864 342.953 5.99744 282.801C4.1074 279.743 0.323492 278.389 -3.13638 279.505L-103.268 311.798C-107.881 313.286 -110.131 318.47 -108.011 322.752C-48.329 442.796 93.1083 504.068 226.276 461.121C359.444 418.173 438.415 285.819 416.717 153.524C415.936 148.811 411.08 145.918 406.467 147.406L306.336 179.698ZM57.4345 -62.4104C-75.7146 -19.4692 -154.704 112.892 -133.025 245.192C-132.244 249.906 -127.389 252.798 -122.775 251.311L-22.6624 219.024C-19.2026 217.908 -16.9224 214.599 -17.1755 211.012C-21.9747 140.35 22.2001 72.5386 93.5366 49.5322C164.873 26.5258 240.33 55.7754 277.713 115.909C279.603 118.968 283.387 120.321 286.847 119.205L386.96 86.9183C391.573 85.4305 393.823 80.2461 391.703 75.9646C332.021 -44.0799 190.565 -105.346 57.4345 -62.4104Z"
              fill="#F6F6F6"
            />
          </svg>

          <svg
            className="w-full h-full hidden dark:block"
            viewBox="0 0 497 554"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M166.037 274.295C207.972 260.77 231.148 216.257 217.801 174.872C204.454 133.487 159.639 110.902 117.703 124.426C75.7677 137.95 52.592 182.463 65.939 223.849C79.2859 265.234 124.101 287.819 166.037 274.295Z"
              fill="#323848"
            />
            <path
              d="M306.336 179.698C302.876 180.814 300.596 184.123 300.849 187.71C305.654 258.391 261.492 326.178 190.174 349.178C118.856 372.178 43.3862 342.953 5.99726 282.801C4.10722 279.743 0.323309 278.389 -3.13656 279.505L-103.268 311.798C-107.881 313.286 -110.132 318.47 -108.012 322.752C-48.3291 442.796 93.1081 504.068 226.276 461.121C359.444 418.173 438.415 285.819 416.716 153.524C415.936 148.811 411.08 145.918 406.467 147.406L306.336 179.698ZM57.4343 -62.4104C-75.7148 -19.4692 -154.705 112.892 -133.025 245.192C-132.244 249.906 -127.389 252.798 -122.776 251.311L-22.6626 219.024C-19.2027 217.908 -16.9226 214.599 -17.1757 211.012C-21.9749 140.35 22.1999 72.5386 93.5364 49.5322C164.873 26.5258 240.33 55.7754 277.713 115.909C279.603 118.968 283.387 120.321 286.847 119.205L386.96 86.9183C391.573 85.4305 393.823 80.2461 391.703 75.9646C332.021 -44.0799 190.565 -105.346 57.4343 -62.4104Z"
              fill="#323848"
            />
          </svg>
        </div> */}

        {/* Digital Background */}
        <div className="hidden 2sm:block fixed inset-0 -z-25 pointer-events-none digital-backhttps://www.youtube.com/watch?v=oFIDy9i2v8gground">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              {/* Define the pattern of small grey dots in a regular grid */}
              <pattern id="dotPattern" width="16" height="16" patternUnits="userSpaceOnUse">
                <circle cx="8" cy="8" r="2" fill="gray" fillOpacity="0.25" />
              </pattern>

              {/* Bottom Left Corner Gradient */}
              <radialGradient id="cornerGradientBL" cx="0%" cy="100%" r="140%">
                <stop offset="0%" stopColor="white" stopOpacity="1" />
                <stop offset="70%" stopColor="white" stopOpacity="0" />
              </radialGradient>

              {/* Top Right Corner Gradient */}
              <radialGradient id="cornerGradientTR" cx="100%" cy="0%" r="100%">
                <stop offset="0%" stopColor="white" stopOpacity="1" />
                <stop offset="80%" stopColor="white" stopOpacity="0" />
              </radialGradient>

              {/* Bottom Right Corner Gradient */}
              <radialGradient id="cornerGradientBR" cx="100%" cy="100%" r="140%">
                <stop offset="0%" stopColor="white" stopOpacity="1" />
                <stop offset="70%" stopColor="white" stopOpacity="0" />
              </radialGradient>

              {/* Middle Right Gradient */}
              <radialGradient id="middleRightGradient" cx="85%" cy="50%" r="30%">
                <stop offset="0%" stopColor="white" stopOpacity="1" />
                <stop offset="80%" stopColor="white" stopOpacity="0" />
              </radialGradient>

              {/* Create a mask combining the gradients */}
              <mask id="fadeMask">
                {/* Start with a transparent rectangle */}
                <rect x="0" y="0" width="100%" height="100%" fill="black" />

                {/* Apply adjusted gradient to the bottom left corner */}
                <rect
                  x="0"
                  y="50%"
                  width="50%"
                  height="50%"
                  fill="url(#cornerGradientBL)"
                />

                {/* Apply gradient to the top right corner */}
                <rect
                  x="50%"
                  y="0"
                  width="50%"
                  height="50%"
                  fill="url(#cornerGradientTR)"
                />

                {/* Apply gradient to the bottom right corner */}
                <rect
                  x="50%"
                  y="50%"
                  width="50%"
                  height="50%"
                  fill="url(#cornerGradientBR)"
                />

                {/* Apply radial gradient to the middle right area */}
                <rect
                  x="55%"
                  y="0"
                  width="45%"
                  height="100%"
                  fill="url(#middleRightGradient)"
                />
              </mask>
            </defs>

            {/* Apply the dot pattern and mask to a rectangle covering the entire canvas */}
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="url(#dotPattern)"
              mask="url(#fadeMask)"
            />
          </svg>
        </div>

        {/* Gradient Background */}
        <div className="fixed inset-x-0 bottom-0 h-full bg-gradient-to-b from-white to-[#e1ecf6] -z-20 dark:hidden"></div>

        {children}
      </body>
    </html>
  )
}