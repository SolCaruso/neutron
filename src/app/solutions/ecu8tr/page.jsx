import Infineon from '@/components/Infineon'
import Ecu8tr from '@/components/Ecu8tr'
import Purpose from "@/components/icons/Purpose";
import Quality from "@/components/icons/Quality";
import Parameter from "@/components/icons/Parameter";

export default function Home() {
  return (
    <div>
      <main>
        <div className=" bg-[#090A0B] overflow-x-hidden relative min-h-[800px] 3xl:min-h-[1000px] xl:min-h-[850px]">
            <div className='px-12 pb-20 relative z-30'>
              <div className='h-full w-full m-auto mt-28 max-w-7xl lg:mb-12 3xl:mt-40 xl:mb-20'>
                <h1 className='text-white text-3xl sm:text-5xl text-left font-bold max-w-xl uppercase tracking-wider'>Battery point tester</h1>
                <p className='text-white/60 font-geist sm:text-[20px] mt-3'>Factory-grade end of line tester.</p>
              </div>
              <div className='flex mt-12 mx-auto max-w-7xl justify-between flex-wrap'>
                <div className='py-8'>
                  <Purpose className='w-12 h-auto mb-8'/>
                  <p className='text-white text-[32px] font-semibold leading-[1.2] my-3 max-w-[15rem]'>Purposeful design</p>
                  <p className='text-white/60 font-geist text-[15px] max-w-xs'>Verifies cell monitors in battery modules/packs, ensuring precision, reliability.</p>
                </div>
                <div className='py-8'>
                  <Quality className='w-12 h-auto mb-8'/>
                  <p className='text-white text-[32px] font-semibold leading-[1.2] my-3 max-w-[15rem]'>Quality management</p>
                  <p className='text-white/60 font-geist text-[15px] max-w-xs'>Early detection and resolution prevent production failures and expensive warranty repairs.</p>
                </div>
                <div className='py-8'>
                  <Parameter className='w-[72px] h-auto mb-8'/>
                  <p className='text-white text-[32px] font-semibold leading-[1.2] my-3 max-w-[15rem]'>Parameter insight</p>
                  <p className='text-white/60 font-geist text-[15px] max-w-xs'>Provides detailed insights into essential parameters like cell voltage and temperature.</p>
                </div>
              </div>
            </div>
            

        </div>
        <div>
          <Ecu8tr/>
        </div>
      </main>
      <div className="overflow-x-hidden relative">
        <Infineon/>
      </div>
        
    </div>
  );
}
