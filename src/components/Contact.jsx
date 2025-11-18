import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', service: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ type: 'loading', text: 'Отправка...' })

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone || undefined,
          company: form.company || undefined,
          service: form.service || undefined,
          message: form.message,
        })
      })

      if (!res.ok) throw new Error('Ошибка сервера')
      const data = await res.json()
      setStatus({ type: 'success', text: 'Спасибо! Мы свяжемся с вами в ближайшее время.' })
      setForm({ name: '', email: '', phone: '', company: '', service: '', message: '' })
    } catch (err) {
      setStatus({ type: 'error', text: 'Не удалось отправить форму. Попробуйте позже.' })
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Связаться с нами</h2>
          <p className="text-blue-100/90 mb-6">Опишите ваш груз или задачу — предложим оптимальное решение.</p>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-blue-100/90">
            <p><span className="text-white">Email:</span> contact@oceanway-broker.com</p>
            <p><span className="text-white">Телефон:</span> +44 20 7123 4567</p>
            <p><span className="text-white">Офисы:</span> Лондон • Дубай • Сингапур</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-xl p-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-blue-100/80 mb-1">Имя</label>
              <input name="name" value={form.name} onChange={handleChange} required className="w-full px-3 py-2 rounded bg-white/10 border border-white/10 text-white placeholder-blue-100/50 focus:outline-none" placeholder="Иван Иванов" />
            </div>
            <div>
              <label className="block text-sm text-blue-100/80 mb-1">Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full px-3 py-2 rounded bg-white/10 border border-white/10 text-white placeholder-blue-100/50 focus:outline-none" placeholder="name@company.com" />
            </div>
            <div>
              <label className="block text-sm text-blue-100/80 mb-1">Телефон</label>
              <input name="phone" value={form.phone} onChange={handleChange} className="w-full px-3 py-2 rounded bg-white/10 border border-white/10 text-white placeholder-blue-100/50 focus:outline-none" placeholder="+7 900 000-00-00" />
            </div>
            <div>
              <label className="block text-sm text-blue-100/80 mb-1">Компания</label>
              <input name="company" value={form.company} onChange={handleChange} className="w-full px-3 py-2 rounded bg-white/10 border border-white/10 text-white placeholder-blue-100/50 focus:outline-none" placeholder="ООО МорЛогистик" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm text-blue-100/80 mb-1">Услуга</label>
              <select name="service" value={form.service} onChange={handleChange} className="w-full px-3 py-2 rounded bg-white/10 border border-white/10 text-white focus:outline-none">
                <option value="">Выберите услугу</option>
                <option value="Chartering">Фрахтование</option>
                <option value="S&P">S&P</option>
                <option value="Logistics">Логистика</option>
                <option value="Consulting">Консалтинг</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm text-blue-100/80 mb-1">Сообщение</label>
              <textarea name="message" value={form.message} onChange={handleChange} required rows="4" className="w-full px-3 py-2 rounded bg-white/10 border border-white/10 text-white placeholder-blue-100/50 focus:outline-none" placeholder="Кратко опишите задачу..." />
            </div>
          </div>
          <button type="submit" className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-colors">Отправить</button>
          {status && (
            <p className={`mt-3 text-sm ${status.type === 'success' ? 'text-green-300' : status.type === 'error' ? 'text-red-300' : 'text-blue-200'}`}>
              {status.text}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
