import Image from 'next/image'
import React from 'react'
// import images from '@/constants/images'

const Card = ({ title, description, icon }) => {
    return (
        <div className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center text-center w-full md:w-1/3">
          <div className="h-[80px] w-[80px] mb-4 relative">
            <Image src={icon} alt={title} layout="fill" objectFit="contain" />
          </div>
          <h3 className="font-bold text-xl mb-4">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      );
  
}

export default Card