import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const menuItems = [
  {
    name: "Crispy Hot Wings",
    description: "4 crispy breaded hot wings, ideal addition to any meal.",
    price: "£5.95",
    image: "https://media.base44.com/images/public/69cfc74a21d361a7e6a2fb4d/56e82698b_wingshero.jpg",
  },
  {
    name: "Popcorn Chicken",
    description: "15 pieces of popcorn chicken breast lightly breaded, ideal with our homemade ranch.",
    price: "£5.95",
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600&q=80",
  },
  {
    name: "American Fries",
    description: "Lightly seasoned with American Red Salt.",
    price: "£3.50",
    image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=600&q=80",
  },
  {
    name: "6 Boneless Wings",
    description: "100% breast meat, breaded & tossed in your favourite Just Wings sauce or seasoning.",
    price: "£10.99",
    image: "https://media.base44.com/images/public/69cfc74a21d361a7e6a2fb4d/021ef4966_bonelesswings.jpeg",
  },
  {
    name: "Chicken Wings (x6)",
    description: "6 classic chicken wings tossed in your choice of our iconic flavors.",
    price: "£8.99",
    image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=600&q=80",
  },
];

export default function MenuCarousel() {
  const [current, setCurrent] = useState(0);
  const visible = 3;
  const max = menuItems.length - visible;

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(max, c + 1));

  return (
    <section id="menu" className="bg-white py-16 px-4 md:px-12">
      <div className="relative">
        {/* Navigation arrows */}
        <button
          onClick={prev}
          disabled={current === 0}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black text-white p-3 disabled:opacity-30 hover:bg-gray-800 transition-colors"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={next}
          disabled={current >= max}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black text-white p-3 disabled:opacity-30 hover:bg-gray-800 transition-colors"
        >
          <ChevronRight size={20} />
        </button>

        {/* Cards */}
        <div className="overflow-hidden mx-10">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * (100 / visible)}%)` }}
          >
            {menuItems.map((item, i) => (
              <div
                key={i}
                className="flex-shrink-0 px-4"
                style={{ width: `${100 / visible}%` }}
              >
                <div className="flex flex-col text-center h-full">
                  <div className="aspect-square overflow-hidden mb-4 bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
                    />
                  </div>
                  <h3 className="font-black text-black text-xl uppercase tracking-tight mb-2">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-1 flex-1">{item.description}</p>
                  <p className="font-black text-black text-lg mb-4">{item.price}</p>
                  <a
                    href="https://just-wings-crosby.ordertiger.com/locations"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full border-2 border-black bg-black text-white font-black text-sm uppercase tracking-widest py-3 hover:bg-white hover:text-black transition-colors text-center"
                  >
                    Order Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}