import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-black">
      <div className="flex items-center justify-between px-6 py-2">
        {/* Logo */}
        <a href="/">
          <img
            src="https://media.base44.com/images/public/69cfc74a21d361a7e6a2fb4d/d5518e41e_justwingslogo.png"
            alt="Just Wings"
            className="h-14 invert"
          />
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-black font-bold text-sm tracking-widest uppercase hover:text-gray-600 transition-colors">Home</Link>
          <Link to="/about" className="text-black font-bold text-sm tracking-widest uppercase hover:text-gray-600 transition-colors">About Us</Link>
          <Link to="/catering" className="text-black font-bold text-sm tracking-widest uppercase hover:text-gray-600 transition-colors">Catering</Link>
          <Link to="/locations" className="text-black font-bold text-sm tracking-widest uppercase hover:text-gray-600 transition-colors">Locations</Link>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden text-black" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-black px-6 py-4 flex flex-col gap-4">
          <Link to="/" className="text-black font-bold text-sm tracking-widest uppercase" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" className="text-black font-bold text-sm tracking-widest uppercase" onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link to="/catering" className="text-black font-bold text-sm tracking-widest uppercase" onClick={() => setMenuOpen(false)}>Catering</Link>
          <Link to="/locations" className="text-black font-bold text-sm tracking-widest uppercase" onClick={() => setMenuOpen(false)}>Locations</Link>
        </div>
      )}
    </nav>
  );
}