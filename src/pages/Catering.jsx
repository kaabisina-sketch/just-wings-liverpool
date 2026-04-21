import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Package, Truck, MessageSquare, ArrowRight, Phone, MapPin } from "lucide-react";

const cateringOptions = [
  {
    icon: Package,
    title: "Pick Up",
    tag: "Most Popular",
    desc: "No minimums. 24-hour notice appreciated for larger orders. Collect fresh and hot from your nearest Just Wings.",
    action: null,
  },
  {
    icon: Truck,
    title: "Delivery",
    tag: "Hassle Free",
    desc: "Catering delivery available for a stress-free event. We bring the wings directly to your venue.",
    action: null,
  },
  {
    icon: MessageSquare,
    title: "Custom Quote",
    tag: "Large Events",
    desc: "Get in touch with our catering team for full details, custom quotes, and large event planning.",
    action: { label: "Get a Quote", href: "mailto:catering@justwings.co.uk" },
  },
];

const stats = [
  { value: "4", label: "Locations" },
  { value: "12", label: "Iconic Flavors" },
  { value: "500+", label: "Events Catered" },
  { value: "24hr", label: "Notice Needed" },
];

export default function Catering() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* HERO — full bleed with bold overlay */}
      <section className="pt-[60px] relative min-h-[90vh] flex items-end overflow-hidden md:min-h-[100vh]">
        <img
          src="https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=1600&q=80"
          alt="Wings catering"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10" />

        {/* Diagonal accent stripe */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-black/30 skew-x-6 origin-top-right hidden md:block" />

        <div className="relative z-10 w-full px-6 md:px-16 pt-16 pb-14 md:pb-20">
          <div className="max-w-6xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white text-black font-black uppercase tracking-widest text-xs px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-red-600 rounded-full" />
              Just Wings Catering
            </div>

            <h1
              className="text-white font-black uppercase leading-none mb-4"
              style={{ fontSize: "clamp(3.5rem, 10vw, 8rem)", letterSpacing: "-0.04em" }}
            >
              FEED THE<br />CROWD.
            </h1>
            <p className="text-gray-300 text-lg max-w-lg mb-10 leading-relaxed">
              Bold flavors, fresh wings, delivered or collected — for events big and small across Merseyside.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://just-wings-crosby.ordertiger.com/locations"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 bg-white text-black font-black uppercase tracking-widest text-sm px-8 py-5 hover:bg-red-600 hover:text-white transition-all duration-300 min-w-[220px]"
              >
                Place a Catering Order
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="mailto:catering@justwings.co.uk"
                className="group flex items-center justify-center gap-3 bg-transparent text-white border-2 border-white font-black uppercase tracking-widest text-sm px-8 py-5 hover:bg-white hover:text-black transition-all duration-300 min-w-[220px]"
              >
                <Phone size={16} />
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="bg-black border-b-2 border-white/10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`flex flex-col items-center justify-center py-8 px-4 text-center ${i < stats.length - 1 ? "border-r border-white/10" : ""}`}
            >
              <span className="text-white font-black text-4xl md:text-5xl tracking-tight">{s.value}</span>
              <span className="text-gray-400 font-bold uppercase tracking-widest text-xs mt-1">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CATERING OPTIONS */}
      <section className="bg-black py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <h2
              className="text-white font-black uppercase leading-none"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.04em" }}
            >
              How It Works
            </h2>
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
              Choose the option that works best for your event and we'll handle the rest.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-white/10">
            {cateringOptions.map((item, i) => (
              <div
                key={i}
                className={`relative bg-white/5 p-10 flex flex-col hover:bg-white hover:text-black transition-all duration-300 group ${i < cateringOptions.length - 1 ? "border-b-2 md:border-b-0 md:border-r-2 border-white/10" : ""}`}
              >
                {/* Tag */}
                <span className="inline-block bg-red-600 text-white font-black uppercase tracking-widest text-xs px-3 py-1 mb-6 w-fit">
                  {item.tag}
                </span>

                <item.icon size={40} className="mb-5 text-white group-hover:text-black transition-colors" strokeWidth={1.5} />

                <h3 className="font-black uppercase text-2xl tracking-tight mb-3 text-white group-hover:text-black transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-600 text-sm leading-relaxed flex-1 transition-colors">
                  {item.desc}
                </p>

                {item.action && (
                  <a
                    href={item.action.href}
                    className="mt-8 flex items-center gap-2 font-black uppercase tracking-widest text-sm text-white group-hover:text-black transition-colors"
                  >
                    {item.action.label}
                    <ArrowRight size={16} />
                  </a>
                )}

                {/* Number */}
                <span className="absolute bottom-6 right-8 text-7xl font-black text-white/5 group-hover:text-black/5 leading-none select-none transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ORDER BANNER */}
      <section className="relative overflow-hidden bg-red-600 py-16 px-6">
        {/* Background text watermark */}
        <div className="absolute inset-0 flex items-center overflow-hidden opacity-10 select-none pointer-events-none">
          <span className="text-white font-black uppercase text-[8rem] md:text-[12rem] leading-none whitespace-nowrap tracking-tight">
            ORDER NOW · ORDER NOW ·
          </span>
        </div>
        <div className="relative max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8 text-center sm:text-left">
          <div>
            <p className="text-red-200 font-black uppercase tracking-widest text-xs mb-2">Ready to order?</p>
            <h2
              className="text-white font-black uppercase leading-none"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.04em" }}
            >
              Place a Catering Order
            </h2>
          </div>
          <a
            href="https://just-wings-crosby.ordertiger.com/locations"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex-shrink-0 flex items-center gap-3 bg-white text-black font-black uppercase tracking-widest text-sm px-10 py-5 hover:bg-black hover:text-white transition-all duration-300 text-lg"
          >
            Order Now
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* BOTTOM SPLIT — Map + Large Event */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[400px]">
        {/* Find a Location */}
        <div className="relative overflow-hidden group" style={{ minHeight: "400px" }}>
          <iframe
            title="Liverpool Map"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-2.9985%2C53.3950%2C-2.9585%2C53.4150&layer=mapnik"
            className="absolute inset-0 w-full h-full border-0"
            style={{ filter: "grayscale(1) contrast(1.1)" }}
          />
          <div className="absolute inset-0 bg-black/65 flex flex-col justify-end p-10">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="text-white" size={18} />
              <span className="text-gray-300 font-black uppercase tracking-widest text-xs">4 Locations</span>
            </div>
            <h3
              className="text-white font-black uppercase leading-tight mb-6"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", letterSpacing: "-0.03em" }}
            >
              Find a Location<br />Near You
            </h3>
            <a
              href="/locations"
              className="group/btn flex items-center gap-3 bg-white text-black font-black uppercase tracking-widest text-sm px-8 py-4 hover:bg-red-600 hover:text-white transition-all duration-300 w-fit"
            >
              View Locations
              <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Large Event */}
        <div className="relative overflow-hidden group" style={{ minHeight: "400px" }}>
          <img
            src="https://media.base44.com/images/public/69cfc74a21d361a7e6a2fb4d/006fd753e_cateringimage.jpeg"
            alt="Large event catering"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-black/65 flex flex-col justify-end p-10">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 bg-red-600 rounded-full" />
              <span className="text-gray-300 font-black uppercase tracking-widest text-xs">Custom Packages</span>
            </div>
            <h3
              className="text-white font-black uppercase leading-tight mb-6"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", letterSpacing: "-0.03em" }}
            >
              Large Event<br />Catering
            </h3>
            <a
              href="mailto:catering@justwings.co.uk"
              className="group/btn flex items-center gap-3 bg-white text-black font-black uppercase tracking-widest text-sm px-8 py-4 hover:bg-red-600 hover:text-white transition-all duration-300 w-fit"
            >
              Enquire Now
              <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}