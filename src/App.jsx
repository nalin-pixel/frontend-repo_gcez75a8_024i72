import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(59,130,246,0.15),transparent_35%),radial-gradient(circle_at_90%_20%,rgba(34,211,238,0.12),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(59,130,246,0.1),transparent_40%)]" />
      <Navbar />
      <main className="relative">
        <Hero />
        <Services />
        <About />
        <Contact />
        <footer className="border-t border-white/10 py-8 text-center text-blue-100/70">
          © {new Date().getFullYear()} Oceanway Maritime Brokerage
        </footer>
      </main>
    </div>
  )
}

export default App
