import React from "react";
import { Clock, Flame, Heart } from "lucide-react";

const ValueCard = ({ icon, title, children }) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0 bg-primary/10 text-primary p-3 rounded-full">
      {icon}
    </div>
    <div>
      <h3 className="text-lg font-poppins font-semibold text-dark-text">
        {title}
      </h3>
      <p className="text-gray-600 mt-1 text-sm leading-relaxed">{children}</p>
    </div>
  </div>
);

const AboutPage = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-poppins uppercase text-dark-text">
            Our Story
          </h1>
          <p className="text-xl text-primary mt-2 font-semibold italic">
            "Delicious Food Always"
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <img
              src="src/assets/about.png"
              alt="Belle Food Chef"
              className="w-full max-w-md md:max-w-lg lg:max-w-xl max-h-[400px] object-cover rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Text Section */}
          <div>
            <h2 className="text-3xl font-poppins text-dark-text mb-4">
              Welcome to Belle Food
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Belle Food was born from a simple idea: to make authentic,
              delicious Nigerian cuisine accessible to everyone, anytime. We
              believe that food is more than just sustenance; it's a
              celebration of culture, a source of comfort, and a way to bring
              people together. Our chefs use age-old recipes and the freshest
              ingredients to create meals that are bursting with flavor and made
              with love.
            </p>

            <div className="space-y-6">
              <ValueCard icon={<Clock size={22} />} title="Fast Delivery">
                We pride ourselves on our swift 24/7 delivery service, ensuring
                your food arrives hot and ready to enjoy.
              </ValueCard>
              <ValueCard icon={<Flame size={22} />} title="Hot & Fresh">
                Every dish is prepared to order, guaranteeing the quality and
                freshness you deserve.
              </ValueCard>
              <ValueCard icon={<Heart size={22} />} title="Made with Love">
                Passion is our main ingredient. We pour our hearts into every
                meal, cooking for you as we would for our family.
              </ValueCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
