import React from 'react';
import TopRight from "@/components/icons/TopRight";

function Infineon() {
  return (
    <section className="bg-black text-white py-36">

      <div className="flex w-scree h-screen">
        <div className="flex flex-col gap-4 w-full border-r border-white">
          <div>1</div>
          <div className="border-t border-white">2</div>
          <div className="border-y border-white "><div className="invisible text-6xl font-semibold p-12">Infineon&apos;s Preferred Design House.</div></div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
        </div>
        <div className="flex flex-col gap-4 w-full border-r border-white"> 
          <div>1</div>
          <div className="border-t border-white">2</div>
          <div className="border-y border-white text-6xl font-semibold p-12">Infineon&apos;s Preferred Design House.</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
        </div>
        <div className="flex flex-col gap-4 w-full border-r border-white"> 
          <div>1</div>
          <div className="border-t border-white">2</div>
          <div className="border-t border-white">3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
        </div>
        <div className="flex flex-col gap-4 w-full border-r border-white">
          <div>1</div>
          <div className="border-t border-white">2</div>
          <div className="border-t border-white">3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div> 
        </div>
        <div className="flex flex-col gap-4 w-full">
          <div>1</div>
          <div className="border-t border-white">2</div>
          <div className="border-t border-white">3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div> 
        </div>
      </div>


      {/* <div className="container mx-auto flex flex-col md:flex-row md:items-center">
        

        <div className="md:w-1/2 space-y-4 ml-24 ">
          <h1 className="text-6xl font-semibold max-w-xs">
            Infineon&apos;s Preferred Design House.
          </h1>
          <p className="text-lg leading-relaxed max-w-xs font-geist text-[#6A6B6C]">
            As an Infineon Preferred Design House, Neutron Controls brings ideas to life,
            uniting Infineon&apos;s advanced solutions with our expert guidance.
          </p>
          <a 
            href="/learn-more" 
            className="inline-block font-medium text-[#6A6B6C] hover:text-blue-300 transition-colors font-geist"
          >
            Learn more <TopRight className="inline-block w-4 h-4 mb-1" />
          </a>
        </div>

        <div className="md:w-1/2 mt-6 md:mt-0 md:ml-8">
          <img
            src="/infineon/app.webp"
            alt="Infineon App mockup"
            className="w-[500px] h-auto rounded shadow-lg"
          />
        </div>
      </div> */}
    </section>
  );
}

export default Infineon;