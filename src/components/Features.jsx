import { Star, Sparkles, Globe2 } from 'lucide-react'

function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition hover:bg-white/[0.06]">
      <div className="flex items-center gap-4">
        <div className="rounded-xl bg-gradient-to-br from-orange-500 to-red-600 p-2.5 text-white shadow ring-1 ring-white/20">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-white font-semibold">{title}</h3>
          <p className="text-white/70 text-sm">{desc}</p>
        </div>
      </div>
    </div>
  )
}

function Features() {
  return (
    <section id="trending" className="relative z-10 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Why artists choose us</h2>
          <a href="#gallery" className="text-sm text-orange-300 hover:text-white transition">See gallery →</a>
        </div>
        <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
          <Feature icon={Sparkles} title="Curated Excellence" desc="Handpicked selections from a global community of creators." />
          <Feature icon={Star} title="Spotlight & Reach" desc="Get featured on the homepage and shared across our channels." />
          <Feature icon={Globe2} title="Immersive Tech" desc="Support for interactive 3D, motion, and experimental media." />
        </div>
      </div>
    </section>
  )
}

export default Features
