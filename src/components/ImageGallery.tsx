import React from 'react';
import Image from 'next/image';

const images = [
  { src: '/43-Inch-Portable-Outdoor-Digital-Signage-with-1500nits-IP65-Waterproof-Portable-Outdoor-Advertising-Player-Ad-Player-removebg-preview.png', alt: 'Digital Signage' },
  { src: '/55 Inch Digital Signage Player Shopping Mall Kiosk.jpg', alt: 'Mall Kiosk' },
  { src: '/800x800-prestop-informatiezuilen-info-kiosks-infostele-removebg-preview (1).png', alt: 'Info Kiosk' },
  { src: '/1.png', alt: 'Security Solution' },
  { src: '/9.png', alt: 'Integration Support' },
  { src: '/csl-logo.jpg', alt: 'Certified Systems Limited' },
];

const ImageGallery = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Our Work in Action
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <Image src={image.src} alt={image.alt} width={400} height={300} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
