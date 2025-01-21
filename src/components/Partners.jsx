import PartnersLogo from '@/components/PartnersLogo';
import useMeasure from "react-use-measure";
import { animate, useMotionValue } from "framer-motion";
import { useEffect } from 'react';
import { motion } from "framer-motion";

export default function Partners() {
  const images = [
    "/partners/infineon.webp",
    "/partners/matlab.webp",
    "/partners/tasking.webp",
    "/partners/infineon.webp",
    "/partners/matlab.webp",
    "/partners/tasking.webp",
    "/partners/matlab.webp",
  ];

  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0); // Start at 0 for on-screen

  useEffect(() => {
    if (width === 0) return; // Avoid issues when width is unmeasured

    const startPosition = 0; // Start on-screen
    const finalPosition = width / 2 + 8; // Scroll off-screen to the right

    const controls = animate(xTranslation, [startPosition, finalPosition], {
      ease: "linear",
      duration: 25,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return () => {
      if (controls) controls.stop();
    };
  }, [width]);

  return (
    <div className="pb-28">
      <p className="text-center mb-12 text-xl font-medium">
        Trusted by partners worldwide, we build relationships rooted in trust, respect, and shared success.
      </p>
      <motion.div className="absolute right-0 flex gap-4" ref={ref} style={{ x: xTranslation }}>
        {[...images, ...images].map((item, idx) => (
          <PartnersLogo image={item} key={idx} />
        ))}
      </motion.div>
    </div>
  );
}