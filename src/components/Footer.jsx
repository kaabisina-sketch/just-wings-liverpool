import { Instagram } from "lucide-react";

export default function Footer() {
  const mainLinks = ["About Just Wings", "Contact Us", "Work With Us"];
  const legalLinks = [
    "Terms & Conditions",
    "Privacy Policy",
    "Cookie Policy",
    "Accessibility",
    "Allergen Info",
    "FAQs",
  ];

  return (
    <footer className="bg-gray-50 border-t-2 border-black py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img
            src="https://media.base44.com/images/public/69cfc74a21d361a7e6a2fb4d/d5518e41e_justwingslogo.png"
            alt="Just Wings"
            className="h-16"
          />
        </div>

        {/* Main nav */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8">
          {mainLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-black font-black uppercase tracking-widest text-xs md:text-sm hover:text-gray-500 transition-colors"
            >
              {link}
            </a>
          ))}
        </div>



        {/* Divider */}
        <div className="border-t border-black/20 pt-8 mb-6" />

        {/* Social */}
        <div className="flex justify-center gap-4 mb-6">
          <a href="#" className="text-black hover:text-gray-500 transition-colors">
            <Instagram size={22} />
          </a>
          {/* TikTok icon (custom SVG as lucide doesn't have it) */}
          <a href="#" className="text-black hover:text-gray-500 transition-colors">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.74a4.85 4.85 0 0 1-1.01-.05z" />
            </svg>
          </a>
        </div>

        <p className="text-gray-400 text-xs">
          © Just Wings Liverpool Ltd. 2026. All rights reserved.
        </p>
      </div>
    </footer>
  );
}