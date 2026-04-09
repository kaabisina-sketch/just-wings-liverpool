import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ORDER_URL = "https://just-wings-crosby.ordertiger.com/locations";

const faqs = {
  "New to the Program": [
    { q: "How do I join Just Wings Rewards?", a: "Download our app or sign up online for free. It only takes a minute to start earning." },
    { q: "Is it free to join?", a: "Yes! Joining Just Wings Rewards is completely free." },
    { q: "Can I use rewards in store and online?", a: "Yes, rewards can be redeemed both in-store and when ordering online through our app." },
  ],
  "Earning Points": [
    { q: "How do I earn points?", a: "You earn 10 points for every £1 spent on eligible orders placed through the Just Wings app or website." },
    { q: "Do points expire?", a: "Points expire after 6 months of account inactivity. Keep ordering to keep your points!" },
    { q: "Can I earn points on all menu items?", a: "Points are earned on most menu items. Promotional items may be excluded." },
  ],
  "Rewards": [
    { q: "How do I redeem my points?", a: "Once you've accumulated enough points, you can redeem them at checkout through the app for free food and drinks." },
    { q: "What can I get with my points?", a: "Redeem for free wings, sides, dips, and more. New rewards added regularly." },
    { q: "Is there a minimum points balance to redeem?", a: "You'll need a minimum of 500 points to start redeeming rewards." },
  ],
  "Other Questions": [
    { q: "Can I transfer my points to someone else?", a: "Points are non-transferable and linked to your individual account." },
    { q: "What if I forget to scan my receipt?", a: "Contact our guest support team within 7 days of your order and we'll look into it." },
    { q: "How do I update my account details?", a: "Log into the app or website and visit your profile settings to update your information." },
  ],
};

