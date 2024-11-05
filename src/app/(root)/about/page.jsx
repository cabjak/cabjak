import React from 'react';
import Footer from '../../../components/Footer';

const page = () => {
  return (
    <>
      <div className="bg-gray-100 p-6 rounded-lg max-w-lg mx-auto shadow-md">
        <h3 className="text-2xl font-semibold text-center mb-4 text-gray-800">About Us</h3>
        <p className="text-gray-700">
          Cabjak is a ride-sharing platform created to provide reliable, affordable transportation options across Kuwait. Focused on empowering local drivers and providing excellent service for medium to low-income communities, Cabjak emphasizes fair earnings and minimal fees for drivers, along with accessible, efficient transportation for riders.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default page;