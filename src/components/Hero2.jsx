import Bolt from '@/components/icons/Bolt'
import { Link } from '@/components/link'
import { motion } from "framer-motion";
import MobileLogo from '@/components/logos/MobileLogo'
import styles from "./WishList.module.css";

export default function Example() {

  return (

        <div className="relative isolate px-6 lg:px-8 z-30">
            {/* <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
            <div
                style={{
                clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
            </div> */}
            <div className="mx-auto py-36 sm:py-38 sm:pb-44 relative z-30">

                {/* Animated subheading */}
                <Link href="/solutions/energ8te">
                    <div className="flex justify-center mb-8 sm:mb-12">
                    <div className={`${styles.wishlistOuter} ${styles.wishlistAnimate}`}>
                        <div className={` ${styles.wishlistAnnouncement} sm:h-[34px] h-[30px] sm:py-[4px] sm:px-[10px] px-[6px]`}>
                        <Bolt className="w-4 text-red-600 ml-2"/>
                        <span className="gradient-text text-transparent animate-gradient text-white md:text-[14px] text-[12px] font-semibold uppercase tracking-[2px] py-2 pr-2 rounded-full flex gap-2">
                            <span className="hidden md:block">BMS Controls & </span>ESS Solutions
                        </span>
                        </div>
                    </div>
                    </div>
                </Link>

            <div className="text-center">
                <h1 className="text-balance text-4xl font-semibold tracking-wider text-white sm:text-5xl lg:text-7xl max-w-4xl mx-auto">
                    Test your strength
                </h1>
                <p className="mt-8 text-pretty text-lg font-medium text-gray-300 sm:text-xl/8 max-w-2xl mx-auto">
                Where energy storage meets innovation
                <span className="hidden sm:inline">
                    , simplifying management and maximizing efficiency.</span>
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                    href="#"
                    className="rounded-md bg-[#425ACA] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4864E1]"
                >
                    Book demo
                </a>
                <a href="#" className="text-sm/6 font-semibold text-white">
                    Event info <span aria-hidden="true">→</span>
                </a>
                </div>
            </div>
            </div>
            <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            >
            <div
                style={{
                clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#1188CA] to-[#030C6C] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            />
            </div>
        </div>
    )
}

{/* <stop stopColor="#1188CA" />
<stop offset={1} stopColor="#030C6C" /> */}