import React, { useRef } from 'react';
import { ShoppingBag, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import foodData from '../data/foods';
import MenuCard from '../components/MenuCard';
import { useCart } from '../contexts/CartContext';

// Hero Section
const Hero = ({ onOrderNowClick }) => {
  return (
    <div
      className="relative h-screen flex items-center justify-center text-white bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://media.istockphoto.com/id/1219951523/photo/african-national-food-dish-nigerian-grilled-meat-and-chicken-dish.webp?a=1&b=1&s=612x612&w=0&k=20&c=eRz-IpG_crmFu1H1ZAmpOwWM_rqa9S5s2e8k7LXlIEs=')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
      <div className="relative z-10 text-center animate-fade-in">
        <h1
          className="text-5xl md:text-7xl font-poppins uppercase tracking-tight leading-tight animate-slide-up"
          style={{ animationDelay: '0.2s' }}
        >
          Food is Ready
        </h1>
        <p
          className="text-xl md:text-2xl font-nunito-sans mt-4 max-w-2xl mx-auto animate-slide-up"
          style={{ animationDelay: '0.4s' }}
        >
          Hot, delicious, and delivered 24/7.
        </p>
        <div
          className="mt-8 flex justify-center space-x-4 animate-slide-up"
          style={{ animationDelay: '0.6s' }}
        >
          <button
            onClick={onOrderNowClick}
            className="bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white font-bold font-poppins py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
          >
            <ShoppingBag size={20} />
            <span>Order Now</span>
          </button>
          <Link
            to="/menu"
            className="bg-transparent border-2 border-white text-white font-bold font-poppins py-3 px-8 rounded-full shadow-lg transform hover:scale-105 hover:bg-white hover:text-primary-dark transition-all duration-300 flex items-center space-x-2"
          >
            <span>View Menu</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

// Featured Menu
const FeaturedMenu = ({ elementRef }) => {
  const { addToCart } = useCart();
  const featuredItems = foodData.slice(0, 4); // first 4 items

  return (
    <section ref={elementRef} className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-poppins uppercase text-dark-text">Featured Menu</h2>
          <p className="text-lg text-gray-600 mt-2">
            Our most popular dishes, loved by everyone.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredItems.map((item) => (
            <MenuCard key={item.id} item={item} onAddToCart={addToCart} />
          ))}
        </div>
      </div>
    </section>
  );
};
// About Us Section
const AboutSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80"
            alt="About Bele Food"
            className="rounded-2xl object-cover w-full h-[350px] md:h-[400px] shadow-lg"
          />
        </div>
        <div className="flex-1 space-y-5">
          <h2 className="text-4xl font-poppins uppercase text-primary">About Us</h2>
          <p className="text-gray-600 leading-relaxed">
            At BELE FOOD, we celebrate flavor, freshness, and culture. From spicy grills
            to local favorites, our chefs craft every dish with passion and creativity.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center text-primary font-semibold hover:underline"
          >
            Learn More <ArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

// Testimonials Section
const Testimonials = () => {
  return (
    <section className="py-20 bg-white text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-poppins uppercase text-dark-text mb-12">
          What Our Customers Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="text-yellow-400" size={20} />
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">
                “Absolutely delicious! The service and taste were exceptional.”
              </p>
              <h4 className="font-semibold text-gray-800">— Happy Customer</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Map / Contact Section
const MapSection = () => {
  return (
    <section className="py-20 bg-gray-50 text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-poppins uppercase text-dark-text mb-10">Find Us</h2>
        <p className="text-gray-600 mb-6">
          Visit our restaurant or order online — we’re always ready to serve you.
        </p>
        <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
          <iframe
            title="BELE FOOD Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253732.59543783043!2d3.2637916867187555!3d6.448980700000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf78f42321deb%3A0x5429e345179e5e60!2sBelle%20Food%20by%20King_mitchy!5e0!3m2!1sen!2sng!4v1762379170843!5m2!1sen!2sng"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

// Main HomePage
const HomePage = () => {
  const featuredMenuRef = useRef(null);
  const handleOrderNowClick = () => featuredMenuRef.current?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div>
      <Hero onOrderNowClick={handleOrderNowClick} />
      <FeaturedMenu elementRef={featuredMenuRef} />
      <AboutSection />
      <Testimonials />
      <MapSection />
    </div>
  );
};

export default HomePage;
