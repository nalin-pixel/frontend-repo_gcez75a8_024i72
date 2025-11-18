export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">О компании</h2>
          <p className="text-blue-100/90 leading-relaxed mb-4">
            Мы работаем с грузовладельцами, судовладельцами и трейдерами, обеспечивая надежные перевозки и прозрачные условия. Наша сеть партнеров охватывает ключевые морские рынки Европы, Ближнего Востока и Азии.
          </p>
          <p className="text-blue-100/90 leading-relaxed">
            Сильная аналитика рынка, качественные переговоры и точная постфиксация — наш стандарт работы.
          </p>
        </div>
        <div className="order-1 md:order-2">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
            <img src="https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=1770&auto=format&fit=crop" alt="Port logistics" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
