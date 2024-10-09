import React from 'react'
import images from '@/constants/images'
import Image from 'next/image'

const Nav = () => {
  return (
    <>
    <div className="w-full bg-white py-4 shadow-md flex justify-between items-center px-12">
        <div className="h-[40px] w-[120px] relative">
          <Image src={images.logo} alt="Cabjak Logo" layout="fill" objectFit="contain" />
        </div>
        <ul className="flex space-x-8 text-lg font-semibold">
          <li className="hover:underline cursor-pointer">Home</li>
          <li className="hover:underline cursor-pointer">About</li>
          <li className="hover:underline cursor-pointer">Blog</li>
        </ul>
    </div>
    <div className=" w-full">
        <Image src={images.home} alt='home' className='w-full'/>
    </div>
    </>
  )
}

export default Nav