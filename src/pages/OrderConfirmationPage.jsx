import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const OrderConfirmationPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center py-20 bg-gray-50">
      <CheckCircle className="text-green-500" size={100} />
      <h1 className="text-5xl font-poppins uppercase text-dark-text mt-6">Order Confirmed!</h1>
      <p className="text-xl text-gray-600 mt-4 max-w-lg">
        Thank you for your order. Your delicious meal is being prepared and will be delivered to you in approximately 30-45 minutes.
      </p>
      <div className="mt-10">
        <Link
          to="/"
          className="bg-primary hover:bg-primary-dark text-white font-bold font-poppins py-3 px-8 rounded-full shadow-lg transition-colors duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
