import React from 'react';

const partners = [
  'Huawei', 'Intel', 'Triumph Board', 'Haier',
  'Samsung', 'HP', 'Cisco', 'Microsoft',
  'Dell', 'Lenovo', 'Vanu', 'MSAB'
];

const Partners = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Our Trusted Partners
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner) => (
            <div key={partner} className="flex justify-center items-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <span className="text-md font-semibold text-gray-600 text-center">{partner}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
