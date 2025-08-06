import React from 'react';

const services = [
  {
    icon: '⚡️',
    title: 'Hybrid Power & Renewable Energy',
    description: 'Innovative and sustainable power solutions to ensure uninterrupted business operations.',
  },
  {
    icon: '💻',
    title: 'Systems Integration & Support',
    description: 'Seamless integration of complex IT systems with dedicated, ongoing support.',
  },
  {
    icon: '🌐',
    title: 'Fiber Optics & Networking',
    description: 'High-speed fiber optic infrastructure and robust LAN/WAN networking solutions.',
  },
  {
    icon: '☁️',
    title: 'Cloud & Datacenter Solutions',
    description: 'Modernize your infrastructure with our secure cloud computing and datacenter services.',
  },
  {
    icon: '🔍',
    title: 'Digital & Mobile Forensics',
    description: 'Advanced forensic solutions for intelligence and criminal investigations.',
  },
  {
    icon: '🎓',
    title: 'ICT Education & Training',
    description: 'Empowering the workforce with cutting-edge ICT education and training programs.',
  },
];

const FeaturedServices = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900">Our Core Services</h2>
          <p className="text-lg text-gray-600 mt-2">Providing quality and value-added ICT and security solutions.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <div key={service.title} className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="text-5xl mb-5">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
