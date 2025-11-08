import jollof from '../assets/jollof.png';
import friedRice from '../assets/fried-rice.png';
import egusi from '../assets/egusi.png';
import vege from '../assets/vege.png';
import beefSoup from '../assets/beef-soup.png';
import asun from '../assets/Asun.jpeg';
import amala from '../assets/amala.png';
import suya from '../assets/suya.png';

const foodData = [
  {
    id: 1,
    name: "Jollof Rice & Chicken",
    description: "Smoky party jollof rice served with a succulent piece of grilled chicken.",
    price: 3500,
    image: jollof,
    category: "Rice Dishes",
    className: "w-full h-48 object-cover rounded-full"
  },
  {
    id: 2,
    name: "Fried Rice & Turkey",
    description: "Aromatic fried rice with mixed vegetables, served with a juicy turkey wing.",
    price: 4000,
    image: friedRice,
    category: "Rice Dishes",
    className: "w-full h-48 object-cover rounded-full"
  },
  {
    id: 3,
    name: "Egusi Soup with Pounded Yam",
    description: "Rich melon seed soup with assorted meats, perfect with soft pounded yam.",
    price: 4500,
    image: egusi,
    category: "Swallow",
    className: "w-full h-48 object-cover rounded-full"
  },
  {
    id: 4,
    name: "Efo Riro & Semo",
    description: "A savory vegetable stew with smoked fish, served with smooth semovita.",
    price: 4200,
    image: vege,
    category: "Swallow",
    className: "w-full h-48 object-cover rounded-full"
  },
  {
    id: 5,
    name: "Goat Meat Pepper Soup",
    description: "Spicy and aromatic broth with tender goat meat chunks, a true delight.",
    price: 3000,
    image: beefSoup,
    category: "Soups",
    className: "w-full h-48 object-cover rounded-full"
  },
  {
    id: 6,
    name: "Asun (Spicy Grilled Goat)",
    description: "Smoky, spicy, and tender grilled goat meat, a perfect side or main.",
    price: 3800,
    image: asun,
    category: "Specials",
    className: "w-full h-48 object-cover rounded-full"
  },
  {
    id: 7,
    name: "Amala & Gbegiri/Ewedu",
    description: "The classic trio: smooth amala, bean soup, and jute leaf soup.",
    price: 4000,
    image: amala,
    category: "Swallow",
    className: "w-full h-48 object-cover rounded-full"
  },
  {
    id: 8,
    name: "Suya (Beef Kebab)",
    description: "Thinly sliced beef, marinated in spices and grilled to perfection.",
    price: 2500,
    image: suya,
    category: "Specials",
    className: "w-full h-48 object-cover rounded-full"
  }
];

export default foodData;
