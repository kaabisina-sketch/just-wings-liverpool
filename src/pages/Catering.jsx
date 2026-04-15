import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Package, Truck, MessageSquare } from "lucide-react";

export default function Catering() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Hero — food photos flanking centered title */}
      <section className="pt-[60px] relative overflow-hidden bg-white">
        <div className="grid grid-cols-5 md:grid-cols-7 min-h-[420px]">
          {/* Left food image */}
          <div className="col-span-2 md:col-span-3 relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=800&q=80"
              alt="Wings catering"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>

          {/* Center content */}
          <div className="col-span-1 flex flex-col items-center justify-center bg-white px-6 py-12 text-center z-10">
            <img
              src="https://media.base44.com/images/public/69cfc74a21d361a7e6a2fb4d/d5518e41e_justwingslogo.png"
              alt="Just Wings"
              className="h-14 mb-6"
            />
            <h1
              className="font-black uppercase leading-none mb-8 text-black"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 3.5rem)", letterSpacing: "-0.04em" }}
            >
              CATERING
            </h1>
            <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
              <a
                href="mailto:catering@justwings.co.uk"
                className="bg-black text-white font-black uppercase tracking-widest text-xs px-6 py-4 hover:bg-gray-800 transition-colors text-center"
              >
                Start a Catering Order
              </a>
              <a
                href="mailto:catering@justwings.co.uk"
                className="border-2 border-black text-black font-black uppercase tracking-widest text-xs px-6 py-4 hover:bg-black hover:text-white transition-colors text-center"
              >
                Get a Quote
              </a>
            </div>
          </div>

          {/* Right food image */}
          <div className="col-span-2 md:col-span-3 relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=800&q=80"
              alt="Wings spread"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </section>

      {/* Catering Options */}
      <section className="bg-black py-20 px-4">
        <h2
          className="text-white font-black uppercase text-center mb-12"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.04em" }}
        >
          Catering Options
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Package,
              title: "Pick Up",
              desc: "No minimums. 24-hour notice appreciated for larger orders. Collect fresh and hot from your nearest Just Wings.",
            },
            {
              icon: Truck,
              title: "Delivery",
              desc: "Catering delivery available for a stress-free event. We bring the wings directly to your venue.",
            },
            {
              icon: MessageSquare,
              title: "Catering Questions?",
              desc: "Get in touch with our catering team for full details, custom quotes, and large event planning.",
              cta: true,
            },
          ].map((item, i) => (
            <div key={i} className="bg-white p-10 flex flex-col items-center text-center">
              <item.icon size={48} className="mb-6 text-black" strokeWidth={1.5} />
              <h3 className="font-black uppercase text-xl tracking-tight mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">{item.desc}</p>
              {item.cta && (
                <a
                  href="mailto:catering@justwings.co.uk"
                  className="mt-auto bg-black text-white font-black uppercase tracking-widest text-xs px-8 py-3 hover:bg-gray-800 transition-colors"
                >
                  Catering Enquiry
                </a>
              )}
            </div>
          ))}
        </div>
      </section>


      {/* Start a Catering Order Banner */}
      <section className="bg-black border-t-2 border-white py-10 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <h2
            className="text-white font-black uppercase leading-none"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.04em" }}
          >
            Start a Catering Order
          </h2>
          <a
            href="mailto:catering@justwings.co.uk"
            className="flex-shrink-0 bg-white text-black font-black uppercase tracking-widest text-sm px-10 py-4 hover:bg-gray-200 transition-colors"
          >
            Order Now
          </a>
        </div>
      </section>

      {/* Bottom split — Find a location / Large event */}
      <section className="grid grid-cols-1 md:grid-cols-2 border-t-2 border-black min-h-[300px]">
        <div className="relative overflow-hidden group">
          <img
            src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&q=80"
            alt="Find a location"
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
            style={{ minHeight: "300px" }}
          />
          <div className="absolute inset-0 bg-black/60 flex items-end p-10">
            <a href="/locations" className="group/link">
              <h3
                className="text-white font-black uppercase leading-tight hover:underline"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", letterSpacing: "-0.03em" }}
              >
                Find a Location<br />Near You
              </h3>
            </a>
          </div>
        </div>
        <div className="relative overflow-hidden group">
          <img
            src="https://media.base44.com/images/public/69cfc74a21d361a7e6a2fb4d/a68bca97d_flavord10.jpg"
            alt="Large event catering"
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
            style={{ minHeight: "300px" }}
          />
          <div className="absolute inset-0 bg-black/60 flex items-end p-10">
            <a href="mailto:catering@justwings.co.uk" className="group/link">
              <h3
                className="text-white font-black uppercase leading-tight hover:underline"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", letterSpacing: "-0.03em" }}
              >
                Large Event<br />Catering
              </h3>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}