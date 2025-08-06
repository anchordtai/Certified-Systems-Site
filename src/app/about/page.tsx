import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-gray-50">
      {/* Page Header */}
      <div className="bg-white py-12 shadow-sm">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">About Certified Systems</h1>
          <p className="text-lg text-gray-600 mt-2">Integrated ICT & Security Solutions Provider</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-lg">
            <div className="text-lg text-gray-700 space-y-6">
              <p className="leading-relaxed">
                Certified Systems Limited was incorporated under the Federal Government Companies and Allied Matter Act 1990, in 2001. Our Head Office is located at K-30 Mall Suite 26/27, Second Floor Plot 724, Goke Adegoroye Close, Wuye District, Abuja, Nigeria.
              </p>
              <p className="leading-relaxed">
                Through our esteemed partners, we have a global presence across different continents. At CSL, we bring our whole heart and professionalism to serve organizations, evolving a unique blend of techniques, professionals, and management expertise to meet the numerous changing needs of our clients.
              </p>
            </div>

            <div className="mt-12 space-y-8">
              {/* Mission */}
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-3 border-b-2 border-blue-500 pb-2">Our Mission</h2>
                <p className="text-lg text-gray-700 italic">
                  To be the global leader in IT Services, building on our technologies, competencies, and customer interests to create value for our stakeholders. We’ll achieve this by focusing on the intersection of our client’s emerging needs and the acceleration of business and technological change.
                </p>
              </div>

              {/* Vision */}
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-3 border-b-2 border-blue-500 pb-2">Our Vision</h2>
                <p className="text-lg text-gray-700 italic">
                  To be the first-choice solution partner in the technology sector, providing IT, Communication, and Security services to businesses throughout Africa. We will become an integral part of our client’s success, collaborating with them to achieve their strategic objectives while creating long-lasting business value.
                </p>
              </div>

              {/* Delivery Strategy */}
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-3 border-b-2 border-blue-500 pb-2">Our Delivery Strategy</h2>
                <p className="text-lg text-gray-700 italic">
                  We design delivery strategies that optimize our client’s processes in real-time and reduce wait time, without compromising our avowed culture of excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
