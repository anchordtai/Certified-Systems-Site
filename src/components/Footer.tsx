import React from 'react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Certified Systems Limited</h3>
            <p className="text-gray-400">Your trusted partner in IT and Security Solutions since 2001.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-blue-400 transition">About Us</a></li>
              <li><a href="/services" className="hover:text-blue-400 transition">Services</a></li>
              <li><a href="/contact" className="hover:text-blue-400 transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white transition">
                <Facebook size={24} />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white transition">
                <Twitter size={24} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Certified Systems Limited. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
