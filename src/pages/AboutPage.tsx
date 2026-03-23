import { Target, Eye, Users } from 'lucide-react'
import PageHero from '../components/PageHero.tsx'
import Team from '../components/Team.tsx'
import distribution from '../images/distribution.jpg'

const values = [
  { icon: <Target size={22} className="text-primary-600" />, title: 'Our Mission', desc: 'To become a leading integrated financial ecosystem that connects technology, banking, and investment to empower people and businesses.' },
  { icon: <Eye size={22} className="text-primary-600" />, title: 'Our Commitment', desc: "At SmartPay, we are committed to: Innovation in financial technology, Responsible financial governance, Expanding financial inclusion, Supporting entrepreneurs and businesses, Creating long-term value for investors" },
  { icon: <Users size={22} className="text-primary-600" />, title: 'Our People', desc: 'Our team of experienced directors are committed to delivering excellence and driving financial inclusion nationwide.' },
]

const vision = [
  {
    title: 'Digital Banking',
    text: 'Our Digital Banking division develops innovative fintech platforms that enable secure payments, digital financial services, and technology-driven financial infrastructure. This division also oversees our microfinance banking operations.',
  },
  {
    title: 'Retail Banking',
    text: 'Our Retail Banking division delivers financial solutions to individuals, entrepreneurs, and businesses through structured banking services, SME financing, and commercial banking solutions.',
  },
  {
    title: 'Investment Banking',
    text: 'Our Investment Banking division manages capital mobilization and investment opportunities through a dedicated Investment Secretariat that interfaces directly with investors.',
  },
]

const stats = [
  { value: '2029', label: 'Target Year', sub: 'Multimillion-dollar enterprise' },
  { value: '3', label: 'Core Divisions', sub: 'Digital, Retail & Investment' },
  { value: '36', label: 'States', sub: 'Nationwide reach across Nigeria' },
  { value: '100%', label: 'Commitment', sub: 'To financial inclusion' },
]

export default function AboutPage(): JSX.Element {
  return (
    <div className="pt-24">
      <PageHero
        badge="About Us"
        title={<>Who We <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300">Are</span></>}
        subtitle="SmartPay Finance and Holdings Limited is a diversified financial services holding company focused on building a modern financial ecosystem powered by technology, banking, and investment solutions."
      />

      {/* Executive Summary */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">

          {/* Top heading */}
          <div className="text-center mb-16">
            <span className="inline-block bg-primary-50 text-primary-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
              Executive Summary
            </span>
            <h2 className="text-4xl lg:text-5xl font-display font-extrabold text-dark-900 leading-tight max-w-3xl mx-auto">
              Revolutionizing Financial Services in Nigeria
            </h2>
            <p className="text-dark-500 mt-4 max-w-2xl mx-auto leading-relaxed">
              SmartPay Finance &amp; Holdings Limited operates through three core divisions — 
              built to drive financial inclusion and economic growth across Nigeria.
            </p>
          </div>

         {/* Image + Division cards */}
<div className="grid lg:grid-cols-2 gap-12 items-center mb-20">

  {/* Left — Division cards */}
  <div className="flex flex-col gap-5">
    {vision.map((item, i) => (
      <div
        key={item.title}
        className="group rounded-2xl p-6 flex items-start gap-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg cursor-pointer bg-blue-50 border border-blue-100 hover:border-primary-300"
      >
        <div className="w-12 h-12 rounded-xl flex items-center justify-center font-display font-extrabold text-lg flex-shrink-0 bg-primary-600 text-white">
          {String(i + 1).padStart(2, '0')}
        </div>
        <div>
          <h3 className="font-display font-bold text-lg mb-1.5 text-primary-700 group-hover:text-primary-600 transition-colors">
            {item.title}
          </h3>
          <p className="text-dark-500 text-sm leading-relaxed">
            {item.text}
          </p>
        </div>
      </div>
    ))}
  </div>

  {/* Right — Image */}
  <div className="relative">
    <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary-600/20 aspect-[4/3]">
      <img
        src={distribution}
        alt="SmartPay Finance"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Decorative rings */}
    <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full border-2 border-primary-100 -z-10" />
    <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-primary-50 -z-10 blur-xl" />
  </div>

</div>

            
          

          {/* Stats row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-gray-50 rounded-3xl p-6 border border-gray-100 text-center hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <p className="text-4xl font-display font-extrabold text-primary-600 mb-1">{stat.value}</p>
                <p className="font-bold text-dark-900 text-sm mb-1">{stat.label}</p>
                <p className="text-dark-400 text-xs leading-snug">{stat.sub}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Mission / Vision / People */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary-50 text-primary-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">What Drives Us</span>
            <h2 className="text-4xl font-display font-extrabold text-dark-900">Our Mission, Vision and People</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-primary-50 flex items-center justify-center mb-5">{v.icon}</div>
                <h3 className="font-display font-bold text-dark-900 text-xl mb-3">{v.title}</h3>
                <p className="text-dark-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Team />
    </div>
  )
}