// card.jsx

import React, {useState} from 'react';
import Image from 'next/image';
import TopRight from '@/components/icons/TopRight';
import { AnimatePresence, motion } from "framer-motion";

function Card({ image }) {

    const [showOverlay, setShowOverlay] = useState(false);

  return (
    <motion.div className="relative overflow-hidden h-[300px] min-w-[400px] bg-slate-400 rounded-2xl flex justify-center item-center"
        onHoverStart={() => setShowOverlay(true)}
        onHoverEnd={() => setShowOverlay(false)}
    >
        <AnimatePresence>
            {showOverlay && (
                <motion.div className="absolute inset-0 z-10 flex justify-center items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <div className="absolute bg-black pointer-events-none opacity-50 h-full w-full "></div>
                    <motion.h1 className="bg-white font-semibold text-sm z-10 px-3 py-2 rounded-full flex items-center ga-[0.5ch] hover:opacity-75 hover: cursor-pointer"  
                        initial={{ y:10 }}
                        animate={{ y:0 }}
                        exit={{ y:10 }}
                    >
                        <span>Explore Now</span>
                        <TopRight className="h-4 w-4 p-[1px] ml-1 stroke-white bg-black rounded-full" />
                    </motion.h1>
                </motion.div>
            )}
        </AnimatePresence>
      <Image 
        src={image.src}  
        alt={image.alt} 
        fill 
        style={{ objectFit: 'cover' }} 
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 20vw"
        priority
      />
    </motion.div>
  );
}

export default Card;