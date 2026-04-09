export default function WorkWithUs() {
  return (
    <section id="work-with-us" className="flex flex-col md:flex-row min-h-[60vh]">
      {/* Left - lifestyle image */}
      <div className="relative w-full md:w-1/2 min-h-[50vw] md:min-h-[60vh] overflow-hidden">
        <img
          src="https://media.base44.com/images/public/69cfc74a21d361a7e6a2fb4d/8a02cdb8e_justings1.jpg"
          alt="Team"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Right - content */}
      <div className="relative w-full md:w-1/2 bg-black flex flex-col justify-center p-10 md:p-16 border-l-2 border-white">
        <img
          src="https://media.base44.com/images/public/69cfc74a21d361a7e6a2fb4d/d5518e41e_justwingslogo.png"
          alt="Just Wings Logo"
          className="absolute inset-0 w-full h-full object-contain opacity-10 p-16"
        />
        <div className="relative z-10">
          <h2
            className="text-white font-black uppercase leading-none mb-6"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em" }}
          >
            WORK AT<br />JUST WINGS
          </h2>
          <p className="text-gray-300 text-base mb-8 max-w-md leading-relaxed">
            We're famous for spreading flavour across Liverpool. But also for our team spirit, the work culture, and real opportunities to grow with us.
          </p>
          <a
            href="#"
            className="inline-block bg-white text-black font-black uppercase tracking-widest text-sm px-10 py-4 hover:bg-gray-200 transition-colors"
          >
            Discover More
          </a>
        </div>
      </div>
    </section>
  );
}