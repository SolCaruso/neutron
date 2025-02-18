// components/BackgroundHero.jsx
import Image from "next/image";

export default function BackgroundHero() {
  return (
    <div
      className="
        absolute 
        top-24
        sm:top-0 
        left-1/2 
        -translate-x-1/2 
        pointer-events-none
        overflow-hidden
        w-[1064px] 
        h-[385px]
        max-w-full
        bg-no-repeat 
        bg-top
        z-10
        [background:radial-gradient(
          50%_50%_at_50%_-20%,
          rgba(255,99,99,0.08)_0,
          hsla(0,100%,73%,0.04)_50.5%,
          rgba(90,23,177,0)_100%
        )]
        [background-size:clamp(200px,calc(100vw_*_1.586_+_45.31px),600px)]
      "
    >
      <Image
        src="/bg/bg-hero.webp"
        alt="Neutron red background"
        width={1064}
        height={385}
        priority
        className="object-cover w-full h-auto"
      />
    </div>
  );
}