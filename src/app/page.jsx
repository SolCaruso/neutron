"use client"

// import { Footer } from '@/components/footer'
import Nav from '../components/nav/Nav';
import Partners from '@/components/Partners'
import Slider from '@/components/Slider'
import Numbers from '@/components/Numbers.jsx'
import Hero from '@/components/Hero'
import SideScroll from '@/components/SideScroll'

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      <Nav />
      <main>
        <div className=" pb-72">
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
      </main>
      {/* <Footer /> */}
    </div>
  );
}