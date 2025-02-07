"use client"

import Nav from '../components/nav/Nav';
import Partners from '@/components/Partners'
import Slider from '@/components/Slider'
import Numbers from '@/components/Numbers.jsx'
import Hero from '@/components/Hero'
import SideScroll from '@/components/SideScroll'
import VerticalSlider from '@/components/VerticalSlider'
import Infineon from '@/components/Infineon'
import Foot from '@/components/Foot'
import BackgroundHero from '@/components/BackgroundHero'

export default function Home() {
  return (
    <div>
      <main>
        <div className="pb-96 bg-[#090A0B] overflow-x-hidden relative">
            <BackgroundHero/>
            <Nav className="mt-4"/>
            <Hero />
            <SideScroll />
        </div>
        <div className="py-24">
          <Partners/>
          <Slider/>
          <Numbers 
            timeValue={500000}   // e.g. 500k
            moneyValue={300000} // e.g. 3 million
            duration={500}      // 4 seconds
          />
        </div>
        <div>
          <VerticalSlider/>
          <Infineon/>
        </div>
      </main>
        <Foot />
    </div>
  );
}
