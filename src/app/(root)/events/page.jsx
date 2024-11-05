import React from 'react';
import Footer from '../../../components/Footer';

const page = () => {
  return (
    <>
      <div className="bg-gray-100 p-6 rounded-lg max-w-lg mx-auto shadow-md">
        <h3 className="text-2xl font-semibold text-center mb-4 text-gray-800">Events</h3>
        <p className="text-gray-700">
          Join our Cabjak events, including driver meetups, training sessions, and community-building activities. We hold regular events to recognize top drivers, introduce new features, and strengthen our Cabjak family.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default page;
