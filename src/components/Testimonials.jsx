import { useEffect, useRef } from 'react'

const testimonials = [
  { name: 'Dimas P.', text: 'Pelayanan sangat profesional. Proses cepat dan transparan, mobil sesuai ekspektasi!', role: 'Jakarta' },
  { name: 'Ayu Lestari', text: 'Suka banget sama unit yang saya dapat. Kondisi mulus, dokumen lengkap.', role: 'Bandung' },
  { name: 'Fajar K.', text: 'Test drive mudah dijadwalkan dan timnya informatif. Sangat direkomendasikan!', role: 'Surabaya' },
  { name: 'Nadira S.', text: 'Harga terbaik di kelasnya. After sales-nya juga responsif.', role: 'Tangerang' },
]

export default function Testimonials() {
  const trackRef = useRef(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    let start = null

    function step(timestamp) {
      if (!start) start = timestamp
      const elapsed = timestamp - start
      const offset = (elapsed / 30) % track.scrollWidth
      track.style.transform = `translateX(-${offset}px)`
      requestAnimationFrame(step)
    }

    const raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <section id="testimonials" className="relative bg-white py-16 sm:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl text-slate-900">Apa Kata Pelanggan</h2>
            <p className="text-slate-600 mt-2">Cerita nyata dari mereka yang sudah menemukan mobil impiannya.</p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="relative w-full overflow-hidden">
          <div ref={trackRef} className="flex gap-6 will-change-transform" style={{ transform: 'translateX(0)' }}>
            {[...testimonials, ...testimonials].map((t, i) => (
              <div key={i} className="min-w-[320px] max-w-md bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                <p className="text-slate-700">“{t.text}”</p>
                <div className="mt-4 text-sm text-slate-500">{t.name} • {t.role}</div>
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white via-transparent to-white" />
        </div>
      </div>
    </section>
  )
}
