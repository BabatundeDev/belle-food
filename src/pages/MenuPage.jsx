import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import foodData from '../data/foods';
import MenuCard from '../components/MenuCard';
import { useCart } from '../contexts/CartContext';

const MenuPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const { addToCart } = useCart();

  const categories = ['All', ...new Set(foodData.map((item) => item.category))];

  const filteredFoods = useMemo(() => {
    return foodData.filter((item) => {
      const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, activeCategory]);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-poppins uppercase text-dark-text">Our Menu</h1>
        <p className="text-xl text-gray-600 mt-2">Explore our wide range of delicious meals.</p>
      </div>

      <div className="mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="relative w-full md:w-1/2 lg:w-1/3">
          <input
            type="text"
            placeholder="Search for a meal (e.g. Jollof, Efo Riro...)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-full focus:outline-none focus:border-primary transition-colors"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 font-poppins font-semibold rounded-full transition-colors duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-orange-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredFoods.map((item) => (
          <MenuCard key={item.id} item={item} onAddToCart={addToCart} />
        ))}
      </div>

      {filteredFoods.length === 0 && (
        <div className="text-center col-span-full py-16">
          <p className="text-2xl text-gray-500">
            No meals found. Try a different search or category!
          </p>
        </div>
      )}
    </div>
  );
};

export default MenuPage;
