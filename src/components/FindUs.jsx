import { MapPin } from "lucide-react";

const locations = [
  { name: "Crosby", url: "https://just-wings-crosby.ordertiger.com/" },
  { name: "Southport", url: "https://just-wings-crosby.ordertiger.com/menu/just-wings_southport" },
  { name: "St Helens", url: "https://just-wings-crosby.ordertiger.com/menu/just-wings_st-helens" },
  { name: "Leigh", url: "https://just-wings-crosby.ordertiger.com/menu/just-wings_leigh" },
];

export default function FindUs() {
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
          <div className="flex items-center gap-2 mb-6">
            <MapPin className="text-white" size={24} />
            <h2
              className="text-white font-black uppercase text-center"
              style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)", letterSpacing: "-0.03em" }}
            >
              FIND JUST WINGS
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {locations.map((loc) => (
              <a
                key={loc.name}
                href={loc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black font-black uppercase tracking-widest text-sm px-6 py-3 hover:bg-black hover:text-white border-2 border-white transition-colors"
              >
                {loc.name}
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* Locations list */}
      <div className="bg-white border-t-2 border-black">
        <div className="max-w-6xl mx-auto divide-y divide-black/10">
          {[
            { name: "Just Wings - Crosby", address: "24 Cooks Road, L23 2TB, Liverpool", status: "Open" },
            { name: "Just Wings - Southport", address: "4-6 Cable St, PR9 0DF, Southport", status: "Open" },
            { name: "Just Wings - St Helens", address: "53 Ormskirk Street, WA10 2SY, Merseyside", status: "Open" },
            { name: "Just Wings - Leigh", address: "98 Railway Road, WN7 4AN, Manchester", status: "Open" },
          ].map((loc, i) => (
            <div key={i} className="flex flex-col md:flex-row md:items-center justify-between px-6 md:px-12 py-5 hover:bg-gray-50 transition-colors">
              <div>
                {loc.area && (
                  <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">{loc.area}</p>
                )}
                <h3 className="font-black uppercase text-base tracking-tight">{loc.name}</h3>
                <p className="text-gray-500 text-sm">{loc.address}</p>
              </div>
              <span className="mt-2 md:mt-0 text-green-600 font-black text-xs uppercase tracking-widest">{loc.status}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}