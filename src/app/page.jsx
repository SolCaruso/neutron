"use client"

import { BentoCard } from '@/components/bento-card'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Keyboard } from '@/components/keyboard'
import { Link } from '@/components/link'
import { LinkedAvatars } from '@/components/linked-avatars'
import { LogoCluster } from '@/components/logo-cluster'
import { LogoTimeline } from '@/components/logo-timeline'
import { Map } from '@/components/map'
import { Testimonials } from '@/components/testimonials'
import { Heading, Subheading } from '@/components/text'
import Nav from '../components/nav/Nav';
import { motion } from "framer-motion";
import MobileLogo from '@/components/logos/MobileLogo'
import Card from '@/components/card'
import useMeasure from "react-use-measure";
import { animate, useMotionValue, useReducedMotion } from "framer-motion";
import {useEffect} from "react";
import { useState } from "react";
import Partners from '@/components/Partners'
import CYE from '@/components/logos/CYE'
import CYEMobile from '@/components/logos/CYEMobile'
import Slider from '@/components/Slider'
import Bolt from '@/components/icons/Bolt'
import Numbers from '@/components/Numbers.jsx'

function FeatureSection() {

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
          <h1 className="text-[45px] font-bold">CONTROL YOUR ENERGY</h1>
        </div>
        <p className="text-black sm:text-[18px] mx-auto font-medium leading-6 lg:max-w-[700px] max-w-[500px]">
        Where energy storage meets innovation, simplifying management and maximizing efficiency
        </p>
      </div>

      <div className="flex justify-center gap-3 px-2.5 py-3 bg-black rounded-2xl backdrop-blur-sm border-8 border-white/50">
        <MobileLogo className="self-center mx-2"/>
      <Link href="/#" passHref>
            <motion.div
              className="
                inline-flex 
                items-center 
                justify-center
                px-5 py-3.5
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
                px-5 py-3.5
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

function MaquetteSection() {

  const images = [
    { src: "/carousel/1.jpg", alt: "Custom Design Process"},
    { src: "/carousel/2.jpg", alt: "ECU Design"},
    { src: "/carousel/3.jpg", alt: "Engineer at Work"},
    { src: "/carousel/4.jpg", alt: "Factory Floor"},
    { src: "/carousel/1.jpg", alt: "Custom Design Process"},
    { src: "/carousel/2.jpg", alt: "ECU Design"},
    { src: "/carousel/3.jpg", alt: "Engineer at Work"},
    { src: "/carousel/4.jpg", alt: "Factory Floor"}
  ];

  const prefersReducedMotion = useReducedMotion();

  // Adjust durations based on reduced motion preferences
  const FAST_DURATION = prefersReducedMotion ? 0 : 50;
  const SLOW_DURATION = prefersReducedMotion ? 0 : 120;

  const [duration, setDuration] = useState(FAST_DURATION);

  let [ref, {width}] = useMeasure();

  const xTranslation = useMotionValue(0);

  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRender] = useState(false);
  
  useEffect(() => {
    
    let controls;
    let finalPosition = -width / 2 - 8;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRender(!rerender);
        }
      })
    } else {
      controls = animate(xTranslation, [0, finalPosition],{
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }
        return controls?.stop; 
  }, [xTranslation, width, duration, rerender]);
  
  return (
    <motion.div 
      className="absolute left-0 flex gap-4" 
      ref={ref} 
      style={{ x:xTranslation}} 
      onHoverStart={() => {
        setMustFinish(true);
        setDuration(SLOW_DURATION); 
        }
      }
      onHoverEnd={() => {
        setMustFinish(true);
        setDuration(FAST_DURATION);
        }
      }
    >
      {[...images, ...images].map((item, idx) => (
        <Card image={item} key={idx} />
      ))}

    </motion.div>
  );
}

// function BentoSection() {
//   return (
//     <Container>
//       <Subheading>Sales</Subheading>
//       <Heading as="h3" className="mt-2 max-w-3xl">
//         Know more about your customers than they do.
//       </Heading>

