import { MapPin, Facebook, Instagram, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="kontak" className="bg-[#0F172A] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-white/80">
          <div>
            <h3 className="font-serif text-white text-xl">LuxDrive</h3>
            <p className="mt-3">Dealer mobil premium terpercaya untuk Anda yang mengutamakan kualitas dan pelayanan.</p>
            <a id="whatsapp" href="https://wa.me/6281234567890" target="_blank" rel="noopener" className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#D4AF37] text-slate-900 font-semibold px-5 py-2.5 hover:brightness-110 transition">
              <Phone size={18}/> Chat WhatsApp
            </a>
          </div>

          <div>
            <h4 className="text-white font-semibold">Alamat</h4>
            <p className="mt-3 flex items-start gap-2"><MapPin className="flex-shrink-0"/> Jl. Sudirman No. 123, Jakarta Pusat</p>
            <a href="https://maps.google.com?q=Jl.%20Sudirman%20No.%20123%2C%20Jakarta" target="_blank" rel="noopener" className="text-[#D4AF37] hover:underline">Lihat di Google Maps</a>
          </div>

          <div>
            <h4 className="text-white font-semibold">Ikuti Kami</h4>
            <div className="mt-3 flex items-center gap-3">
              <a href="#" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition"><Facebook/></a>
              <a href="#" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition"><Instagram/></a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-white/60 text-sm">© {new Date().getFullYear()} LuxDrive. Semua hak cipta dilindungi.</div>
      </div>

      <a href="https://wa.me/6281234567890" target="_blank" rel="noopener" className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white font-semibold px-5 py-3 shadow-lg hover:brightness-110 transition">
        WhatsApp
      </a>
    </footer>
  )
}
