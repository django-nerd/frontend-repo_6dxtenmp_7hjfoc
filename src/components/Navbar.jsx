import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#inventory', label: 'Inventori' },
    { href: '#trust', label: 'Keunggulan' },
    { href: '#testimonials', label: 'Testimoni' },
    { href: '#kontak', label: 'Kontak' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-4">
        <div className="backdrop-blur-md bg-slate-900/40 border border-white/10 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600" />
              <span className="font-display text-white text-lg tracking-wide">LuxDrive</span>
            </a>

            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-slate-200/80 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#whatsapp" className="inline-flex items-center rounded-full bg-[#D4AF37] text-slate-900 font-semibold px-5 py-2.5 hover:brightness-110 transition">
                Hubungi Kami
              </a>
            </div>

            <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="md:hidden px-4 pb-4 space-y-3">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="block text-slate-200/90 hover:text-white">
                  {item.label}
                </a>
              ))}
              <a href="#whatsapp" className="inline-flex items-center rounded-full bg-[#D4AF37] text-slate-900 font-semibold px-5 py-2.5 hover:brightness-110 transition">
                Hubungi Kami
              </a>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}
