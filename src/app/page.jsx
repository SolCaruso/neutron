"use client"

import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Keyboard } from '@/components/keyboard'
import { Link } from '@/components/link'
import { LinkedAvatars } from '@/components/linked-avatars'
import { LogoCloud } from '@/components/logo-cloud'
import { LogoCluster } from '@/components/logo-cluster'
import { LogoTimeline } from '@/components/logo-timeline'
import { Map } from '@/components/map'
import { Navbar } from '@/components/navbar'
import { Screenshot } from '@/components/screenshot'
import { Testimonials } from '@/components/testimonials'
import { Heading, Subheading } from '@/components/text'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import Nav from '../components/nav/Nav';

// function Hero() {
//   return (
//     <div className="relative">
//       <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-inset ring-black/5" />
//       <Container className="relative">
//         <Navbar
//           banner={
//             <Link
//               href="/blog/radiant-raises-100m-series-a-from-tailwind-ventures"
//               className="flex items-center gap-1 rounded-full bg-fuchsia-950/35 px-3 py-0.5 text-sm/6 font-medium text-white data-[hover]:bg-fuchsia-950/30"
//             >
//               Radiant raises $100M Series A from Tailwind Ventures
//               <ChevronRightIcon className="size-4" />
//             </Link>
//           }
//         />
//         <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-48 md:pt-32">
//           <h1 className="font-display text-balance text-6xl/[0.9] font-medium tracking-tight text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
//             Close every deal.
//           </h1>
//           <p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
//             Radiant helps you sell more by revealing sensitive information about
//             your customers.
//           </p>
//           <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
//             <Button href="#">Get started</Button>
//             <Button variant="secondary" href="/pricing">
//               See pricing
//             </Button>
//           </div>
//         </div>
//       </Container>
//     </div>
//   )
// }

function FeatureSection() {
  return (
    <div className="overflow-hidden text-gray-900">
    {/* Parent Container */}
    <div className="flex flex-col items-center gap-8 py-12">
      <div className="text-center flex flex-col items-center gap-6">
        <span className="inline-block px-5 py-2 bg-[#121212] text-white text-sm rounded-full font-semibold">
          Custom Integrated Design Solutions
        </span>
        <h1 className="text-center text-black text-5xl font-bold uppercase leading-[1.1]">
          Where Custom <br /> Design Powers Performance
        </h1>
        <p className="text-black text-lg max-w-xl mx-auto font-medium leading-6">
          Our team of experts will accelerate your time to market by delivering
          high-performance hardware &amp; innovative software solutions.
        </p>
      </div>

      <div className="flex justify-center gap-4">
        <button className="px-6 py-3 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition">
          Event Info
        </button>
        <button className="px-6 py-3 bg-gray-900 text-white font-bold rounded hover:bg-gray-800 transition">
          Book a Demo
        </button>
      </div>

      {/* Slider Section */}
      <div className="slider-container w-full overflow-hidden">
        {/* Outer wrapper is 200% wide so we can hold 2 sets side-by-side */}
        <div className="slider flex">
          {/* First set of images */}
          <div className="slider-images flex">
            <SliderImages />
          </div>
          {/* Second set (duplicate) */}
          <div className="slider-images flex">
            <SliderImages />
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <p className="text-gray-700 text-sm">
          Trusted by partners worldwide, we build relationships rooted in trust,
          respect, and shared success.
        </p>
        <div className="mt-6 flex justify-center gap-6">
          <img src="/path-to-logo1.png" alt="Infineon" className="" />
          <img src="/path-to-logo2.png" alt="MATLAB" className="" />
          <img src="/path-to-logo3.png" alt="Tasking" className="" />
        </div>
      </div>
    </div>

    {/* Key CSS changes here */}
    <style jsx>{`
        .slider {
          /* Force the slider to be twice the width so two copies fit side by side */
          width: 200%;
          animation: slide 20s linear infinite;
        }

        /* 
          We want to go from 0% to -50%. 
          Because there's an exact duplicate of images after the first set,
          when the animation resets from -50% back to 0%, it visually “picks up” 
          from the same place without skipping.
        */
        @keyframes slide {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0%);
          }
        }
      `}</style>
    </div>
  );
}

