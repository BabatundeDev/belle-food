import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-text text-white font-nunito-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-poppins text-primary mb-4">BELLE FOOD</h3>
            <p className="text-gray-400">Delicious Food Always — 24/7 Delivery.</p>
          </div>
          <div>
            <h4 className="font-poppins text-lg text-white uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/menu" className="text-gray-400 hover:text-primary transition-colors">Menu</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-poppins text-lg text-white uppercase tracking-wider mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-400">
                <Mail size={18} className="text-primary" />
                <span>contact@bellefood.com</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Phone size={18} className="text-primary" />
                <span>+234 800 123 4567</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <MapPin size={18} className="text-primary" />
                <span>123 Foodie Lane, Lagos, Nigeria</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-poppins text-lg text-white uppercase tracking-wider mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">Get the latest news and offers.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your Email"
                className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none w-full"
              />
              <button className="bg-primary hover:bg-primary-dark text-white font-bold px-4 py-2 rounded-r-md transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Belle Food. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
