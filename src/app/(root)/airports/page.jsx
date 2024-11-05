import React from 'react';
import Footer from '../../../components/Footer';

const page = () => {
  return (
    <>
      <div className="bg-gray-100 p-6 rounded-lg max-w-lg mx-auto shadow-md">
        <h3 className="text-2xl font-semibold text-center mb-4 text-gray-800">Airports</h3>
        <p className="text-gray-700">
          Cabjak services are available for airport pickups and drop-offs, ensuring smooth and affordable travel options. Discover how Cabjak can make your airport journey hassle-free with just a tap on the app.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default page;
