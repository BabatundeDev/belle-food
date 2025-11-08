import React from 'react';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-poppins uppercase text-dark-text">Let's Talk Taste!</h1>
          <p className="text-xl text-gray-600 mt-2">We'd love to hear from you. Get in touch with us.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-poppins mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="font-semibold">Full Name</label>
                <input type="text" id="name" className="w-full mt-2 p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary" />
              </div>
              <div className="relative">
                <label htmlFor="email" className="font-semibold">Email Address</label>
                <input type="email" id="email" className="w-full mt-2 p-3 pl-10 border border-gray-200 rounded-lg focus:outline-none focus:border-primary" />
                <Mail className="absolute left-3 top-12 text-gray-400" size={20} />
              </div>
              <div className="relative">
                <label htmlFor="phone" className="font-semibold">Phone Number</label>
                <input type="tel" id="phone" className="w-full mt-2 p-3 pl-10 border border-gray-200 rounded-lg focus:outline-none focus:border-primary" />
                <Phone className="absolute left-3 top-12 text-gray-400" size={20} />
              </div>
              <div>
                <label htmlFor="message" className="font-semibold">Message</label>
                <textarea id="message" rows={4} className="w-full mt-2 p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary"></textarea>
              </div>
              <button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white font-bold font-poppins py-3 px-8 rounded-full shadow-lg transition-colors duration-300">
                Submit
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg flex items-center space-x-4">
              <MapPin className="text-primary" size={40} />
              <div>
                <h3 className="font-poppins text-xl font-bold">Our Location</h3>
                <p className="text-gray-600">123 Foodie Lane, Lagos, Nigeria</p>
              </div>
            </div>
            <div className="bg-white p-5 rounded-2xl shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253732.59543783043!2d3.2637916867187555!3d6.448980700000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf78f42321deb%3A0x5429e345179e5e60!2sBelle%20Food%20by%20King_mitchy!5e0!3m2!1sen!2sng!4v1762379170843!5m2!1sen!2sng"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg w-full"
              />
            </div>
            <a href="https://wa.me/2348001234567" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white font-bold font-poppins py-4 px-8 rounded-full shadow-lg transition-colors duration-300 space-x-3">
              <MessageCircle size={24} />
              <span>Chat with us on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
