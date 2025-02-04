import React from 'react';
import TopRight from "@/components/icons/TopRight";

function Infineon() {
  return (
    <section className="bg-[#090A0B] text-white py-36">

      <div className="flex w-scree h-screen">
        <div className="flex flex-col w-full border-r border-[#1C1C1E]">
          <div>1</div>
          <div className="border-t border-[#1C1C1E]">2</div>
          <div className="border-y border-[#1C1C1E] min-h-[338px] "></div>
          <div className="min-h-[359.5px]">4</div>
          <div className="border-y border-[#1C1C1E]">5</div>
          <div>6</div>
        </div>
        <div className="flex flex-col w-full border-r border-[#1C1C1E]"> 
          <div>1</div>
          <div className="border-t border-[#1C1C1E]">2</div>
          <div className="border-y border-[#1C1C1E]">
            <p className="text-6xl font-semibold p-12">Infineon&apos;s Preferred Design House.</p>
          </div>
          <div className="p-12 pr-2 hover:bg-[#0C0D0F]">
            <p className="text-lg leading-relaxed max-w-xs font-geist text-[#6A6B6C]">
            As an Infineon Preferred Design House, Neutron Controls brings ideas to life,
            uniting Infineon&apos;s advanced solutions with our expert guidance.
            </p>
            <a 
              href="/learn-more" 
              className="inline-block font-medium text-white transition-colors font-geist pt-14"
            >
              Learn more<TopRight className="inline-block w-5 h-5 mb-1 ml-2" />
            </a>
          </div>
          
          <div className="border-y border-[#1C1C1E]">5</div>
          <div>6</div>
        </div>
        <div className="flex flex-col w-full border-r border-[#1C1C1E]"> 
          <div>1</div>
          <div className="border-t border-[#1C1C1E]">2</div>
          <div className="border-y border-[#1C1C1E] min-h-[697.5px]">3</div>
          <div className="border-b border-[#1C1C1E]">4</div>
          <div>5</div>
          <div>6</div>
        </div>
        <div className="flex flex-col w-full border-r border-[#1C1C1E]">
          <div>1</div>
          <div className="border-t border-[#1C1C1E]">2</div>
          <div className="border-y border-[#1C1C1E] min-h-[697.5px]">3</div>
          <div className="border-b border-[#1C1C1E]">4</div>
          <div>5</div>
          <div>6</div> 
        </div>
        <div className="flex flex-col w-full">
          <div>1</div>
          <div className="border-t border-[#1C1C1E]">2</div>
          <div className="border-y border-[#1C1C1E] min-h-[338px]">3</div>
          <div className="min-h-[358.5px]">4</div>
          <div className="border-y border-[#1C1C1E]">5</div>
          <div>6</div> 
        </div>
      </div>
    </section>
  );
}

export default Infineon;