//       <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
//         <BentoCard
//           eyebrow="Insight"
//           title="Get perfect clarity"
//           description="Radiant uses social engineering to build a detailed financial picture of your leads. Know their budget, compensation package, social security number, and more."
//           graphic={
//             <div className="h-80 bg-[url(/screenshots/profile.png)] bg-[size:1000px_560px] bg-[left_-109px_top_-112px] bg-no-repeat" />
//           }
//           fade={['bottom']}
//           className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
//         />
//         <BentoCard
//           eyebrow="Analysis"
//           title="Undercut your competitors"
//           description="With our advanced data mining, you’ll know which companies your leads are talking to and exactly how much they’re being charged."
//           graphic={
//             <div className="absolute inset-0 bg-[url(/screenshots/competitors.png)] bg-[size:1100px_650px] bg-[left_-38px_top_-73px] bg-no-repeat" />
//           }
//           fade={['bottom']}
//           className="lg:col-span-3 lg:rounded-tr-4xl"
//         />
//         <BentoCard
//           eyebrow="Speed"
//           title="Built for power users"
//           description="It’s never been faster to cold email your entire contact list using our streamlined keyboard shortcuts."
//           graphic={
//             <div className="flex size-full pl-10 pt-10">
//               <Keyboard highlighted={['LeftCommand', 'LeftShift', 'D']} />
//             </div>
//           }
//           className="lg:col-span-2 lg:rounded-bl-4xl"
//         />
//         <BentoCard
//           eyebrow="Source"
//           title="Get the furthest reach"
//           description="Bypass those inconvenient privacy laws to source leads from the most unexpected places."
//           graphic={<LogoCluster />}
//           className="lg:col-span-2"
//         />
//         <BentoCard
//           eyebrow="Limitless"
//           title="Sell globally"
//           description="Radiant helps you sell in locations currently under international embargo."
//           graphic={<Map />}
//           className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
//         />
//       </div>
//     </Container>
//   );
// }

// function DarkBentoSection() {
//   return (
//     <div className="mx-2 mt-2 rounded-4xl bg-gray-900 py-32">
//       <Container>
//         <Subheading dark>Outreach</Subheading>
//         <Heading as="h3" dark className="mt-2 max-w-3xl">
//           Customer outreach has never been easier.
//         </Heading>

//         <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
//           <BentoCard
//             dark
//             eyebrow="Networking"
//             title="Sell at the speed of light"
//             description="Our RadiantAI chat assistants analyze the sentiment of your conversations in real time, ensuring you're always one step ahead."
//             graphic={
//               <div className="h-80 bg-[url(/screenshots/networking.png)] bg-[size:851px_344px] bg-no-repeat" />
//             }
//             fade={['top']}
//             className="max-lg:rounded-t-4xl lg:col-span-4 lg:rounded-tl-4xl"
//           />
//           <BentoCard
//             dark
//             eyebrow="Integrations"
//             title="Meet leads where they are"
//             description="With thousands of integrations, no one will be able to escape your cold outreach."
//             graphic={<LogoTimeline />}
//             // `!overflow-visible` is needed to work around a Chrome bug that disables the mask on the graphic.
//             className="z-10 !overflow-visible lg:col-span-2 lg:rounded-tr-4xl"
//           />
//           <BentoCard
//             dark
//             eyebrow="Meetings"
//             title="Smart call scheduling"
//             description="Automatically insert intro calls into your leads' calendars without their consent."
//             graphic={<LinkedAvatars />}
//             className="lg:col-span-2 lg:rounded-bl-4xl"
//           />
//           <BentoCard
//             dark
//             eyebrow="Engagement"
//             title="Become a thought leader"
//             description="RadiantAI automatically writes LinkedIn posts that relate current events to B2B sales, helping you build a reputation as a thought leader."
//             graphic={
//               <div className="h-80 bg-[url(/screenshots/engagement.png)] bg-[size:851px_344px] bg-no-repeat" />
//             }
//             fade={['top']}
//             className="max-lg:rounded-b-4xl lg:col-span-4 lg:rounded-br-4xl"
//           />
//         </div>
//       </Container>
//     </div>
//   );
// }

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      {/* <Hero /> */}
      <Nav />
      <main>
        {/* <Container className="mt-10">
          <LogoCloud />
        </Container> */}
        <div className=" pb-72">
          <FeatureSection />
          <MaquetteSection />
          {/* <BentoSection /> */}
        </div>
        <div className="py-24">
          <Partners/>
          <Slider/>
          <Numbers/>
        </div>
        
        {/* <DarkBentoSection /> */}
      </main>
      {/* <Testimonials /> */}
      <Footer />
    </div>
  );
}