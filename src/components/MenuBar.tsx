import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";

export const MenuBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="h-16 sm:h-20 md:h-24 flex items-center justify-between font-semibold px-4 sm:px-8 md:px-0 relative">
      <img src={logo} alt="Logo" className="h-12 sm:h-14 md:h-16 md:ml-[15%]" />

      {/* Hamburger Button - Mobile Only */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden z-50 p-2"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isMenuOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-4 lg:gap-6 mr-[15%]">
        <Link to="/" className="hover:text-yellow-500 transition-colors">Home</Link>
        <Link to="/about" className="hover:text-yellow-500 transition-colors">About Us</Link>
        <Link to="/services" className="hover:text-yellow-500 transition-colors">Services</Link>
        <Link to="/testimonials" className="hover:text-yellow-500 transition-colors">Testimonials</Link>
        <Link to="/faqs" className="hover:text-yellow-500 transition-colors">FAQs</Link>
        <Link to="/blog" className="hover:text-yellow-500 transition-colors">Blog</Link>
        <Link to="/contact" className="hover:text-yellow-500 transition-colors">Contact</Link>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <>
          <div
            className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsMenuOpen(false)}
          />
          <nav className="md:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-40 flex flex-col gap-2 p-6 pt-20">
            <Link
              to="/"
              className="hover:text-yellow-500 hover:bg-gray-100 p-3 rounded transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-yellow-500 hover:bg-gray-100 p-3 rounded transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/services"
              className="hover:text-yellow-500 hover:bg-gray-100 p-3 rounded transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/testimonials"
              className="hover:text-yellow-500 hover:bg-gray-100 p-3 rounded transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              to="/faqs"
              className="hover:text-yellow-500 hover:bg-gray-100 p-3 rounded transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQs
            </Link>
            <Link
              to="/blog"
              className="hover:text-yellow-500 hover:bg-gray-100 p-3 rounded transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="hover:text-yellow-500 hover:bg-gray-100 p-3 rounded transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </>
      )}
    </div>
  );
};
