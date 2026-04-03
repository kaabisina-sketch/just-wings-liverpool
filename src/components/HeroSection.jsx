export default function HeroSection() {
  return (
    <section className="pt-[60px]">
      {/* Top split hero */}
      <div className="flex flex-col md:flex-row min-h-[70vh]">
        {/* Left - food photo */}
        <div className="relative w-full md:w-1/2 min-h-[50vw] md:min-h-[70vh] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=900&q=80"
            alt="Wings spread"
            className="w-full h-full object-cover grayscale brightness-75"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute bottom-6 left-6">
            <span className="border-2 border-white text-white text-xs font-black tracking-widest uppercase px-3 py-1">
              Liverpool's Finest
            </span>
          </div>
        </div>

        {/* Right - lifestyle photo + tagline */}
        <div className="relative w-full md:w-1/2 min-h-[50vw] md:min-h-[70vh] overflow-hidden bg-black">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900&q=80"
            alt="Lifestyle"
            className="w-full h-full object-cover grayscale opacity-50"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
            <p className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-2">
              12 Iconic Flavors. Got The Flavor.
            </p>
            <h1
              className="text-white font-black uppercase leading-none"
              style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)", letterSpacing: "-0.03em" }}
            >
              WHAT FLAVOR<br />ARE YOU?
            </h1>
            <a
              href="#menu"
              className="mt-6 inline-block bg-white text-black font-black text-sm uppercase tracking-widest px-8 py-3 hover:bg-gray-200 transition-colors w-fit"
            >
              Order Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}