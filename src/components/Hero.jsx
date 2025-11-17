import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Dark gradient overlay for contrast; pointer-events-none to keep Spline interactive */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_70%_10%,rgba(255,80,30,0.4),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-orange-500 to-red-600" />
            Curated daily — Digital, Abstract, Modern
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white">
            Discover the best in contemporary digital art
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl">
            Explore an ever-evolving gallery of immersive, interactive, and boundary‑pushing artworks from visionary creators worldwide.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#gallery" className="inline-flex items-center rounded-lg bg-gradient-to-r from-orange-500 to-red-600 px-5 py-3 font-medium text-white shadow-md shadow-red-600/20 hover:brightness-110 transition">
              Explore Gallery
            </a>
            <a href="#submit" className="inline-flex items-center rounded-lg border border-white/20 bg-white/5 px-5 py-3 font-medium text-white/90 hover:bg-white/10 transition">
              Submit Your Art
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
