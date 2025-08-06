import React from 'react';

const partners = [
  'Huawei Technologies Co. Ltd',
  'Intel Semi-Conductor, Nigeria',
  'Triumph Board, Czech Republic',
  'Haier Information Technology Co. Ltd',
  'Shenzhen Spectrum Technology Co., Ltd',
  'Vanu, Inc., a Delaware Corporation',
  'Brainwave Science, Inc.',
  'WEIDA Power Company Ltd, China',
  'DELL',
  'Lenovo',
  'Samsung IT',
  'HP',
  'Cisco',
  'Guidance Software, USA (Encase)',
  'Micro Systemation AB (MSAB), Sweden',
  'Microsoft',
];

const PartnersPage = () => {
  return (
    <div className="bg-gray-50">
      {/* Page Header */}
      <div className="bg-white py-12 shadow-sm">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">Our Esteemed Partners</h1>
          <p className="text-lg text-gray-600 mt-2">Collaborating with global leaders to deliver exceptional value.</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {partners.map((partner) => (
              <div key={partner} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex items-center justify-center h-32">
                <p className="text-center font-semibold text-gray-700">{partner}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersPage;
