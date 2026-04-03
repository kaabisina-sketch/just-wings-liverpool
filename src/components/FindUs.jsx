import { useState } from "react";
import { MapPin, ArrowRight } from "lucide-react";

export default function FindUs() {
  const [postcode, setPostcode] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Finding Just Wings near ${postcode}...`);
  };

  return (
    <section id="find-us" className="relative">
      {/* Map background using OpenStreetMap embed for Liverpool */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <iframe
          title="Liverpool Map"
          src="https://www.openstreetmap.org/export/embed.html?bbox=-3.0662%2C53.3768%2C-2.8662%2C53.4768&layer=mapnik&marker=53.4068%2C-2.9662"
          className="w-full h-full border-0 grayscale"
          style={{ filter: "grayscale(1) contrast(1.1)" }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center px-4">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="text-white" size={24} />
            <h2
              className="text-white font-black uppercase text-center"
              style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)", letterSpacing: "-0.03em" }}
            >
              FIND JUST WINGS
            </h2>
          </div>
          <form onSubmit={handleSearch} className="flex w-full max-w-md">
            <input
              type="text"
              value={postcode}
              onChange={(e) => setPostcode(e.target.value)}
              placeholder="Enter your postcode here"
              className="flex-1 bg-white text-black font-bold text-sm px-5 py-4 outline-none placeholder-gray-400"
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-4 border-2 border-white hover:bg-white hover:text-black transition-colors"
            >
              <ArrowRight size={20} />
            </button>
          </form>
          <p className="text-gray-300 text-xs mt-4 uppercase tracking-widest">
            Liverpool City Centre · Baltic Triangle · Anfield
          </p>
        </div>
      </div>
    </section>
  );
}