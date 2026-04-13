import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ORDER_URL = "https://just-wings-crosby.ordertiger.com/locations";

export default function AboutUs() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-[60px] relative min-h-[70vh] flex items-end overflow-hidden bg-black">
        <img
          src="https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=1400&q=80"
          alt="Just Wings"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative z-10 px-8 md:px-16 py-16 max-w-4xl">
          <span className="border-2 border-white text-white text-xs font-black tracking-widest uppercase px-3 py-1 mb-6 inline-block">
            Our Story
          </span>
          <h1
            className="text-white font-black uppercase leading-none mb-6"
            style={{ fontSize: "clamp(3rem, 8vw, 6rem)", letterSpacing: "-0.04em" }}
          >
            BORN IN<br />LIVERPOOL.
          </h1>
          <p className="text-gray-200 text-lg max-w-xl leading-relaxed">
            We started Just Wings because Liverpool deserved better wings. Bolder flavors. Real heat. No compromise.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="flex flex-col md:flex-row min-h-[60vh] border-t-2 border-black">
        <div className="w-full md:w-1/2 bg-black flex flex-col justify-center px-10 md:px-16 py-16">
          <h2
            className="text-white font-black uppercase leading-none mb-6"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em" }}
          >
            THE JUST WINGS<br />MISSION
          </h2>
          <p className="text-gray-300 text-base leading-relaxed mb-6">
            We believe chicken wings should be an experience — not an afterthought. That's why every wing we make is tossed fresh, sauced bold, and served hot. No frozen shortcuts. No flavor compromises.
          </p>
          <p className="text-gray-400 text-sm leading-relaxed">
            From our kitchen in Liverpool to your hands — we obsess over every detail so you don't have to think about anything except which flavor to hit next.
          </p>
        </div>
        <div className="relative w-full md:w-1/2 min-h-[50vw] md:min-h-[60vh] overflow-hidden">
          <img
            src="https://media.base44.com/images/public/69cfc74a21d361a7e6a2fb4d/5b9049b65_justwingstore5.jpg"
            alt="Team"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-20 px-4 md:px-12 border-t-2 border-black">
        <div className="max-w-6xl mx-auto">
          <h2
            className="font-black uppercase leading-none mb-14 text-center"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.04em" }}
          >
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-2 border-black">
            {[
              { title: "Bold Flavor", desc: "12 iconic sauces. Every one earned its place." },
              { title: "Fresh Only", desc: "Made to order. Never frozen, never rushed." },
              { title: "Community", desc: "Liverpool-born. Liverpool-proud. Always." },
              { title: "Real Heat", desc: "From zero to inferno — we respect all heat levels." },
            ].map((v, i) => (
              <div
                key={i}
                className={`p-8 hover:bg-black hover:text-white transition-all group ${i < 3 ? "sm:border-r-2 border-black" : ""}`}
              >
                <div className="w-8 h-1 bg-red-700 mb-6 group-hover:bg-white transition-colors" />
                <h3 className="font-black uppercase text-lg tracking-tight mb-3">{v.title}</h3>
                <p className="text-gray-500 group-hover:text-gray-300 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black py-20 px-4 text-center border-t-2 border-white">
        <h2
          className="text-white font-black uppercase leading-none mb-6"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.04em" }}
        >
          Taste The Story
        </h2>
        <a
          href={ORDER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-black font-black uppercase tracking-widest text-sm px-12 py-4 hover:bg-gray-200 transition-colors"
        >
          Order Now
        </a>
      </section>

      <Footer />
    </div>
  );
}