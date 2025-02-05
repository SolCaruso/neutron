import React from "react";
import Image from "next/image";

export default function BackgroundFooter() {
  return (
    <div className="absolute bottom-96 xs:bottom-72 sm:bottom-52 left-1/2 -translate-x-1/2 w-[800px] h-[700px] z-0 opacity-50">
      <Image
        src="/bg/bg.webp"
        alt="neutron red background"
        layout="fill"
        objectFit="cover"
        className="rotate-90"
        priority
      />
    </div>
  );
}