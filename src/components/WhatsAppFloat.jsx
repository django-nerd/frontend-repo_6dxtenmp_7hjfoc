export default function WhatsAppFloat() {
  const number = '6281234567890'
  const text = encodeURIComponent('Halo LuxDrive, saya ingin konsultasi mengenai pembelian mobil.')
  return (
    <a href={`https://wa.me/${number}?text=${text}`} target="_blank" rel="noopener" className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white font-semibold px-5 py-3 shadow-lg hover:brightness-110 transition">
      WhatsApp
    </a>
  )
}
