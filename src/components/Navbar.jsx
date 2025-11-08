import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { ShoppingCart, Menu, X, Phone } from "lucide-react";
import { useCart } from "../contexts/CartContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClasses = ({ isActive }) =>
    `relative font-semibold pb-1 transition-colors duration-300 ${
      isActive ? "text-accent" : "text-white hover:text-accent"
    } after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-accent after:transform after:scale-x-0 after:origin-left after:transition-transform after:duration-300 ${
      isActive ? "after:scale-x-100" : "hover:after:scale-x-50"
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gradient-to-r from-primary-dark to-primary shadow-lg"
          : "bg-gradient-to-r from-primary to-primary-dark"
      }`}
    >
      <div className="w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              to="/"
              className="text-3xl font-poppins font-bold tracking-wide text-white hover:text-accent transition-colors duration-300"
            >
              BELLE <span className="text-accent">FOOD</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              <NavLink to="/" className={navLinkClasses}>
                Home
              </NavLink>
              <NavLink to="/menu" className={navLinkClasses}>
                Menu
              </NavLink>
              <NavLink to="/about" className={navLinkClasses}>
                About
              </NavLink>
              <NavLink to="/contact" className={navLinkClasses}>
                Contact
              </NavLink>
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <Link
                to="/cart"
                className="relative text-white hover:text-accent transition-colors duration-300"
              >
                <ShoppingCart size={35} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-accent text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>

              <button
                className="md:hidden text-white hover:text-accent transition-colors duration-300"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-primary-dark text-white border-t border-primary-light transition-all duration-300">
            <nav className="flex flex-col space-y-3 py-4 px-6">
              <NavLink to="/" className={navLinkClasses} onClick={() => setMenuOpen(false)}>
                Home
              </NavLink>
              <NavLink to="/menu" className={navLinkClasses} onClick={() => setMenuOpen(false)}>
                Menu
              </NavLink>
              <NavLink to="/about" className={navLinkClasses} onClick={() => setMenuOpen(false)}>
                About
              </NavLink>
              <NavLink to="/contact" className={navLinkClasses} onClick={() => setMenuOpen(false)}>
                Contact
              </NavLink>

              <div className="flex items-center mt-4 space-x-2 text-accent">
                <Phone size={20} />
                <span className="text-sm font-medium">+234 800 000 0000</span>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
