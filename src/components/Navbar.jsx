import { useState } from "react";
import { MapPin, ShoppingBag, Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-black">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="border-2 border-black rounded-full p-1">
            <span className="text-black font-black text-xs tracking-widest">JW</span>
          </div>
          <span className="text-black font-black text-xl tracking-tighter uppercase">Just Wings</span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {["Menu", "Flavors", "Locations", "Work With Us"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/ /g, "-")}`}
              className="text-black font-bold text-sm tracking-widest uppercase hover:text-gray-600 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Right CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#find-us"
            className="flex items-center gap-2 bg-black text-white font-bold text-xs px-4 py-2 uppercase tracking-wider hover:bg-gray-800 transition-colors"
          >
            <MapPin size={14} />
            Find Us
          </a>
          <a
            href="#menu"
            className="flex items-center gap-2 bg-black text-white font-bold text-xs px-4 py-2 uppercase tracking-wider hover:bg-gray-800 transition-colors"
          >
            <ShoppingBag size={14} />
            Order Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden text-black" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-black px-6 py-4 flex flex-col gap-4">
          {["Menu", "Flavors", "Locations", "Work With Us"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/ /g, "-")}`}
              className="text-black font-bold text-sm tracking-widest uppercase"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a href="#find-us" className="bg-black text-white font-bold text-xs px-4 py-2 uppercase tracking-wider text-center">
            Find Us
          </a>
          <a href="#menu" className="bg-black text-white font-bold text-xs px-4 py-2 uppercase tracking-wider text-center">
            Order Now
          </a>
        </div>
      )}
    </nav>
  );
}