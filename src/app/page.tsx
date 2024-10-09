'use client'
import { useState,useEffect} from 'react';  
import Image from "next/image";
import images from '../constants/images'; 
import Link from "next/link";
import Card from '../components/Card';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);  
  };

  useEffect(() => {
    alert("This is only for demo.......still in update")
  }, [])
  

  return (

    <div className="w-full h-full flex flex-col bg-[#f5f5f5]">
      {/* Navigation */}
      <div className="w-full bg-white py-4 shadow-md flex justify-between items-center px-6 md:px-12">
        <div className="h-[40px] w-[100px] md:w-[120px] relative">
          <Image src={images.logo} alt="Cabjak Logo" layout="fill" objectFit="contain" />
        </div>
        <ul className="hidden md:flex space-x-4 md:space-x-8 text-base md:text-lg font-semibold">
          <li className="hover:underline cursor-pointer">Home</li>
          <Link href={'/about'}><li className="hover:underline cursor-pointer">About</li> </Link>
          <li className="hover:underline cursor-pointer">Blog</li>
        </ul>
        <button 
          className="md:hidden px-4 py-2 bg-gray-100 rounded-lg"
          onClick={toggleMenu}  
        >
          Menu
        </button>
      </div>

      {/* Dropdown Menu (Mobile) */}
      {isMenuOpen && (
        <ul className="md:hidden bg-white shadow-md py-4 px-6 space-y-4">
          <li className="hover:underline cursor-pointer">Home</li>
          <li className="hover:underline cursor-pointer">Blog</li>
          <Link href='/about'><li className="hover:underline cursor-pointer">About</li></Link>
        </ul>
      )}

      <div className="">
        <Image src={images.home} alt="home" className="w-full"/>
      </div>

      {/* Card Section */}
      <div className="mt-10 flex flex-col md:flex-row justify-center gap-6 w-full px-4 md:px-0 max-w-[1200px] mx-auto">
        <Card
          title="Our Mission"
          description="Our mission is to provide safe, reliable, and efficient transportation services."
          icon={images.pic1}
        />
        <Card
          title="Best Ridesharing Technology"
          description="Leveraging advanced technology, we ensure seamless booking."
          icon={images.pic2}
        />
        <Card
          title="Easy to Use"
          description="Our user-friendly app makes booking a ride simple and convenient."
          icon={images.pic3}
        />
      </div>

      {/* Policies Section */}
    <div className='flex justify-center items-center mt-5 '>
      <ul className="space-y-2 text-center md:text-left">
        <li>
          <Link
            href="https://drive.google.com/file/d/1UzTp6IkVKNjFDse1qU9QegGV5iOctBgv"
            className="text-blue-400 hover:text-blue-500 underline"
          >
            Terms and Service
          </Link>
        </li>
        <li className='text-center underline'>
          
          <Link href='https://drive.google.com/file/d/1jZkG8LunlcEq1aTEeNtodWTLceaM2F7x'>Privacy Policy</Link>
          </li>
      </ul>
    </div>

    <footer className="bg-black text-white mt-20 py-10 flex flex-col md:flex-row flex-wrap justify-around items-start gap-10">
  {/* Company Section */}
  <div className="flex flex-col gap-6 w-full md:w-1/4 items-center md:items-start">
    <div>
      <h3 className="font-semibold text-lg mb-4">Company</h3>
      <ul className="space-y-2 text-center md:text-left">
        <Link href={'/about'}><li>About Us</li></Link>
        <li>Careers</li>
        <li>Newsroom</li>
        <li>Blog</li>
      </ul>
    </div>
  </div>

  {/* Driver Section */}
  <div className="w-full md:w-1/4 items-center md:items-start">
    <h3 className="font-semibold text-lg mb-4 text-center md:text-left">Driver</h3>
    <ul className="space-y-2 text-center md:text-left">
      <li>Become a Driver</li>
      <li>New Driver Guide</li>
      <li>Earnings</li>
      <li>Help</li>
    </ul>
  </div>

  {/* Rider Section */}
  <div className="w-full md:w-1/4 items-center md:items-start">
    <h3 className="font-semibold text-lg mb-4 text-center md:text-left">Rider</h3>
    <ul className="space-y-2 text-center md:text-left">
      <li>Rewards</li>
      <li>Events</li>
      <li>Gift Cards</li>
      <li>Airports</li>
    </ul>

    {/* App Store and Play Store Icons */}
    <div className="flex space-x-4 mt-4 justify-center md:justify-start">
      <Image
        src={images.google}
        alt="App Store"
        width={120}
        height={40}
        className="border border-2 border-white rounded-md"
      />
      <Image
        src={images.apple}
        alt="Google Play"
        width={120}
        height={40}
        className="border border-2 border-white rounded-md"
      />
      </div>
    </div>

    {/* Footer Note */}
    {/* Uncomment and edit if needed */}
    {/* <p className="text-center text-sm mt-10">&copy; 2024 Cabjak Inc.</p> */}
    </footer>

    </div>
  );
}
