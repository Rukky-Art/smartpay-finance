import { useNavigate } from 'react-router-dom'
import { Clock, ArrowLeft, Mail } from 'lucide-react'
import { useState, ChangeEvent } from 'react'

export default function ComingSoonPage(): JSX.Element {
  const navigate = useNavigate()
  const [email, setEmail] = useState<string>('')
  const [notified, setNotified] = useState<boolean>(false)

  const handleNotify = (): void => {
    if (email) setNotified(true)
  }

  return (
    <div className="min-h-screen bg-dark-900 relative overflow-hidden flex items-center justify-center pt-24">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            'radial-gradient(at 40% 20%, #2a37ba 0px, transparent 50%), radial-gradient(at 80% 0%, #2230a0 0px, transparent 50%), radial-gradient(at 0% 50%, #07081a 0px, transparent 50%)',
        }}
      />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary-500/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        {/* Icon */}
        <div className="w-24 h-24 rounded-3xl bg-primary-500/20 border border-primary-400/30 flex items-center justify-center mx-auto mb-8 backdrop-blur-sm">
          <Clock size={44} className="text-primary-300" />
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-primary-500/20 border border-primary-400/30 text-primary-300 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-primary-400 animate-pulse" />
          Coming Soon
        </div>

        {/* Title */}
        <h1 className="text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
          We're Working{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300">
            On It
          </span>
        </h1>

        <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-lg mx-auto">
          This page is currently under construction. We're putting in the work to bring you something great. Check back soon!
        </p>

        {/* Notify form */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 mb-8">
          {notified ? (
            <div className="text-center py-4">
              <div className="w-12 h-12 rounded-full bg-primary-500/20 flex items-center justify-center mx-auto mb-3">
                <Mail size={22} className="text-primary-400" />
              </div>
              <p className="text-white font-display font-bold text-lg mb-1">You're on the list!</p>
              <p className="text-white/50 text-sm">We'll notify you at <span className="text-primary-300">{email}</span> when this page goes live.</p>
            </div>
          ) : (
            <>
              <p className="text-white font-semibold mb-4">Get notified when we launch</p>
              <div className="flex gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 bg-white/5 border border-white/10 text-white placeholder-white/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary-400 transition-colors"
                />
                <button
                  onClick={handleNotify}
                  className="bg-primary-500 hover:bg-primary-400 text-white font-semibold px-6 py-3 rounded-xl transition-colors whitespace-nowrap"
                >
                  Notify Me
                </button>
              </div>
            </>
          )}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 border border-white/20 text-white/80 hover:text-white hover:border-white/40 font-medium px-6 py-3 rounded-full transition-all duration-200"
          >
            <ArrowLeft size={16} />
            Go Back
          </button>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-400 text-white font-semibold px-6 py-3 rounded-full transition-all duration-200"
          >
            Back to Home
          </button>
        </div>

        {/* Contact fallback */}
        <p className="text-white/30 text-sm mt-10">
          Need help now?{' '}
          <a href="tel:09024656626" className="text-primary-400 hover:text-primary-300 transition-colors font-semibold">
            Call us at 09024656626
          </a>
        </p>
      </div>
    </div>
  )
}
