import React from 'react';
import Footer from '../../../components/Footer';

const page = () => {
  return (
    <>
      <div className="bg-gray-100 p-6 rounded-lg max-w-lg mx-auto shadow-md">
        <h3 className="text-2xl font-semibold text-center mb-4 text-gray-800">Careers</h3>
        <p className="text-gray-700">
          Join Cabjak and help shape the future of transport in Kuwait! We’re looking for talented individuals passionate about customer service, technology, and community impact. Explore roles across operations, customer support, and technology that help bring affordable and accessible rides to everyone.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default page;
