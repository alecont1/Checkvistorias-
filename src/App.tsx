import Hero from './components/Hero'
import Partners from './components/Partners'
import Process from './components/Process'
import DamageScanner from './components/DamageScanner'
import SocialProof from './components/SocialProof'
import Footer from './components/Footer'
import WhatsAppFAB from './components/WhatsAppFAB'

export default function App() {
  return (
    <div className="min-h-screen bg-soft relative overflow-clip">
      <Hero />
      <Partners />
      <Process />
      <DamageScanner />
      <SocialProof />
      <Footer />
      <WhatsAppFAB />

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 w-full p-4 z-[100] md:hidden pointer-events-none">
        <a
          href="https://wa.me/5519991607587"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-3 bg-navy/80 hover:bg-navy backdrop-blur-xl text-white py-4 rounded-2xl shadow-[0_-10px_40px_rgba(10,25,47,0.3)] border border-white/10 pointer-events-auto active:scale-[0.98] transition-all"
        >
          <span className="w-2 h-2 rounded-full bg-vistoria animate-pulse" />
          <span className="font-mono text-sm tracking-widest font-medium uppercase">
            Solicitar Vistoria
          </span>
        </a>
      </div>
    </div>
  )
}
