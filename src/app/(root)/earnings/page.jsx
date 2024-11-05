import React from 'react';
import Footer from '../../../components/Footer';

const page = () => {
  return (
    <>
      <div className="bg-gray-100 p-6 rounded-lg max-w-lg mx-auto shadow-md">
        <h3 className="text-2xl font-semibold text-center mb-4 text-gray-800">Earnings</h3>
        <p className="text-gray-700">
          With Cabjak, drivers keep 100% of their fares, and fees are only applied after completing 20 trips. Our commitment is to provide drivers with straightforward, maximum earnings along with reward opportunities for dedicated service.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default page;
