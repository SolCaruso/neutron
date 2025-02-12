"use client"

import Nav from '@/components/nav/Nav';
import Infineon from '@/components/Infineon'
import Footer from '@/components/Footer'
import BackgroundHero from '@/components/BackgroundHero'
import Energ8te from '@/components/Energ8te'
import Safety from "@/components/icons/Safety";
import Scale from "@/components/icons/Scale";
import Future from "@/components/icons/Future";

export default function Home() {
  return (
    <div>
      <main>
        <div className="pb-20 lg:pb-32 xl:pb-52 bg-[#090A0B] overflow-x-hidden relative">
            <BackgroundHero/>
            <Nav className="mt-4"/>
            <div className='px-12'>
              <div className='h-full w-full m-auto mt-28 max-w-7xl'>
                <h1 className='text-white text-3xl sm:text-5xl text-left font-bold max-w-xl uppercase tracking-wider'>Battery Energy Storage System</h1>
                <p className='text-white/60 font-geist sm:text-[20px] mt-3'>BMS Controls for energy storage systems.</p>
              </div>
              <div className='flex mt-12 mx-auto max-w-7xl justify-between flex-wrap'>
                <div className='py-8'>
                  <Safety className='w-12 h-auto mb-8'/>
                  <p className='text-white text-[32px] font-semibold leading-[1.2] my-3 max-w-[15rem]'>Safety by design</p>
                  <p className='text-white/60 font-geist text-[15px] max-w-xs'>ENERG8TE™ integrates prevention measures, data logging, failsafe diagnostics, and risk mitigation for battery operation.</p>
                </div>
                <div className='py-8'>
                  <Scale className='w-auto h-[46px] mb-8'/>
                  <p className='text-white text-[32px] font-semibold leading-[1.2] my-3 max-w-[15rem]'>Scalable + flexible</p>
                  <p className='text-white/60 font-geist text-[15px] max-w-xs'>Hardware platform enabling software algorithms for SoX, cell balancing, charging, and discharging.</p>
                </div>
                <div className='py-8'>
                  <Future className='w-12 h-auto mb-8'/>
                  <p className='text-white text-[32px] font-semibold leading-[1.2] my-3 max-w-[15rem]'>Future-proof design</p>
                  <p className='text-white/60 font-geist text-[15px] max-w-xs'>ENERG8TE™ adapts with ESS advances, ensuring compatibility and long-term value.</p>
                </div>
              </div>
            </div>
            

        </div>
        <div>
          <Energ8te/>
        </div>
      </main>
      <div className="overflow-x-hidden relative">
        <Infineon/>
        <Footer />
      </div>
        
    </div>
  );
}
