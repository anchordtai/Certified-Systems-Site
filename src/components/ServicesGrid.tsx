import React from 'react';
import Image from 'next/image';

const services = [
  {
    title: 'Zebra Technology',
    description: 'Make every part of your business visible, connected and optimized with Zebra range of solutions and products.',
    imgSrc: '/images/zebra-banner-4.jpg',
  },
  {
    title: 'Computing Devices',
    description: 'Get top range computing devices and accessories to match your business needs within budget.',
    imgSrc: '/images/computing-devices.jpeg',
  },
  {
    title: 'Triumph Interactive Flat Panel',
    description: 'Bring your classroom and meetings to life. Animate lessons with 3D learning resources.',
    imgSrc: '/images/ifp.png',
  },
  {
    title: 'Digital Signage Solutions',
    description: 'Delight and engage your audience with our wide selection of digital signage solutions. Design and upload from anywhere.',
    imgSrc: '/images/digital-signage.jpg',
  },
  {
    title: 'Automated Health Service Kiosk',
    description: 'Reduce patient wait time and automate out-patient processes with our real-time service kiosks.',
    imgSrc: '/images/health.jpeg',
  },
  {
    title: 'Security and Forensics Solutions',
    description: 'We provide tactical and forensics tools and solutions to fight crime, leveraging the latest technology.',
    imgSrc: '/images/forensic.jpeg',
  },
  {
    title: 'IT Consultancy',
    description: 'Our IT advisory services help you align your business goals with the latest technological advantages.',
    imgSrc: '/images/it-consultancy.jpeg',
  },
  {
    title: 'Renewable Energy Solutions',
    description: 'We offer a wide range of renewable energy solutions for home, office, and community use.',
    imgSrc: '/images/energy.jpeg',
  },
  {
    title: 'E-Learning Solution',
    description: 'A fully customizable Learning Management System (LMS) to make teaching and learning interactive and engaging.',
    imgSrc: '/images/e-learning.jpeg',
  },
];

const ServicesGrid = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900">Explore Our Products and Services</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Certified Systems Limited (CSL) provides innovative products and solutions to align your organizational strategies with the latest technology. Our team of dedicated staff deploys solutions tailored to your needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 overflow-hidden">
              <div className="relative h-48 w-full">
                <Image src={service.imgSrc} alt={service.title} layout="fill" objectFit="cover" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
