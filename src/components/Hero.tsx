import { ArrowRight, Download, Shield, Zap, TrendingUp } from 'lucide-react'
import bankingspace from '../images/bankingspace.jpg'

interface Stat {
  value: string
  label: string
}

const stats: Stat[] = [
  { value: '2029', label: 'Target Year' },
  { value: '₦M+', label: 'Enterprise Goal' },
  { value: '36', label: 'States Coverage' },
]

export default function Hero(): JSX.Element {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-dark-900">
      <div className="absolute inset-0 opacity-60"
        style={{ background: 'radial-gradient(at 40% 20%, #2a37ba 0px, transparent 50%), radial-gradient(at 80% 0%, #2230a0 0px, transparent 50%), radial-gradient(at 0% 50%, #111960 0px, transparent 50%)' }}
      />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary-600/20 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-primary-600/20 border border-primary-500/30 text-primary-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-400 animate-pulse" />
            Now available in Nigeria
          </div>

          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-display font-extrabold text-white leading-tight mb-6">
            The Future of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300">Finance</span>{' '}
            is Here
          </h1>

          <p className="text-lg text-white/60 leading-relaxed max-w-lg mb-10">
            An innovative and comprehensive financial solution offering payments, transfers, loans, savings and more — built for every Nigerian.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="/coming-soon" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-primary-600 hover:bg-primary-500 text-white font-semibold px-7 py-4 rounded-full transition-all duration-200 hover:shadow-xl group">
              <Download size={18} />
              Download The App
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#about" className="inline-flex items-center gap-2 border border-white/20 text-white/80 hover:text-white hover:border-white/40 font-medium px-7 py-4 rounded-full transition-all duration-200">
              Learn More
            </a>
          </div>

          <div className="mt-14 flex gap-10 border-t border-white/10 pt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-display font-bold text-white">{stat.value}</div>
                <div className="text-xs text-white/40 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:flex items-center justify-center relative h-[480px]">
          <div className="relative w-[240px] h-[480px] animate-float">
  
  {/* Phone outer shell */}
  <div className="absolute inset-0 bg-dark-800 rounded-[3rem] border-[6px] border-dark-600 shadow-2xl shadow-black/60" />
  
  {/* Side buttons */}
  <div className="absolute -left-[8px] top-20 w-[6px] h-10 bg-dark-600 rounded-l-md" />
  <div className="absolute -left-[8px] top-36 w-[6px] h-8 bg-dark-600 rounded-l-md" />
  <div className="absolute -right-[8px] top-28 w-[6px] h-12 bg-dark-600 rounded-r-md" />

  {/* Screen */}
  <div className="absolute inset-[6px] rounded-[2.5rem] overflow-hidden bg-black">
    
    
    {/* Screen image */}
    <img src={bankingspace} alt="SmartPay App" className="w-full h-full object-cover" />

    {/* Bottom home bar */}
    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/30 rounded-full z-10" />
  </div>

</div>

          <div className="absolute -left-4 top-16 bg-primary-950/80 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl">
            <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center">
              <Zap size={16} className="text-primary-400" />
            </div>
            <div>
              <p className="text-white text-xs font-semibold">Send & Receive</p>
              <p className="text-white/40 text-[10px]">Instant transfers</p>
            </div>
          </div>

          <div className="absolute -right-4 top-1/2 -translate-y-1/2 bg-dark-700/90 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl">
            <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center">
              <TrendingUp size={16} className="text-accent-400" />
            </div>
            <div>
              <p className="text-white text-xs font-semibold">Smart Savings</p>
              <p className="text-white/40 text-[10px]">Secured plan</p>
            </div>
          </div>

          <div className="absolute -left-8 bottom-20 bg-primary-800/80 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl">
            <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center">
              <Shield size={16} className="text-primary-300" />
            </div>
            <div>
              <p className="text-white text-xs font-semibold">Safe & Secure</p>
              <p className="text-white/40 text-[10px]">Bank-grade security</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 80L1440 80L1440 40C1200 80 960 0 720 20C480 40 240 80 0 40L0 80Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
