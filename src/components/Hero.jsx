import Bolt from '@/components/icons/Bolt'
import { Link } from '@/components/link'
import { motion } from "framer-motion";
import MobileLogo from '@/components/logos/MobileLogo'
import BackgroundHero from '@/components/BackgroundHero'
import TagButton from '@/components/TagButton'
import styles from "./WishList.module.css";

export default function Hero() {

    return (
      <div className="overflow-hidden text-gray-900 px-2 max-w-full relative">
      {/* <BackgroundHero/>  */}
      
      {/* Parent Container */}
      <div className="flex flex-col items-center gap-14 py-24 z-10">
        <div className="text-center flex flex-col items-center">
        <div className="flex justify-center mt-8">
          <div className={`${styles.wishlistOuter} ${styles.wishlistAnimate}`}>
            <div className={styles.wishlistAnnouncement} >
            <Bolt className="w-4 text-red-600 ml-2 "/><span className="gradient-text text-transparent animate-gradient text-white text-[12px] font-semibold uppercase tracking-[2px] bg-black py-2 pr-2 rounded-full flex gap-2"> BMS Control & ESS Solutions</span>
            </div>
          </div>
        </div>
          <div className="flex p-6 ">
            {/* <CYE className="2xl:w-[1300px] xl:w-[1100px] w-[1000px] h-auto hidden lg:block max-w-[1000px]"/> */}
            {/* <CYEMobile className="md:w-[600px] xs:w-[400px] w-[300px] lg:w-[700px] h-auto max-w-[1000px]"/> */}
            <h1 className="sm:text-[45px] font-bold sm:leading-normal text-[40px] leading-[47px] uppercase pt-4 sm:pt-0 text-white">test your strength</h1>
          </div>
          <p className="text-white sm:text-[20px] text-lg mx-auto font-medium sm:leading-8 lg:max-w-[700px] max-w-[500px]">
          Where energy storage meets innovation, simplifying management and maximizing efficiency.
          </p>
          
        </div>
  
        <div className="xs:flex hidden justify-center gap-3 px-2.5 py-3 bg-black rounded-2xl backdrop-blur-sm border-[6px] border-white/5">
          <MobileLogo className="self-center mx-2 w-10 text-white"/>
          <Link href="/#" passHref>
          <motion.div
            className={`
              inline-flex items-center justify-center
              min-h-[36px]
              gap-1
              sm:px-4 sm:py-3
              px-3 py-2
              text-gray-800
              bg-[#E6E6E6]
              hover:bg-white
              rounded-md
              border-2-[#FEFEFE]
              cursor-pointer
              transition-all
              duration-100
              ease-in-out
              btn-glass
              uppercase
              text-[10px]
              sm:text-[12px] tracking-[1px] font-bold
            `}
            >    
            Event info
          </motion.div>
            </Link>
            <Link href="/#" passHref>
            <motion.div
            className={`
              inline-flex items-center justify-center
              min-h-[36px]
              gap-1
              sm:px-4 sm:py-3
              px-3 py-2
              text-white
              bg-[#3456ee]
              hover:bg-[#2b48ee]
              rounded-md
              border-2-[#FEFEFE]
              cursor-pointer
              transition-all
              duration-100
              ease-in-out
              btn-glass-blue
              uppercase
              text-[10px]
              sm:text-[12px] tracking-[1px] font-bold
            `}
            >    
            Book demo
          </motion.div>
            </Link>
        </div>
      </div>
      </div>
    );
  }