import Image from 'next/image';
import React from 'react';

const PartnersLogo = ({ image }) => {
  return (
    <div className="relative overflow-hidden h-[100px] min-w-[200px] flex justify-center items-center">
      <Image
        src={image}
        alt="Partner Logo"
        fill
        style={{ objectFit: 'cover' }}
      />
    </div>
  );
};

export default PartnersLogo;