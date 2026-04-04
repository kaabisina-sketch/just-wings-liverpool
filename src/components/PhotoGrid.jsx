const photos = [
  "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=600&q=80",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
  "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=600&q=80",
  "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600&q=80",
  "https://images.unsplash.com/photo-1598515213692-3d87dcfbe0c7?w=600&q=80",
  "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=600&q=80",
  "https://images.unsplash.com/photo-1585325701956-60dd9c8553bc?w=600&q=80",
  "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80",
  "https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=600&q=80",
  "https://images.unsplash.com/photo-1606728035253-49e8a23146de?w=600&q=80",
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