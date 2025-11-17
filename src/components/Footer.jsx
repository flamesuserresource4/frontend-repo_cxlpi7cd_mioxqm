function Footer() {
  return (
    <footer id="contact" className="relative z-10 border-t border-white/10 bg-black/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="inline-block h-8 w-8 rounded-md bg-gradient-to-br from-orange-500 to-red-600" />
          <p className="text-white/70 text-sm">© {new Date().getFullYear()} ArtVerse — All rights reserved.</p>
        </div>
        <div className="flex items-center gap-4 text-white/70 text-sm">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#gallery" className="hover:text-white transition">Gallery</a>
          <a href="/test" className="hover:text-white transition">System Check</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
