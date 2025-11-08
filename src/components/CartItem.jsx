import React from 'react';
import { Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
      <div className="flex items-center space-x-4">
        <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
        <div>
          <h3 className="font-bold font-poppins text-lg">{item.name}</h3>
          <p className="text-primary font-bold">₦{item.price.toLocaleString()}</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center border border-gray-200 rounded-full">
          <button
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            className="p-2 text-gray-600 hover:text-primary-dark"
          >
            <Minus size={16} />
          </button>
          <span className="px-4 font-bold">{item.quantity}</span>
          <button
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className="p-2 text-gray-600 hover:text-primary-dark"
          >
            <Plus size={16} />
          </button>
        </div>
        <p className="font-bold text-lg w-24 text-right">
          ₦{(item.price * item.quantity).toLocaleString()}
        </p>
        <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-red-500">
          <Trash2 size={20} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
