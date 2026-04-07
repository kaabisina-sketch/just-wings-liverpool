import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ORDER_URL = "https://just-wings-crosby.ordertiger.com/locations";

export default function Rewards() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-[60px] bg-gray-100 min-h-[85vh] flex flex-col md:flex-row items-stretch">
        {/* Left – phone mockup / visual */}
        <div className="relative w-full md:w-1/2 min-h-[50vw] md:min-h-[85vh] overflow-hidden bg-black flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900&q=80"
            alt="Just Wings food"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          <div className="relative z-10 text-center px-10 py-16">
            <p className="text-gray-400 text-xs uppercase tracking-widest mb-4">Welcome to</p>
            <h1
              className="text-white font-black uppercase leading-none mb-4"
              style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)", letterSpacing: "-0.03em" }}
            >
              JUST WINGS<br />REWARDS
            </h1>
            <p className="text-gray-300 text-base mb-10">
              Eat bold. Earn big.<br />Start earning today!
            </p>
            {/* App store badges */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#"
                className="flex items-center gap-3 bg-black border-2 border-white text-white px-5 py-3 rounded-lg hover:bg-gray-900 transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                  <path d="M3.18 23.76c.35.19.75.24 1.15.14l11.53-6.65-2.49-2.49-10.19 9zm16.49-9.7L17.2 12.6l2.47-1.46c.9-.53.9-1.75 0-2.28L5.78.34C5.38.14 4.96.1 4.6.29L15.17 10.86l4.5-2.6c.3.37.3.9 0 1.27l-4.5-2.6-2.47 1.46 2.47 2.47 4.5 2.6c.3.37.3.9 0 1.27l-4.5-2.6zM4.33.43C3.98.53 3.72.82 3.72 1.24v21.52c0 .42.26.71.61.81L15.17 13.14 4.33.43z"/>
                </svg>
                <div className="text-left">
                  <p className="text-[10px] text-gray-400 leading-none">GET IT ON</p>
                  <p className="font-black text-sm leading-tight">Google Play</p>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 bg-black border-2 border-white text-white px-5 py-3 rounded-lg hover:bg-gray-900 transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <p className="text-[10px] text-gray-400 leading-none">Download on the</p>
                  <p className="font-black text-sm leading-tight">App Store</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Right – CTA */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-10 md:px-20 py-20 bg-gray-100">
          <h2
            className="font-black uppercase leading-none mb-8 text-black"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", letterSpacing: "-0.04em" }}
          >
            JOIN JUST WINGS<br />REWARDS
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a
              href="#"
              className="flex-1 border-2 border-black text-black font-black uppercase tracking-widest text-sm px-8 py-4 text-center hover:bg-black hover:text-white transition-colors"
            >
              Sign In
            </a>
            <a
              href="#"
              className="flex-1 bg-black text-white font-black uppercase tracking-widest text-sm px-8 py-4 text-center hover:bg-gray-800 transition-colors"
            >
              Join Now
            </a>
          </div>
          <a
            href={ORDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between border-2 border-black px-8 py-4 mb-4 hover:bg-black hover:text-white transition-colors group"
          >
            <span className="font-black uppercase tracking-widest text-sm">Order Now</span>
            <span className="font-black text-lg">›</span>
          </a>
          <a
            href={ORDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-700 text-white font-black uppercase tracking-widest text-sm px-8 py-4 text-center hover:bg-red-800 transition-colors"
          >
            Order Pickup &amp; Delivery
          </a>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white py-20 px-4 md:px-12 border-t-2 border-black">
        <div className="max-w-5xl mx-auto text-center">
          <h2
            className="font-black uppercase leading-none mb-4"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em" }}
          >
            How It Works
          </h2>
          <p className="text-gray-500 text-sm uppercase tracking-widest mb-14">Earn points every time you order</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-black">
            {[
              { step: "01", title: "Sign Up", desc: "Create your free Just Wings Rewards account in seconds." },
              { step: "02", title: "Order & Earn", desc: "Every pound you spend earns you points towards free food." },
              { step: "03", title: "Redeem", desc: "Use your points to get free wings, sides, and more." },
            ].map((s, i) => (
              <div key={i} className={`p-10 ${i < 2 ? "md:border-r-2 border-black" : ""}`}>
                <p className="text-red-700 font-black text-5xl mb-4">{s.step}</p>
                <h3 className="font-black uppercase text-xl tracking-tight mb-3">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}