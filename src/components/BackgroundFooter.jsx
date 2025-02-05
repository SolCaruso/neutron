import React from "react";
import Image from "next/image";


export default function BackgroundFooter() {
  return (
    <div className="flex justify-center">
          <Image
            src="/bg/bg.webp"
            alt="neutron red background"
            width={700}
            height={500}
            className="w-[60%] h-auto rotate-90 absolute bottom-0"
          />
        </div>
  )
}
