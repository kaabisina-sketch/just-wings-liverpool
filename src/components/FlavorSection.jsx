const flavors = [
  { name: "Classic Buffalo", heat: 3, desc: "Tangy and buttery. The original." },
  { name: "Lemon Pepper", heat: 1, desc: "Bright citrus meets cracked pepper." },
  { name: "Honey Garlic", heat: 1, desc: "Sweet meets savoury. Pure gold." },
  { name: "Mersey Hot", heat: 4, desc: "Liverpool fire. Not for the faint-hearted." },
  { name: "BBQ Smoked", heat: 2, desc: "Deep, smoky, slow-cooked flavour." },
  { name: "Mango Habanero", heat: 5, desc: "Tropical heat. Maximum danger." },
];

export default function FlavorSection() {
  return (
    <section id="flavors" className="bg-gray-50 py-20 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="border-b-2 border-black pb-6 mb-12">
          <h2
            className="text-black font-black uppercase"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", letterSpacing: "-0.04em" }}
          >
            The Flavors
          </h2>
          <p className="text-gray-500 font-bold uppercase tracking-widest text-sm mt-2">
            12 iconic flavors — pick your weapon
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
          {flavors.map((flavor, i) => (
            <div
              key={i}
              className="border border-black/20 p-8 hover:bg-black hover:text-white transition-all duration-300 group cursor-pointer bg-white"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-black text-black group-hover:text-white uppercase text-xl tracking-tight leading-tight">
                  {flavor.name}
                </h3>
                <span className="text-xs font-black uppercase tracking-widest text-gray-400 group-hover:text-gray-300">
                  #{String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="text-gray-500 group-hover:text-gray-300 text-sm mb-6">{flavor.desc}</p>
              {/* Heat bar */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-black uppercase tracking-widest text-gray-400 group-hover:text-gray-300">
                  Heat
                </span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <div
                      key={n}
                      className={`h-2 w-5 ${
                        n <= flavor.heat
                          ? "bg-black group-hover:bg-white"
                          : "bg-black/20 group-hover:bg-white/20"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#menu"
            className="inline-block border-2 border-black text-black font-black uppercase tracking-widest text-sm px-12 py-4 hover:bg-black hover:text-white transition-colors"
          >
            View Full Menu
          </a>
        </div>
      </div>
    </section>
  );
}