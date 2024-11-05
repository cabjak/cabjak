import React from 'react';
import Footer from '../../../components/Footer';

const page = () => {
  return (
    <>
      <div className="bg-gray-100 p-6 rounded-lg max-w-lg mx-auto shadow-md">
        <h3 className="text-2xl font-semibold text-center mb-4 text-gray-800">Newsroom</h3>
        <p className="text-gray-700">
          Stay updated on Cabjak's latest developments, new features, community outreach, and other important announcements. Visit our newsroom for press releases, news coverage, and our latest initiatives to improve transportation in Kuwait.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default page;
