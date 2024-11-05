import React from 'react';
import Footer from '../../../components/Footer';

const page = () => {
  return (
    <>
      <div className="bg-gray-100 p-6 rounded-lg max-w-lg mx-auto shadow-md">
        <h3 className="text-2xl font-semibold text-center mb-4 text-gray-800">New Driver Guide</h3>
        <p className="text-gray-700">
          Explore our comprehensive New Driver Guide, covering everything from app setup and ride management to handling payments and navigating the city. Whether you're new to ride-sharing or experienced, our guide helps you succeed on the road.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default page;
