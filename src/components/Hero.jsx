export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-cyan-400/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.15),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(34,211,238,0.12),transparent_35%)]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm tracking-widest text-blue-300/80 uppercase mb-3">Maritime Brokerage</p>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-5">
              Профессиональный морской брокер
            </h1>
            <p className="text-blue-100/90 text-lg leading-relaxed mb-8">
              Fracht-компания полного цикла: фрахтование, S&P, логистика и консалтинг. Надежные перевозки для сухих и наливных грузов по всему миру.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-colors">Связаться</a>
              <a href="#services" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors">Узнать больше</a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1521714161819-15534968fc5f?q=80&w=1770&auto=format&fit=crop" alt="Bulk carrier at sea" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
