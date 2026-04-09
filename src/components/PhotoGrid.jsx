const photos = [
  "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=600&q=80",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
  "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=600&q=80",
  "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600&q=80",
  "https://media.base44.com/images/public/69cfc74a21d361a7e6a2fb4d/5c51ca470_wings2.jpeg",
  "https://media.base44.com/images/public/69cfc74a21d361a7e6a2fb4d/0f1cac159_justwings3.jpeg",
  "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=600&q=80",
  "https://media.base44.com/images/public/69cfc74a21d361a7e6a2fb4d/c7ef7fcd1_justwings5.jpeg",
  "https://media.base44.com/images/public/69cfc74a21d361a7e6a2fb4d/063784548_justwings6.jpeg",
  "https://media.base44.com/images/public/69cfc74a21d361a7e6a2fb4d/e39ee6c61_justwings4.jpeg",
];

export default function PhotoGrid() {
  return (
    <section className="bg-white">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-0">
        {photos.map((src, i) => (
          <div key={i} className="aspect-square overflow-hidden group">
            <img
              src={src}
              alt={`Just Wings photo ${i + 1}`}
              className={`w-full h-full object-cover group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500 ${i % 2 === 0 ? "" : "grayscale brightness-50"}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}