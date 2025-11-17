function ArtCard({ title, artist, img }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
      <img src={img} alt={title} className="h-56 w-full object-cover transition duration-500 group-hover:scale-105" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 transition group-hover:opacity-100" />
      <div className="absolute inset-x-0 bottom-0 p-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-white font-semibold drop-shadow">{title}</h3>
            <p className="text-white/70 text-sm">{artist}</p>
          </div>
          <span className="rounded-lg bg-white/10 px-2 py-1 text-xs text-white/80 backdrop-blur">Featured</span>
        </div>
      </div>
    </div>
  )
}

function Gallery() {
  const samples = [
    { title: 'Neon Bloom', artist: 'Ava Martinez', img: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=1480&auto=format&fit=crop' },
    { title: 'Chromatic Drift', artist: 'Kai Nakamura', img: 'https://images.unsplash.com/photo-1516542076529-1ea3854896e1?q=80&w=1480&auto=format&fit=crop' },
    { title: 'Pulse of Light', artist: 'Mila Novak', img: 'https://images.unsplash.com/photo-1512203492609-8f9e6620fb96?q=80&w=1480&auto=format&fit=crop' },
    { title: 'Fractal Silence', artist: 'Liam Chen', img: 'https://images.unsplash.com/photo-1535469420027-517674dad7a1?q=80&w=1480&auto=format&fit=crop' },
    { title: 'Solar Echo', artist: 'Noah Patel', img: 'https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?q=80&w=1480&auto=format&fit=crop' },
    { title: 'Nova Tiles', artist: 'Zara Ali', img: 'https://images.unsplash.com/photo-1500989145603-8e7ef71d639e?q=80&w=1480&auto=format&fit=crop' },
  ]

  return (
    <section id="gallery" className="relative z-10 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Featured gallery</h2>
          <a href="#submit" className="text-sm text-orange-300 hover:text-white transition">Submit your art →</a>
        </div>
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {samples.map((s, i) => (
            <ArtCard key={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
