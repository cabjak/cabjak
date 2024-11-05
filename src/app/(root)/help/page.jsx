import React from 'react';
import Footer from '../../../components/Footer';

const page = () => {
  return (
    <>
      <div className="bg-gray-100 p-6 rounded-lg max-w-lg mx-auto shadow-md">
        <h3 className="text-2xl font-semibold text-center mb-4 text-gray-800">Help</h3>
        <p className="text-gray-700">
          Need assistance? Our support team is available to help with any questions about the app, payments, or troubleshooting. Access our Help section for FAQs, resources, and quick assistance to keep you moving smoothly.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default page;
