import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { CheckCircle2 } from 'lucide-react';

const CheckoutPage = () => {
    const { getCartTotal, clearCart } = useCart();
    const navigate = useNavigate();
    const total = getCartTotal();
    const deliveryFee = 500;

    const handleConfirmAndPay = (e) => {
        e.preventDefault();
        // Here you would integrate with a payment gateway like Paystack or Flutterwave
        // For this demo, we'll simulate a successful order.
        clearCart();
        navigate('/order-confirmed');
    };

    if (total === 0) {
        navigate('/menu');
        return null;
    }

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden grid md:grid-cols-2">
                <div className="p-8">
                    <h2 className="text-3xl font-poppins text-dark-text mb-6">Checkout</h2>
                    <form id="checkout-form" onSubmit={handleConfirmAndPay} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                            <input type="text" name="name" id="name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
                        </div>
                        <div>
                            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Delivery Address</label>
                            <input type="text" name="address" id="address" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                            <input type="tel" name="phone" id="phone" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
                        </div>
                        <div>
                            <label htmlFor="delivery-type" className="block text-sm font-medium text-gray-700">Delivery Type</label>
                            <select id="delivery-type" name="delivery-type" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md">
                                <option>Delivery</option>
                                <option>Pickup</option>
                            </select>
                        </div>
                        <fieldset>
                            <legend className="text-sm font-medium text-gray-700">Payment Method</legend>
                            <div className="mt-2 space-y-2">
                                <div className="flex items-center">
                                    <input id="payment-card" name="payment-method" type="radio" defaultChecked className="focus:ring-primary h-4 w-4 text-primary border-gray-300" />
                                    <label htmlFor="payment-card" className="ml-3 block text-sm font-medium text-gray-700">Pay with Card</label>
                                </div>
                                <div className="flex items-center">
                                    <input id="payment-cash" name="payment-method" type="radio" className="focus:ring-primary h-4 w-4 text-primary border-gray-300" />
                                    <label htmlFor="payment-cash" className="ml-3 block text-sm font-medium text-gray-700">Pay on Delivery</label>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </div>
                <div className="bg-light-bg p-8 flex flex-col justify-between">
                    <div>
                        <h3 className="text-2xl font-poppins text-dark-text mb-6">Your Order</h3>
                        <div className="space-y-4">
                            <div className="flex justify-between text-gray-600">
                                <span>Subtotal</span>
                                <span>₦{total.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <span>Delivery Fee</span>
                                <span>₦{deliveryFee.toLocaleString()}</span>
                            </div>
                            <div className="border-t mt-4 pt-4 flex justify-between font-bold text-lg">
                                <span>Total</span>
                                <span>₦{(total + deliveryFee).toLocaleString()}</span>
                            </div>
                        </div>
                    </div>
                    <button
                        type="submit"
                        form="checkout-form"
                        className="w-full mt-8 bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white font-bold font-poppins py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                        <CheckCircle2 size={22} />
                        <span>Confirm & Pay</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
