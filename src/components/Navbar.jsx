import { Menu } from 'lucide-react'

function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5 border border-white/10">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="#" className="flex items-center gap-2">
              <span className="inline-block h-9 w-9 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 shadow ring-1 ring-white/20" />
              <span className="text-white font-semibold tracking-tight">ArtVerse</span>
            </a>
            <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
              <a href="#gallery" className="hover:text-white transition">Gallery</a>
              <a href="#trending" className="hover:text-white transition">Trending</a>
              <a href="#about" className="hover:text-white transition">About</a>
              <a href="#contact" className="hover:text-white transition">Contact</a>
              <a href="#" className="inline-flex items-center rounded-lg bg-gradient-to-r from-orange-500 to-red-600 px-4 py-2 font-medium text-white shadow-md shadow-red-600/20 hover:brightness-110 transition">Submit Art</a>
            </nav>
            <button className="md:hidden text-white/80" aria-label="Open menu">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
