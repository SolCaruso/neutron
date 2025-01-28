import Image from "next/image";
import React from "react";

const Numbers = ({ image }) => {
  return (
    <div className="relative overflow-hidden h-[100px] min-w-[200px] flex justify-center items-center">
      <Image
        src={image}
        alt={image}
        fill
        style={{ objectFit: "cover" }}
        sizes="(max-width: 768px) 100vw, 
               (max-width: 1200px) 50vw, 
               33vw"
      />
    </div>
  );
};

export default Numbers;