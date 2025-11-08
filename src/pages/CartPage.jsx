import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import CartItem from '../components/CartItem';
import { ShoppingBag } from 'lucide-react';

const CartPage = () => {
  const { cartItems, getCartTotal } = useCart();
  const navigate = useNavigate();

  const total = getCartTotal();

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <ShoppingBag size={80} className="mx-auto text-gray-300" />
        <h1 className="text-4xl font-poppins mt-6">Your Cart is Empty</h1>
        <p className="text-gray-600 mt-2">Looks like you haven't added anything to your cart yet.</p>
        <Link 
          to="/menu" 
          className="mt-8 inline-block bg-primary hover:bg-primary-dark text-white font-bold font-poppins py-3 px-8 rounded-full shadow-lg transition-colors duration-300"
        >
          Browse Menu
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-poppins text-center mb-8">Your Shopping Cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <div className="lg:col-span-1">
          <div className="sticky top-24 bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-poppins border-b pb-4 mb-4">Order Summary</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold">₦{total.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Delivery</span>
                <span className="font-semibold">₦500</span>
              </div>
            </div>
            <div className="flex justify-between font-bold text-xl pt-4 mt-4 border-t">
              <span>Total Amount</span>
              <span>₦{(total + 500).toLocaleString()}</span>
            </div>
            <button
              onClick={() => navigate('/checkout')}
              className="w-full mt-6 bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white font-bold font-poppins py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
