import React, { useState } from "react"
import { Link } from "react-router-dom"
import { FiUser, FiMenu, FiShoppingCart, FiX } from "react-icons/fi"
import { useCart } from "../../context/CartContext"
import logo from "../../assets/logo.jpg"

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const { cartCount } = useCart()

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Dannie Agricultural"
            className="h-10 w-auto"
          />
          <span className="text-lg font-bold text-primary">
            Dannie Agricultural
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">

          <Link to="/" className="hover:text-secondary transition">
            Home
          </Link>

          <Link to="/about" className="hover:text-secondary transition">
            About
          </Link>

          <Link to="/products" className="hover:text-secondary transition">
            Products
          </Link>

          <Link to="/mlm" className="hover:text-secondary transition">
            MLM Program
          </Link>

          <Link to="/contact" className="hover:text-secondary transition">
            Contact
          </Link>

        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">

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
            to="/login"
            className="hidden md:flex items-center bg-primary text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition"
          >
            <FiUser className="mr-2" />
            Login
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      {mobileMenuOpen && (

        <div className="md:hidden bg-white border-t px-6 py-4 space-y-4">

          <Link
            to="/"
            onClick={toggleMobileMenu}
            className="block text-gray-700"
          >
            Home
          </Link>

          <Link
            to="/about"
            onClick={toggleMobileMenu}
            className="block text-gray-700"
          >
            About
          </Link>

          <Link
            to="/products"
            onClick={toggleMobileMenu}
            className="block text-gray-700"
          >
            Products
          </Link>

          <Link
            to="/mlm"
            onClick={toggleMobileMenu}
            className="block text-gray-700"
          >
            MLM Program
          </Link>

          <Link
            to="/contact"
            onClick={toggleMobileMenu}
            className="block text-gray-700"
          >
            Contact
          </Link>

          <Link
            to="/login"
            className="flex items-center text-primary font-medium"
          >
            <FiUser className="mr-2" />
            Login
          </Link>

        </div>

      )}

    </nav>
  )
}

export default Navbar