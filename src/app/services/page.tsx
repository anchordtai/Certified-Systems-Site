import React from 'react';

const serviceCategories = [
  {
    category: 'Infrastructure & Power Solutions',
    icon: '🏗️',
    services: [
      'Hybrid Power & Renewable Energy',
      'Power Backup Solutions',
      'Fiber Optics Infrastructure Deployment',
      'LAN/WAN Networking & VSAT Solutions',
      'Last Mile Microwave Broadband',
      'Telecommunications Services',
    ],
  },
  {
    category: 'IT & Business Solutions',
    icon: '💼',
    services: [
      'Systems Integration & Support',
      'Sales of Computers & Office Equipment',
      'Document Management Solutions',
      'Cloud Computing & Datacenters',
      'Custom Software Development',
      'Web-based Applications & Websites',
    ],
  },
  {
    category: 'Consulting & Training',
    icon: '🧑‍🏫',
    services: [
      'Technology & Electrical Engineering Consulting',
      'ICT Education Solutions & Training',
      'General ICT Consultancy Services',
    ],
  },
  {
    category: 'Specialized & Security Solutions',
    icon: '🛡️',
    services: [
      'Digital & Mobile Forensics (XRY MSAB, Encase)',
      'iCognative Technology Solutions',
      'Septier’s GUARDIAN™ Interception Tech',
      'Video Conferencing, Tele-Medicine & Tele-Presence',
    ],
  },
  {
    category: 'Education & Presentation Technology',
    icon: '🎓',
    services: [
      'Smart School Solutions',
      'Education Devices (Tablets of all sizes)',
      'Interactive Presentation Solutions (Large Format Displays)',
    ],
  },
];

const ServicesPage = () => {
  return (
    <div className="bg-gray-50">
      {/* Page Header */}
      <div className="bg-white py-12 shadow-sm">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">Our Services</h1>
          <p className="text-lg text-gray-600 mt-2">A comprehensive suite of technology solutions to meet your business needs.</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {serviceCategories.map((category) => (
              <div key={category.category} className="bg-white p-8 md:p-12 rounded-lg shadow-xl">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 flex items-center">
                  <span className="text-5xl mr-5">{category.icon}</span>
                  {category.category}
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-lg text-gray-700">
                  {category.services.map((service) => (
                    <li key={service} className="flex items-start">
                      <svg className="w-6 h-6 text-blue-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
