'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'NigComSat',
    title: 'NigComSat',
    review: 'They are great in communications. very effective and reliable. Highly recomended',
  },
  {
    name: 'NCC',
    title: 'NCC',
    review: 'We have worked closely with them, they are reliable',
  },
  {
    name: 'Kogi State Govt',
    title: 'Kogi State Govt',
    review: 'The best sellers of interactive flat panels. We don\'t regret contracting you',
  },
  {
    name: 'Kano State Govt',
    title: 'Kano State Govt',
    review: 'They create Dynamic systems that have been of great help to us over the years. We highly recommend them',
  },
  {
    name: 'Igbinedion University',
    title: 'Igbinedion University',
    review: 'Dynamically target high-payoff intellectual capital for customized technologies. Objectively integrate emerging core competency communities.',
  },
  {
    name: 'Federal University Wukari',
    title: 'Federal University Wukari',
    review: 'Working with Certified Systems Group has been a game changer for our company. Their expertise in IT systems and support has allowed us to streamline our operations and improve our efficiency.',
  },
  {
    name: 'Federal University Otuoke',
    title: 'Federal University Otuoke',
    review: 'Certified Systems Group has been an integral part of our company\'s success. Their proactive approach to IT management has prevented many potential issues and downtime, saving us time and money.',
  },
  {
    name: 'Federal University Dutse',
    title: 'Federal University Dutse',
    review: 'We have been working with Certified Systems Group for several years and have been consistently impressed with their professionalism and expertise. They have helped us implement new technologies and processes that have significantly improved our productivity and profitability.',
  },
  {
    name: 'Federal University Oye-Ekiti',
    title: 'Federal University Oye-Ekiti',
    review: 'Certified Systems Group has been a valuable partner for our company. Their IT support and consulting services have allowed us to focus on our core business while they handle the technical side.',
  },
];

const Testimonials = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' });

  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold uppercase text-blue-400 tracking-widest">GREAT REVIEWS FOR OUR SERVICES</h2>
          <p className="mt-2 text-4xl font-extrabold text-white">Trusted by some Big Names</p>
        </div>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 p-4">
                <div className="bg-gray-900 p-8 rounded-xl shadow-lg h-full flex flex-col">
                  <Quote className="text-blue-500 w-10 h-10 mb-4" />
                  <p className="text-gray-300 italic mb-6 flex-grow">{testimonial.review}</p>
                  <div>
                    <p className="font-bold text-lg text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
