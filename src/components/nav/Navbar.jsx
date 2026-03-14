// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiUser, FiMenu, FiShoppingCart } from "react-icons/fi"
import { useCart } from '../../context/CartContext';
import logo from "../../assets/logo.jpg";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartCount } = useCart()

  const toggleMobileMenu = () => setMobileMenuOpen(prev => !prev);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            {/* Logo */}
          <div className="flex items-center space-x-6">

              {/* Cart */}
              <Link to="/cart" className="relative">

                <FiShoppingCart size={22} />

                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                    {cartCount}
                  </span>
                )}

              </Link>

              {/* Login */}
              <Link
                to={'/login'}
                className="bg-primary text-white px-4 py-2 rounded-md flex items-center"
              >
                <FiUser className="mr-2" />
                Login
              </Link>

              {/* Mobile Menu */}
              <button className="md:hidden" onClick={toggleMobileMenu}>
                <FiMenu />
              </button>

            </div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex space-x-8">
                      <Link to="/" className="nav-link text-dark font-medium hover:text-secondary transition">
                        Home
                      </Link>
                      <Link to="/about" className="nav-link text-dark font-medium hover:text-secondary transition">
                        About Us
                      </Link>
                      <Link to="/products" className="nav-link text-dark font-medium hover:text-secondary transition">
                        Products
                      </Link>
                      <Link to="/mlm" className="nav-link text-dark font-medium hover:text-secondary transition">
                        MLM Program
                      </Link>
                      <Link to="/contact" className="nav-link text-dark font-medium hover:text-secondary transition">
                        Contact
                      </Link>
                    </div>

                    {/* Buttons */}
                    <div className="flex items-center space-x-4">
                      <Link to={'/login'} className="bg-primary text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition flex items-center">
                        <FiUser className="mr-2" />
                        Login
                      </Link>

                      

                      {/* Mobile Menu Toggle */}
                      <button className="md:hidden" onClick={toggleMobileMenu}>
                        <FiMenu />
                      </button>
                    </div>
                  </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white w-full py-2 px-4">
          <Link to="/" className="block py-2 text-dark hover:text-secondary" onClick={toggleMobileMenu}>
            Home
          </Link>
          <Link to="/about" className="block py-2 text-dark hover:text-secondary" onClick={toggleMobileMenu}>
            About Us
          </Link>
          <Link to="/products" className="block py-2 text-dark hover:text-secondary" onClick={toggleMobileMenu}>
            Products
          </Link>
          <Link to="/mlm" className="block py-2 text-dark hover:text-secondary" onClick={toggleMobileMenu}>
            MLM Program
          </Link>
          <Link to="/contact" className="block py-2 text-dark hover:text-secondary" onClick={toggleMobileMenu}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
