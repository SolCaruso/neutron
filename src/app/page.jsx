"use client"

import Nav from '../components/nav/Nav';
import Partners from '@/components/Partners'
import Slider from '@/components/Slider'
import Numbers from '@/components/Numbers.jsx'
import Hero from '@/components/Hero'
import SideScroll from '@/components/SideScroll'
import VerticalSlider from '@/components/VerticalSlider'
import Infineon from '@/components/Infineon'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div>
      <Nav />
      <main>
        <div className="mb-72">
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
      <Footer />
    </div>
  );
}