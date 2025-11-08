import React from 'react';
import { ShoppingCart } from 'lucide-react';

const MenuCard = ({ item, onAddToCart }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/30">
      <div className="overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110 p-4 rounded"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-poppins font-bold text-dark-text truncate">{item.name}</h3>
        <p className="text-gray-600 font-nunito-sans mt-2 h-12 text-sm">{item.description}</p>
        <div className="flex items-center justify-between mt-4">
          <p className="text-2xl font-poppins font-bold text-primary">
            <span className="font-bold">₦</span>{item.price.toLocaleString()}
          </p>
          <button 
            onClick={() => onAddToCart(item)}
            className="flex items-center justify-center bg-primary-dark text-white rounded-full w-10 h-10 transform transition-transform duration-300 group-hover:bg-primary group-hover:scale-110"
          >
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
