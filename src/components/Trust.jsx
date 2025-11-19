import { ShieldCheck, FileText, Cog } from 'lucide-react'

const items = [
  { icon: ShieldCheck, title: 'Inspeksi 300 Titik', desc: 'Setiap unit melewati pengecekan komprehensif untuk memastikan kualitas dan keamanan.' },
  { icon: FileText, title: 'Dokumen Terjamin', desc: 'Legalitas lengkap dan transparan. Siap balik nama tanpa hambatan.' },
  { icon: Cog, title: 'Garansi Mesin', desc: 'Perlindungan ekstra pada komponen utama untuk memberi Anda ketenangan.' },
]

export default function Trust() {
  return (
    <section id="trust" className="bg-[#0F172A] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl text-white">Mengapa Memilih Kami</h2>
          <p className="text-white/70 mt-3">Standar tinggi kami memastikan pengalaman membeli mobil yang tenang, aman, dan memuaskan.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#D4AF37] text-slate-900">
                <Icon />
              </div>
              <h3 className="mt-4 text-white font-semibold">{title}</h3>
              <p className="mt-2 text-white/70 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
