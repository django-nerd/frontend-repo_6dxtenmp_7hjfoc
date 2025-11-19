import { useMemo } from 'react'

const cars = [
  { id: 1, name: 'Mercedes-Benz C200 AMG Line', year: 2021, price: 785000000, transmission: 'Automatic', img: 'https://images.unsplash.com/photo-1549921296-3cce993f302e?q=80&w=1600&auto=format&fit=crop' },
  { id: 2, name: 'BMW 530i M Sport', year: 2020, price: 915000000, transmission: 'Automatic', img: 'https://images.unsplash.com/photo-1554591279-9e8e92e1b1f3?q=80&w=1600&auto=format&fit=crop' },
  { id: 3, name: 'Porsche Macan', year: 2019, price: 1450000000, transmission: 'PDK', img: 'https://images.unsplash.com/photo-1542228262-3d663b3062bd?q=80&w=1600&auto=format&fit=crop' },
  { id: 4, name: 'Lexus RX 300', year: 2022, price: 990000000, transmission: 'Automatic', img: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?q=80&w=1600&auto=format&fit=crop' },
  { id: 5, name: 'Audi A6 2.0 TFSI', year: 2018, price: 625000000, transmission: 'S-Tronic', img: 'https://images.unsplash.com/photo-1556189250-72ba954cfc2b?q=80&w=1600&auto=format&fit=crop' },
  { id: 6, name: 'Range Rover Velar', year: 2019, price: 1325000000, transmission: 'Automatic', img: 'https://images.unsplash.com/photo-1578474846511-04ba529f0b34?q=80&w=1600&auto=format&fit=crop' },
]

function formatIDR(num) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(num)
}

const WA_NUMBER = '6281234567890'

export default function Inventory() {
  const list = useMemo(() => cars, [])

  const buildWaLink = (car, purpose = 'info') => {
    const text = purpose === 'testdrive'
      ? `Halo LuxDrive, saya ingin booking test drive untuk ${car.name} tahun ${car.year} (${formatIDR(car.price)}). Apakah unit tersedia?`
      : `Halo LuxDrive, saya tertarik dengan ${car.name} tahun ${car.year} (${formatIDR(car.price)}). Mohon info lebih lanjut.`
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`
  }

  return (
    <section id="inventory" className="relative bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl text-slate-900">Koleksi Mobil Pilihan</h2>
            <p className="text-slate-600 mt-2">Semua unit telah melalui inspeksi menyeluruh dan siap Anda bawa pulang.</p>
          </div>
          <a href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Halo LuxDrive, saya ingin konsultasi untuk mencari mobil yang sesuai kebutuhan dan budget.')}`} className="hidden sm:inline-flex items-center rounded-full bg-[#D4AF37] text-slate-900 font-semibold px-5 py-2.5 hover:brightness-110 transition">
            Konsultasi via WhatsApp
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((car) => (
            <div key={car.id} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-transform will-change-transform hover:-translate-y-1">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={car.img} alt={car.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-slate-900 font-semibold">{car.name}</h3>
                  <span className="text-sm text-slate-600">{car.year}</span>
                </div>
                <div className="mt-2 text-[#0F172A] font-bold text-xl">{formatIDR(car.price)}</div>
                <div className="mt-1 text-sm text-slate-600">Transmisi: {car.transmission}</div>
                <div className="mt-4 flex gap-2">
                  <a href={buildWaLink(car, 'info')} target="_blank" rel="noopener" className="flex-1 inline-flex items-center justify-center rounded-xl bg-[#D4AF37] text-slate-900 font-semibold px-4 py-2.5 hover:brightness-110 transition">
                    Tanya Unit
                  </a>
                  <a href={buildWaLink(car, 'testdrive')} target="_blank" rel="noopener" className="flex-1 inline-flex items-center justify-center rounded-xl border border-slate-300 text-slate-900 font-semibold px-4 py-2.5 hover:bg-slate-50 transition">
                    Test Drive
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
