import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Catering() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-[60px] relative min-h-[70vh] flex items-end overflow-hidden bg-black">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1400&q=80"
          alt="Catering"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-10 px-8 md:px-16 py-16 max-w-4xl">
          <span className="border-2 border-white text-white text-xs font-black tracking-widest uppercase px-3 py-1 mb-6 inline-block">
            Catering
          </span>
          <h1
            className="text-white font-black uppercase leading-none mb-6"
            style={{ fontSize: "clamp(3rem, 8vw, 6rem)", letterSpacing: "-0.04em" }}
          >
            FEED THE<br />WHOLE CREW.
          </h1>
          <p className="text-gray-200 text-lg max-w-xl leading-relaxed">
            Parties, events, corporate. We bring the wings — you bring the people.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="bg-white py-20 px-4 md:px-12 border-t-2 border-black">
        <div className="max-w-6xl mx-auto">
          <div className="border-b-2 border-black pb-6 mb-12">
            <h2
              className="font-black uppercase leading-none"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.04em" }}
            >
              Catering Packages
            </h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-sm mt-2">
              Everything you need — nothing you don't
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-black">
            {[
              {
                name: "The Starter",
                serves: "Serves 10–15",
                price: "From £79",
                includes: ["60 Wings", "3 Flavor choices", "4 Dips", "Napkins & serving trays"],
              },
              {
                name: "The Crowd",
                serves: "Serves 25–35",
                price: "From £169",
                includes: ["150 Wings", "6 Flavor choices", "8 Dips", "Fries x5", "Full setup"],
                featured: true,
              },
              {
                name: "The Takeover",
                serves: "Serves 50+",
                price: "POA",
                includes: ["Unlimited Wings", "All 12 Flavors", "Full catering team", "Custom branded setup"],
              },
            ].map((pkg, i) => (
              <div
                key={i}
                className={`p-10 flex flex-col ${i < 2 ? "md:border-r-2 border-black" : ""} ${pkg.featured ? "bg-black text-white" : "bg-white text-black"}`}
              >
                {pkg.featured && (
                  <span className="text-xs font-black uppercase tracking-widest text-red-400 mb-3">Most Popular</span>
                )}
                <h3 className="font-black uppercase text-2xl tracking-tight mb-1">{pkg.name}</h3>
                <p className={`text-sm uppercase tracking-widest mb-4 ${pkg.featured ? "text-gray-400" : "text-gray-500"}`}>
                  {pkg.serves}
                </p>
                <p className="font-black text-3xl mb-6">{pkg.price}</p>
                <ul className="flex-1 space-y-2 mb-8">
                  {pkg.includes.map((item, j) => (
                    <li key={j} className={`flex items-center gap-2 text-sm ${pkg.featured ? "text-gray-300" : "text-gray-600"}`}>
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${pkg.featured ? "bg-white" : "bg-black"}`} />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="mailto:catering@justwings.co.uk"
                  className={`block text-center font-black uppercase tracking-widest text-sm px-6 py-4 border-2 transition-colors ${
                    pkg.featured
                      ? "border-white text-white hover:bg-white hover:text-black"
                      : "border-black text-black hover:bg-black hover:text-white"
                  }`}
                >
                  Enquire Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-gray-50 py-20 px-4 md:px-12 border-t-2 border-black">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              className="font-black uppercase leading-none mb-6"
              style={{ fontSize: "clamp(2rem, 5vw, 3rem)", letterSpacing: "-0.04em" }}
            >
              Why Just Wings<br />Catering?
            </h2>
            <div className="space-y-6">
              {[
                { title: "Fresh & Hot", desc: "Every order is made fresh and delivered hot to your event." },
                { title: "Flexible", desc: "From 10 to 500+ guests — we scale with you." },
                { title: "12 Flavors", desc: "Let guests pick their own heat — something for everyone." },
                { title: "Liverpool-based", desc: "Fast, local, reliable. We know the city." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-1 bg-red-700 flex-shrink-0 self-stretch" />
                  <div>
                    <h4 className="font-black uppercase text-sm tracking-widest mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-square overflow-hidden border-2 border-black">
            <img
              src="https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=800&q=80"
              alt="Catering wings"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-black py-20 px-4 text-center border-t-2 border-white">
        <h2
          className="text-white font-black uppercase leading-none mb-4"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.04em" }}
        >
          Let's Talk
        </h2>
        <p className="text-gray-400 mb-8 text-sm uppercase tracking-widest">Get in touch for a custom quote</p>
        <a
          href="mailto:catering@justwings.co.uk"
          className="inline-block bg-white text-black font-black uppercase tracking-widest text-sm px-12 py-4 hover:bg-gray-200 transition-colors"
        >
          Email Us
        </a>
      </section>

      <Footer />
    </div>
  );
}