export default function Rewards() {
  const [activeTab, setActiveTab] = useState("New to the Program");
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-[60px] bg-gray-100 min-h-[85vh] flex flex-col md:flex-row items-stretch">
        {/* Left – dark visual */}
        <div className="relative w-full md:w-1/2 min-h-[50vw] md:min-h-[85vh] overflow-hidden bg-black flex items-center justify-center">
          <img
            src="https://media.base44.com/images/public/69cfc74a21d361a7e6a2fb4d/51dbf268f_justwings.jpg"
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
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#" className="flex items-center gap-3 bg-black border-2 border-white text-white px-5 py-3 rounded-lg hover:bg-gray-900 transition-colors">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white"><path d="M3.18 23.76c.35.19.75.24 1.15.14l11.53-6.65-2.49-2.49-10.19 9zm16.49-9.7L17.2 12.6l2.47-1.46c.9-.53.9-1.75 0-2.28L5.78.34C5.38.14 4.96.1 4.6.29L15.17 10.86l4.5-2.6c.3.37.3.9 0 1.27l-4.5-2.6-2.47 1.46 2.47 2.47 4.5 2.6c.3.37.3.9 0 1.27l-4.5-2.6zM4.33.43C3.98.53 3.72.82 3.72 1.24v21.52c0 .42.26.71.61.81L15.17 13.14 4.33.43z"/></svg>
                <div className="text-left">
                  <p className="text-[10px] text-gray-400 leading-none">GET IT ON</p>
                  <p className="font-black text-sm leading-tight">Google Play</p>
                </div>
              </a>
              <a href="#" className="flex items-center gap-3 bg-black border-2 border-white text-white px-5 py-3 rounded-lg hover:bg-gray-900 transition-colors">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
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
            <a href="#" className="flex-1 border-2 border-black text-black font-black uppercase tracking-widest text-sm px-8 py-4 text-center hover:bg-black hover:text-white transition-colors">Sign In</a>
            <a href="#" className="flex-1 bg-black text-white font-black uppercase tracking-widest text-sm px-8 py-4 text-center hover:bg-gray-800 transition-colors">Join Now</a>
          </div>
          <a href={ORDER_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between border-2 border-black px-8 py-4 mb-4 hover:bg-black hover:text-white transition-colors group">
            <span className="font-black uppercase tracking-widest text-sm">Order Now</span>
            <span className="font-black text-lg">›</span>
          </a>
          <a href={ORDER_URL} target="_blank" rel="noopener noreferrer" className="bg-red-700 text-white font-black uppercase tracking-widest text-sm px-8 py-4 text-center hover:bg-red-800 transition-colors">
            Order Pickup &amp; Delivery
          </a>
        </div>
      </section>

      {/* Earn Points Banner */}
      <section className="bg-red-700 py-8 px-4 text-center">
        <h2 className="text-white font-black uppercase text-2xl md:text-3xl tracking-tight mb-2">
          EARN POINTS TOWARD FREE JUST WINGS!*
        </h2>
        <p className="text-red-200 text-sm">
          *See <a href="#faqs" className="underline font-bold text-white">FAQs</a> for full details and exclusions
        </p>
      </section>

      {/* Getting Rewarded Is Easy */}
      <section className="bg-gray-50 py-20 px-4 md:px-12 border-t-2 border-black overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2
              className="font-black uppercase leading-none mb-12 text-black"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", letterSpacing: "-0.04em" }}
            >
              GETTING<br />REWARDED<br />IS EASY!
            </h2>
            <div className="space-y-8">
              {[
                { num: "1", title: "Join Just Wings Rewards", sub: "Download our App", desc: "Sign up for free in seconds on the Just Wings app or website." },
                { num: "2", title: "Order Your Favourites", sub: "Earn points on every order", desc: "Get 10 points for every £1 spent on eligible menu items." },
                { num: "3", title: "Let Your Points Pick Up The Tab*", sub: "Savor our wok-fired flavours for free", desc: "Redeem your points for free wings, sides, and more." },
              ].map((step) => (
                <div key={step.num} className="flex gap-6 items-start">
                  <span className="text-black font-black leading-none flex-shrink-0" style={{ fontSize: "5rem" }}>{step.num}</span>
                  <div className="border-l-2 border-black pl-6 pt-2">
                    <h3 className="font-black uppercase text-lg tracking-tight leading-tight mb-1">{step.title}</h3>
                    <p className="text-red-700 font-black text-sm uppercase tracking-widest mb-2">{step.sub}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Food image */}
          <div className="relative w-full md:w-80 lg:w-96 aspect-square flex-shrink-0 overflow-hidden border-2 border-black">
            <img
              src="https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=800&q=80"
              alt="Just Wings"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Rewards FAQs */}
      <section id="faqs" className="bg-red-700 py-20 px-4 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-white font-black uppercase text-center leading-none mb-8"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", letterSpacing: "-0.03em" }}
          >
            REWARDS FAQS
          </h2>

          {/* Tab nav */}
          <div className="flex flex-wrap justify-center gap-6 border-t border-b border-white/30 py-5 mb-8">
            {Object.keys(faqs).map((tab) => (
              <button
                key={tab}
                onClick={() => { setActiveTab(tab); setOpenFaq(null); }}
                className={`text-white font-black uppercase text-sm tracking-widest underline-offset-4 transition-all ${activeTab === tab ? "underline" : "opacity-70 hover:opacity-100"}`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* FAQ accordion */}
          <div className="space-y-2 mb-10">
            {faqs[activeTab].map((item, i) => (
              <div key={i} className="border border-white/30 overflow-hidden">
                <button
                  className="w-full text-left px-6 py-4 flex justify-between items-center text-white font-black uppercase text-sm tracking-widest"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  {item.q}
                  <span className="ml-4 flex-shrink-0 text-xl">{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-red-100 text-sm leading-relaxed border-t border-white/20 pt-4">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Info link */}
          <p className="text-center text-white text-sm mb-8">
            Need more information? View our list of{" "}
            <a href="#faqs" className="font-black underline">JUST WINGS REWARDS FAQS</a>
          </p>

          {/* Sign in / Join */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#" className="border-2 border-white text-white font-black uppercase tracking-widest text-sm px-12 py-4 text-center hover:bg-white hover:text-red-700 transition-colors">
              Sign In
            </a>
            <a href="#" className="bg-red-900 border-2 border-red-900 text-white font-black uppercase tracking-widest text-sm px-12 py-4 text-center hover:bg-red-950 transition-colors">
              Join Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}