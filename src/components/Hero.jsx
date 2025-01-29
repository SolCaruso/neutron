import Bolt from '@/components/icons/Bolt'
import { Link } from '@/components/link'
import { motion } from "framer-motion";
import MobileLogo from '@/components/logos/MobileLogo'

export default function Hero() {

    return (
      <div className="overflow-hidden text-gray-900 px-2 max-w-full">
      {/* Parent Container */}
      <div className="flex flex-col items-center gap-14 py-24">
        <div className="text-center flex flex-col items-center">
          <span className=" text-white text-[12px] font-semibold uppercase tracking-[2px] bg-black py-2 px-6 rounded-full flex gap-2">
          <Bolt className="w-4"/> ESS Solutions
          </span>
          <div className="flex p-6 ">
            {/* <CYE className="2xl:w-[1300px] xl:w-[1100px] w-[1000px] h-auto hidden lg:block max-w-[1000px]"/> */}
            {/* <CYEMobile className="md:w-[600px] xs:w-[400px] w-[300px] lg:w-[700px] h-auto max-w-[1000px]"/> */}
            <h1 className="sm:text-[60px] font-semibold sm:leading-normal text-5xl">Test your strength.</h1>
          </div>
          <p className="text-black sm:text-[21px] text-lg mx-auto font-medium sm:leading-8 lg:max-w-[700px] max-w-[500px]">
          Where energy storage meets innovation, simplifying management and maximizing efficiency.
          </p>
        </div>
  
        <div className="xs:flex hidden justify-center gap-3 px-2.5 py-3 bg-black rounded-2xl backdrop-blur-sm border-8 border-white/50">
          <MobileLogo className="self-center mx-2"/>
        <Link href="/#" passHref>
              <motion.div
                className="
                  inline-flex 
                  items-center 
                  justify-center
                  px-4 py-3
                  text-[14px] 
                  font-bold 
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
                "
              >
                <span>EVENT INFO</span>
              </motion.div>
            </Link>
            <Link href="/#" passHref>
              <motion.div
                className="
                  inline-flex 
                  items-center 
                  justify-center
                  px-4 py-3
                  text-[14px] 
                  font-bold 
                  tracking-[0.2px]
                  whitespace-nowrap
                  cursor-pointer
                  border-none
                  rounded-md
                  transition-colors
                  duration-200
                  ease-in-out
                  bg-[#435FE0]
                  hover:bg-[#3456ee]
                  shadow-[0_0_2px_rgba(0,0,0,0.5),_0_0_14px_rgba(255,255,255,0.19),_inset_0_-1px_0.4px_rgba(0,0,0,0.2)]
                  opacity-90
                  hover:opacity-100
                  text-white
                "
              >
                <span>BOOK A DEMO</span>
              </motion.div>
            </Link>
        </div>
      </div>
      </div>
    );
  }