function SliderImages() {
  return (
    <>
      <img
        src="/carousel/1.jpg"
        alt="Custom Design Process"
        className="rounded-xl max-w-lg mr-4"
      />
      <img
        src="/carousel/2.jpg"
        alt="ECU Design"
        className="rounded-xl max-w-lg mr-4"
      />
      <img
        src="/carousel/3.jpg"
        alt="Engineer at Work"
        className="rounded-xl max-w-lg mr-4"
      />
      <img
        src="/carousel/4.jpg"
        alt="Factory Floor"
        className="rounded-xl max-w-lg mr-4"
      />
    </>
  );
}

function BentoSection() {
  return (
    <Container>
      <Subheading>Sales</Subheading>
      <Heading as="h3" className="mt-2 max-w-3xl">
        Know more about your customers than they do.
      </Heading>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          eyebrow="Insight"
          title="Get perfect clarity"
          description="Radiant uses social engineering to build a detailed financial picture of your leads. Know their budget, compensation package, social security number, and more."
          graphic={
            <div className="h-80 bg-[url(/screenshots/profile.png)] bg-[size:1000px_560px] bg-[left_-109px_top_-112px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />
        <BentoCard
          eyebrow="Analysis"
          title="Undercut your competitors"
          description="With our advanced data mining, you’ll know which companies your leads are talking to and exactly how much they’re being charged."
          graphic={
            <div className="absolute inset-0 bg-[url(/screenshots/competitors.png)] bg-[size:1100px_650px] bg-[left_-38px_top_-73px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="lg:col-span-3 lg:rounded-tr-4xl"
        />
        <BentoCard
          eyebrow="Speed"
          title="Built for power users"
          description="It’s never been faster to cold email your entire contact list using our streamlined keyboard shortcuts."
          graphic={
            <div className="flex size-full pl-10 pt-10">
              <Keyboard highlighted={['LeftCommand', 'LeftShift', 'D']} />
            </div>
          }
          className="lg:col-span-2 lg:rounded-bl-4xl"
        />
        <BentoCard
          eyebrow="Source"
          title="Get the furthest reach"
          description="Bypass those inconvenient privacy laws to source leads from the most unexpected places."
          graphic={<LogoCluster />}
          className="lg:col-span-2"
        />
        <BentoCard
          eyebrow="Limitless"
          title="Sell globally"
          description="Radiant helps you sell in locations currently under international embargo."
          graphic={<Map />}
          className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
        />
      </div>
    </Container>
  );
}

function DarkBentoSection() {
  return (
    <div className="mx-2 mt-2 rounded-4xl bg-gray-900 py-32">
      <Container>
        <Subheading dark>Outreach</Subheading>
        <Heading as="h3" dark className="mt-2 max-w-3xl">
          Customer outreach has never been easier.
        </Heading>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <BentoCard
            dark
            eyebrow="Networking"
            title="Sell at the speed of light"
            description="Our RadiantAI chat assistants analyze the sentiment of your conversations in real time, ensuring you're always one step ahead."
            graphic={
              <div className="h-80 bg-[url(/screenshots/networking.png)] bg-[size:851px_344px] bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-t-4xl lg:col-span-4 lg:rounded-tl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Integrations"
            title="Meet leads where they are"
            description="With thousands of integrations, no one will be able to escape your cold outreach."
            graphic={<LogoTimeline />}
            // `!overflow-visible` is needed to work around a Chrome bug that disables the mask on the graphic.
            className="z-10 !overflow-visible lg:col-span-2 lg:rounded-tr-4xl"
          />
          <BentoCard
            dark
            eyebrow="Meetings"
            title="Smart call scheduling"
            description="Automatically insert intro calls into your leads' calendars without their consent."
            graphic={<LinkedAvatars />}
            className="lg:col-span-2 lg:rounded-bl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Engagement"
            title="Become a thought leader"
            description="RadiantAI automatically writes LinkedIn posts that relate current events to B2B sales, helping you build a reputation as a thought leader."
            graphic={
              <div className="h-80 bg-[url(/screenshots/engagement.png)] bg-[size:851px_344px] bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-b-4xl lg:col-span-4 lg:rounded-br-4xl"
          />
        </div>
      </Container>
    </div>
  );
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* <Hero /> */}
      <Nav />
      <main>
        {/* <Container className="mt-10">
          <LogoCloud />
        </Container> */}
        <div className="bg-gradient-to-b from-white from-50% to-gray-100 py-24">
          <FeatureSection />
          <BentoSection />
        </div>
        <DarkBentoSection />
      </main>
      <Testimonials />
      <Footer />
    </div>
  );
}