import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.webp";

// Menu items with their visibility breakpoints
// visible: the minimum breakpoint at which the item shows in the navbar
// 'always' means it's always in the hamburger on smallest screens
const menuItems = [
  { to: "/", label: "Home", visible: "sm" },
  { to: "/about", label: "About Us", visible: "sm" },
  { to: "/services", label: "Services", visible: "md" },
  { to: "/testimonials", label: "Testimonials", visible: "lg" },
  { to: "/faqs", label: "FAQs", visible: "lg" },
  { to: "/blog", label: "Blog", visible: "xl" },
  { to: "/contact", label: "Contact", visible: "xl" },
];

// Map breakpoints to Tailwind classes for showing items
const visibilityClasses: Record<string, string> = {
  sm: "hidden sm:block",
  md: "hidden md:block",
  lg: "hidden lg:block",
  xl: "hidden xl:block",
};

// Map breakpoints to Tailwind classes for hiding items in mobile menu
// (hide from mobile menu when visible in navbar)
const mobileHideClasses: Record<string, string> = {
  sm: "sm:hidden",
  md: "md:hidden",
  lg: "lg:hidden",
  xl: "xl:hidden",
};

export const MenuBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="h-16 sm:h-20 md:h-24 flex items-center justify-between font-semibold px-4 sm:px-8 md:px-12 lg:px-16 relative">
      <Link to="/">
        <img src={logo} alt="Logo" className="h-12 sm:h-14 md:h-16 cursor-pointer" />
      </Link>

      {/* Desktop Navigation - items show progressively */}
      <nav className="hidden sm:flex items-center gap-3 md:gap-4 lg:gap-6">
        {menuItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={`relative hover:text-yellow-500 transition-colors pb-1 group ${visibilityClasses[item.visible]}`}
          >
            {item.label}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full" />
          </Link>
        ))}

        {/* Hamburger Button - hidden at xl when all items visible */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="xl:hidden p-2 ml-2"
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
      </nav>

      {/* Mobile-only Hamburger (below sm) */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="sm:hidden p-2"
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

      {/* Slide-out Menu - shows items not visible at current breakpoint */}
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsMenuOpen(false)}
          />
          <nav className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-40 flex flex-col gap-2 p-6 pt-20">
            {menuItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`hover:text-yellow-500 hover:bg-gray-100 p-3 rounded transition-colors ${mobileHideClasses[item.visible]}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </>
      )}
    </div>
  );
};
