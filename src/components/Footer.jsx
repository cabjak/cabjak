import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
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
          className=" border-2 border-white rounded-md"
        />
        <Image
          src={images.apple}
          alt="Google Play"
          width={120}
          height={40}
          className="border-2 border-white rounded-md"
        />
        </div>
      </div>
  
      {/* Footer Note */}
      {/* Uncomment and edit if needed */}
      {/* <p className="text-center text-sm mt-10">&copy; 2024 Cabjak Inc.</p> */}
      </footer>
  )
}

export default Footer