import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/70 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded bg-blue-500 text-white font-bold">O</span>
          <span className="text-white font-semibold tracking-wide">Oceanway</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-blue-100/80">
          <a href="#services" className="hover:text-white">Услуги</a>
          <a href="#about" className="hover:text-white">О компании</a>
          <a href="#contact" className="hover:text-white">Контакты</a>
        </nav>
        <button className="md:hidden text-white/80" aria-label="menu">
          <Menu size={22} />
        </button>
      </div>
    </header>
  )
}
