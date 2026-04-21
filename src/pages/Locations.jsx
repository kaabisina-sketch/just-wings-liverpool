import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MapPin } from "lucide-react";

const locations = [
  {
    name: "Just Wings - Crosby",
    address: "24 Cooks Road, L23 2TB, Liverpool",
    status: "Open",
    image: "https://media.base44.com/images/public/69cfc74a21d361a7e6a2fb4d/7fe0a0f08_justwingstore1.jpg",
  },
  {
    name: "Just Wings - Southport",
    address: "4-6 Cable St, PR9 0DF, Southport",
    status: "Open",
    image: "https://media.base44.com/images/public/69cfc74a21d361a7e6a2fb4d/3a60f3f85_justwingstore2.jpg",
  },
  {
    name: "Just Wings - St Helens",
    address: "53 Ormskirk Street, WA10 2SY, Merseyside",
    status: "Open",
    image: "https://media.base44.com/images/public/69cfc74a21d361a7e6a2fb4d/cbd4263a1_justwingsstore3.jpg",
  },
  {
    name: "Just Wings - Leigh",
    address: "98 Railway Road, WN7 4AN, Manchester",
    status: "Open",
    image: "https://media.base44.com/images/public/69cfc74a21d361a7e6a2fb4d/2ef359d2f_justwingstore5.jpg",
  },
];

export default function Locations() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-[100px] bg-black pb-16 px-4 text-center">
        <h1
          className="text-white font-black uppercase leading-none"
          style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)", letterSpacing: "-0.03em" }}
        >
          OUR LOCATIONS
        </h1>
        <p className="text-gray-400 font-bold uppercase tracking-widest text-sm mt-3">
          Crosby · Southport · St Helens · Leigh
        </p>
      </section>

      {/* Locations */}
      <section className="max-w-5xl mx-auto px-4 py-10 md:py-16 space-y-6 md:space-y-8">
        {locations.map((loc, i) => (
          <div
            key={i}
            className="flex flex-col sm:flex-row border-2 border-black overflow-hidden hover:shadow-xl transition-shadow"
          >
            {/* Image */}
            <div className="w-full sm:w-56 md:w-72 h-48 sm:h-56 flex-shrink-0 overflow-hidden">
              <img
                src={loc.image}
                alt={loc.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info */}
            <div className="flex flex-col justify-center p-6 md:p-8 flex-1">
              <div className="flex items-start justify-between mb-3">
                <h2 className="font-black uppercase text-xl md:text-2xl tracking-tight leading-tight">
                  {loc.name}
                </h2>
                <span className="ml-3 flex-shrink-0 text-green-600 font-black text-xs uppercase tracking-widest border border-green-600 px-2 py-1">
                  {loc.status}
                </span>
              </div>
              <div className="flex items-center gap-2 text-gray-500 mb-5">
                <MapPin size={16} className="flex-shrink-0" />
                <p className="text-sm">{loc.address}</p>
              </div>
              <a
                href="https://just-wings-crosby.ordertiger.com/locations"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-black text-white font-black uppercase tracking-widest text-sm px-6 py-3 hover:bg-gray-800 transition-colors w-fit"
              >
                Order Now
              </a>
            </div>
          </div>
        ))}
      </section>

      <Footer />
    </div>
  );
}