import React from 'react';
import Footer from '../../../components/Footer';

const page = () => {
  return (
    <>
      <div className="bg-gray-100 p-6 rounded-lg max-w-lg mx-auto shadow-md">
        <h3 className="text-2xl font-semibold text-center mb-4 text-gray-800">Blog</h3>
        <p className="text-gray-700">
          The Cabjak Blog is where we share stories from our driver community, industry insights, travel tips, and service updates. Stay tuned for driving advice, exclusive interviews, and articles to make the most of your Cabjak experience.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default page;
