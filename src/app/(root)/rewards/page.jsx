import React from 'react';
import Footer from '../../../components/Footer';

const page = () => {
  return (
    <>
      <div className="bg-gray-100 p-6 rounded-lg max-w-lg mx-auto shadow-md">
        <h3 className="text-2xl font-semibold text-center mb-4 text-gray-800">Rewards</h3>
        <p className="text-gray-700">
          Cabjak offers an attractive rewards program, where drivers can earn points for completed rides and kilometers driven, redeemable for prizes, including monthly car giveaways. Explore how you can benefit from our exclusive rewards as a driver.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default page;
