import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export const MenuBar = () => {
  return (
    <div className="h-24 flex items-center justify-between font-semibold">
      <img src={logo} alt="Logo" className="h-16 ml-[15%]" />
      <nav className="flex gap-6 mr-[15%]">
        <Link to="/" className="hover:text-yellow-500">Home</Link>
        <Link to="/about" className="hover:text-yellow-500">About Us</Link>
        <Link to="/services" className="hover:text-yellow-500">Services</Link>
        <Link to="/testimonials" className="hover:text-yellow-500">Testimonials</Link>
        <Link to="/faqs" className="hover:text-yellow-500">FAQs</Link>
        <Link to="/blog" className="hover:text-yellow-500">Blog</Link>
        <Link to="/contact" className="hover:text-yellow-500">Contact</Link>
      </nav>
    </div>
  );
};
