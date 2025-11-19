import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Inventory from './components/Inventory'
import Trust from './components/Trust'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

function App() {
  return (
    <div className="min-h-screen bg-[#0F172A] font-sans">
      <Navbar />
      <Hero />
      <Inventory />
      <Trust />
      <Testimonials />
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

export default App
