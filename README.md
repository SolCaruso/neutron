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
            transform: translateX(0%);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>


      {/*      
      <div className="slider-container w-full overflow-hidden">
        
        <div className="slider flex">
          
          <div className="slider-images flex">
            <SliderImages />
          </div>
          
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
      </div> */}


function SliderImages() {
  return (
    <>
      <img
        src="/carousel/1.jpg"
        alt="Custom Design Process"
        className="rounded-xl max-w-lg mr-4 flex-none"
      />
      <img
        src="/carousel/2.jpg"
        alt="ECU Design"
        className="rounded-xl max-w-lg mr-4 flex-none"
      />
      <img
        src="/carousel/3.jpg"
        alt="Engineer at Work"
        className="rounded-xl max-w-lg mr-4 flex-none"
      />
      <img
        src="/carousel/4.jpg"
        alt="Factory Floor"
        className="rounded-xl max-w-lg mr-4 flex-none"
      />
    </>
  );
}
