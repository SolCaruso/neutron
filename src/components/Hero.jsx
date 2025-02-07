import Bolt from '@/components/icons/Bolt'
import { Link } from '@/components/link'
import { motion } from "framer-motion";
import MobileLogo from '@/components/logos/MobileLogo'
import styles from "./WishList.module.css";
import Info from '@/components/icons/Info'
import Book from '@/components/icons/Book'

export default function Hero() {

    return (
      <div className="overflow-hidden text-gray-900 px-2 max-w-full relative">
      
      {/* Parent Container */}
      <div className="flex flex-col items-center gap-14 py-12 sm:py-24 z-10">
        <div className="text-center flex flex-col items-center">

          <div className="flex justify-center mt-8">
            <div className={`${styles.wishlistOuter} ${styles.wishlistAnimate}`}>
              <div className={styles.wishlistAnnouncement}>
              <Bolt className="w-4 text-red-600 ml-2"/><span className="gradient-text text-transparent animate-gradient text-white text-[16px] font-semibold uppercase tracking-[2px] bg-black py-2 pr-2 rounded-full flex gap-2 just"> ESS Solutions</span>
              </div>
            </div>
          </div>

          <div className="relative flex flex-col items-center text-center pt-8">
            <div className="absolute inset-0 bg-gradient-radial from-white via-gray-300 to-black w-full h-full pointer-events-none"></div>
            <h1 className="sm:text-[45px] font-bold sm:leading-normal text-[40px] leading-[47px] uppercase pt-4 sm:pt-0 text-white tracking-[3px] gradient-text text-transparent animate-gradient">
              test your strength
            </h1>
            <p className="text-white sm:text-[20px] text-lg mx-auto sm:leading-8 lg:max-w-[600px] max-w-[500px] mask-text pt-4">
              Where energy storage meets innovation, simplifying management and maximizing efficiency.
            </p>
          </div>
        </div>

        <div
      className="
        relative
        xs:flex hidden
        justify-center
        gap-3
        rounded-lg
        backdrop-blur-sm
        [--radius:theme(borderRadius.xl)]
        [--padding:theme(spacing.2)]
      "
    >
      {/* Glow backdrop behind everything */}
      <div className="backdrop"/>

      {/* Frame layer: subtle ring + shadow */}
      <div
        className="
          absolute
          -inset-[var(--padding)]
          rounded-2xl
          shadow-sm
          bg-black/20
          ring-1 ring-gray-100/5
        "
      />

      {/* Inner content (black box) with final glow + ring */}
      <div
        className="
          xs:flex hidden
          justify-center
          gap-3
          px-2.5 py-3
          backdrop-blur-sm
          bg-black
          rounded-[10px]
          shadow-glow
          ring-1 ring-gray-100/5
        "
      >
        <MobileLogo className="self-center mx-2 w-10 text-white" />

        <Link href="#" passHref>
          <motion.div
            className="
              inline-flex 
              items-center 
              justify-center
              gap-2
              min-h-[40px]
              sm:min-h-[44px]
              px-3
              sm:px-3.5 py-1.5
              text-[12px]
              sm:text-[14px] 
              font-semibold 
              leading-[16px]
              tracking-[0.2px]
              whitespace-nowrap
              cursor-pointer
              border-none
              rounded-md
              transition-colors
              duration-200
              ease-in-out
              bg-[#E6E6E6]
              hover:bg-[#FFF]
              shadow-[0_0_2px_rgba(0,0,0,0.5),_0_0_14px_rgba(255,255,255,0.19),_inset_0_-1px_0.4px_rgba(0,0,0,0.2)]
              opacity-90
              hover:opacity-100
              text-black
              uppercase
            "
          >
            <Info className="w-5 h-auto hover:text-black" />    
            <span>Event Info</span>
          </motion.div>
        </Link>

        <Link href="#" passHref>
          <motion.div
            className="
              inline-flex 
              items-center 
              justify-center
              gap-2
              min-h-[40px]
              sm:min-h-[44px]
              px-3
              sm:px-3.5 py-1.5
              uppercase
              text-[12px]
              sm:text-[14px]  
              font-semibold 
              leading-[16px]
              tracking-[0.2px]
              whitespace-nowrap
              cursor-pointer
              border-none
              rounded-md
              transition-colors
              duration-200
              ease-in-out
              bg-[#4A64E0]
              hover:bg-[#5773ff]
              text-[#DBE1F9]
              shadow-[0_0_2px_rgba(0,0,0,0.5),_0_0_14px_rgba(255,255,255,0.19),_inset_0_-1px_0.4px_rgba(0,0,0,0.2)]
              opacity-90
              hover:opacity-100
            "
          >
            <Book className="w-5 h-auto" />    
            <span>Book Demo</span>
          </motion.div>
        </Link>
      </div>
    </div>
      </div>
      </div>
    );
  }