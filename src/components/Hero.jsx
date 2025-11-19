import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative pt-28 lg:pt-32 pb-16 lg:pb-24 overflow-hidden bg-[#0F172A]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/m8wpIQzXWhEh9Yek/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
            Showroom Digital • Mobil Baru & Bekas Berkualitas
          </span>
          <h1 className="mt-6 font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight text-white">
            Temukan Mobil Impian Anda dengan Kualitas Terbaik
          </h1>
          <p className="mt-4 text-white/80 text-lg">
            Koleksi kurasi mobil premium dengan riwayat servis jelas, harga transparan, dan proses pembelian yang mulus.
          </p>

          <div className="mt-8 bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-4">
            <form className="grid grid-cols-1 sm:grid-cols-4 gap-3">
              <input type="text" placeholder="Merk" className="w-full rounded-xl bg-white/10 border border-white/15 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]" />
              <input type="text" placeholder="Tahun" className="w-full rounded-xl bg-white/10 border border-white/15 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]" />
              <input type="text" placeholder="Harga Maks (IDR)" className="w-full rounded-xl bg-white/10 border border-white/15 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]" />
              <button type="button" className="rounded-xl bg-[#D4AF37] text-slate-900 font-semibold px-6 py-3 hover:brightness-110 transition">
                Cari Mobil
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#0F172A]/40 to-[#0F172A]" />
    </section>
  )
}
