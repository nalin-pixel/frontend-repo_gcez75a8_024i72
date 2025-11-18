export default function Services() {
  const items = [
    { title: 'Фрахтование', desc: 'Сухие грузы, танкеры, проекты и контейнеры. Подбор судов и маршрутов, переговоры и постфиксация.' },
    { title: 'S&P', desc: 'Покупка и продажа судов, оценка, сопровождение сделок и due diligence.' },
    { title: 'Логистика', desc: 'Планирование цепочки поставок, портовое агентирование, координация и контроль выполнения.' },
    { title: 'Консалтинг', desc: 'Маркет-репорты, управление рисками, тендеры, стратегия и аудит фрахтовых затрат.' },
  ]

  return (
    <section id="services" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Услуги</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((s, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors">
              <h3 className="text-white font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-blue-100/80 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
