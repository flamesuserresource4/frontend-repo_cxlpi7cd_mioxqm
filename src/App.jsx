import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Starry subtle bg to match dark theme */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,80,30,0.08),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(255,0,0,0.06),transparent_30%),radial-gradient(1200px_600px_at_50%_120%,rgba(255,100,40,0.08),transparent_60%)]" />

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Features />
        <Gallery />
      </main>
      <Footer />
    </div>
  )
}

export default App
