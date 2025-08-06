import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-6 text-center py-24 md:py-32">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
          Your Trusted Partner in IT & Security Solutions
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          At Certified Systems Limited, we deliver cutting-edge ICT and security solutions tailored to meet the evolving needs of your business. From renewable energy to digital forensics, we are your first choice for technology services in Africa.
        </p>
        <Link href="/contact" className="bg-blue-500 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-600 transition duration-300 transform hover:scale-105 text-lg">
          Get in Touch
        </Link>
      </div>
    </section>
  );
};

export default Hero;
