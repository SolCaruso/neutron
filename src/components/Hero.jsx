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
      <div className="flex flex-col items-center gap-14 py-24 z-10">
        <div className="text-center flex flex-col items-center">

          <div className="flex justify-center mt-8">
            <div className={`${styles.wishlistOuter} ${styles.wishlistAnimate}`}>
              <div className={styles.wishlistAnnouncement}>
              <Bolt className="w-4 text-red-600 ml-2 "/><span className="gradient-text text-transparent animate-gradient text-white text-[12px] font-semibold uppercase tracking-[2px] bg-black py-2 pr-2 rounded-full flex gap-2 just"> BMS Control & ESS Solutions</span>
              </div>
            </div>
          </div>

          <div className="relative flex flex-col items-center text-center pt-8">
            <div className="absolute inset-0 bg-gradient-radial from-white via-gray-300 to-black w-full h-full pointer-events-none"></div>
            <h1 className="sm:text-[45px] font-bold sm:leading-normal text-[40px] leading-[47px] uppercase pt-4 sm:pt-0 text-white  tracking-[3px] gradient-text text-transparent animate-gradient">
              test your strength
            </h1>
            <p className="text-white sm:text-[20px] text-lg mx-auto sm:leading-8 lg:max-w-[600px] max-w-[500px] mask-text pt-4">
              Where energy storage meets innovation, simplifying management and maximizing efficiency.
            </p>
          </div>
          
        </div>
  
        <div className="xs:flex hidden justify-center gap-3 px-2.5 py-3 bg-black rounded-2xl backdrop-blur-sm border-[6px] border-white/5">
          <MobileLogo className="self-center mx-2 w-10 text-white"/>
          <Link href="/#" passHref>
          <motion.div
            className={`
              inline-flex items-center justify-center
              gap-1
              sm:pl-4 sm:pr-5 sm:py-2.5
              px-3 py-2
              text-gray-800
              hover:text-black
              bg-[#E6E6E6]
              hover:bg-white
              rounded-md
              border-2-[#FEFEFE]
              cursor-pointer
              transition-all
              duration-100
              ease-in-out
              btn-glass
              text-[14px]
              sm:text-[16px]  font-semibold
              
            `}
            >
              <Info className="w-5 h-auto mr-2 hover:text-black"/>    
            Event info
          </motion.div>
            </Link>
            <Link href="/#" passHref>
            <motion.div
              className={`
              inline-flex items-center justify-center
              gap-1
              sm:pl-4 sm:pr-5 sm:py-2.5
              px-3 py-2
              text-[#E6E6E6]
              bg-[#3C53C4]
              hover:bg-[#3f59d7]
              rounded-md
              border-2-[#5C5FFF]
              cursor-pointer
              transition-all
              duration-100
              ease-in-out
              btn-glass-blue
              text-[14px]
              sm:text-[16px]  font-semibold
              
              `}
            >
              <Book className="w-5 h-auto mr-2 text-[#E6E6E6]"/>    
            Book demo
          </motion.div>
            </Link>
        </div>
      </div>
      </div>
    );
  }