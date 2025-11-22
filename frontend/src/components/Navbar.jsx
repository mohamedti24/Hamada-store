import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#0a1416] text-white shadow-lg border-b border-[#10b981]/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold tracking-wide text-[#10b981] hover:text-[#34d399] transition"
          >
            Hamada Store
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-sm font-semibold items-center">
            <Link
              to="/"
              className="hover:text-[#10b981] transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="hover:text-[#10b981] transition-colors duration-300"
            >
              Products
            </Link>
            <Link
              to="/about"
              className="hover:text-[#10b981] transition-colors duration-300"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="hover:text-[#10b981] transition-colors duration-300"
            >
              Contact
            </Link>
            {/* 🛒 Cart Link */}
            <Link
              to="/cart"
              className="hover:text-[#10b981] transition-colors duration-300"
            >
              Cart
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✖️" : "☰"}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-[#0d1b1e] text-center py-4 space-y-3 border-t border-[#10b981]/20">
            <Link
              to="/"
              className="block hover:text-[#10b981] transition"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/products"
              className="block hover:text-[#10b981] transition"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            <Link
              to="/about"
              className="block hover:text-[#10b981] transition"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block hover:text-[#10b981] transition"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            {/* 🛒 Cart (mobile) */}
            <Link
              to="/cart"
              className="block hover:text-[#10b981] transition"
              onClick={() => setIsOpen(false)}
            >
              Cart
            </Link>
          </div>
        )}
      </nav>

      {/* Spacer to prevent content overlap */}
      <div className="h-20 md:h-20"></div>
    </>
  );
}

export default Navbar;
