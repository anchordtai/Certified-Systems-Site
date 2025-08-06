import React from 'react';
import Link from 'next/link';

const CTA = () => {
  return (
    <section className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-extrabold mb-4">Ready to Transform Your Business?</h2>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Let's collaborate to achieve your strategic objectives. Our team of talented, experienced, and motivated industry specialists are ready to help you succeed.
        </p>
        <Link href="/contact" className="bg-blue-500 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-600 transition duration-300 transform hover:scale-105 text-lg">
          Contact Us Today
        </Link>
      </div>
    </section>
  );
};

export default CTA;
