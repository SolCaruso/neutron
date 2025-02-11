"use client"

import Nav from '@/components/nav/Nav';
import Partners from '@/components/Partners'
import Slider from '@/components/Slider'
import Numbers from '@/components/Numbers'
import Hero from '@/components/Hero'
import SideScroll from '@/components/SideScroll'
import VerticalSlider from '@/components/VerticalSlider'
import Infineon from '@/components/Infineon'
import Footer from '@/components/Footer'
import BackgroundHero from '@/components/BackgroundHero'
import Ecu8tr from '@/components/ecu8tr'

export default function Home() {
  return (
    <div>
      <main>
        <div className="pb-96 bg-[#090A0B] overflow-x-hidden relative">
            <BackgroundHero/>
            <Nav className="mt-4"/>
        </div>
        <div>
          <Ecu8tr/>
        </div>
      </main>
      <div className="overflow-x-hidden relative">
        <Infineon/>
        <Footer />
      </div>
        
    </div>
  );
}
