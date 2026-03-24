import { useState, useEffect, useRef } from 'react'

function useInView(options = {}) {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsInView(true)
    }, { threshold: 0.1, ...options })

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return [ref, isInView]
}

function FadeIn({ children, className = '', delay = 0 }) {
  const [ref, isInView] = useInView()
  
  return (
    <div 
      ref={ref}
      className={className}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`
      }}
    >
      {children}
    </div>
  )
}

// Navigation
function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-sm' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-3">
            <img src="/logo-icon.png" alt="LCAF" className="h-12 w-auto" />
            <div className="hidden sm:block">
              <span className="block text-brand font-display font-bold text-sm tracking-wide">LUNG CANCER</span>
              <span className="block text-brand font-display font-bold text-sm tracking-wide">AWARENESS FOUNDATION</span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            <a href="#founder" className="text-slate-700 hover:text-brand font-medium text-sm transition-colors">Our Founder</a>
            <a href="#about" className="text-slate-700 hover:text-brand font-medium text-sm transition-colors">About</a>
            <a href="#mission" className="text-slate-700 hover:text-brand font-medium text-sm transition-colors">Mission</a>
            <a href="#press" className="text-slate-700 hover:text-brand font-medium text-sm transition-colors">Press</a>
            <a href="#contact" className="text-slate-700 hover:text-brand font-medium text-sm transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href="#donate"
              className="bg-brand hover:bg-brand-dark text-white font-semibold text-sm px-6 py-2.5 transition-colors"
            >
              DONATE
            </a>
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2"
              aria-label="Menu"
            >
              <div className="w-5 h-0.5 bg-slate-800 mb-1" />
              <div className="w-5 h-0.5 bg-slate-800 mb-1" />
              <div className="w-5 h-0.5 bg-slate-800" />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="lg:hidden pb-4 border-t">
            <div className="pt-4 space-y-3">
              <a href="#founder" onClick={() => setMenuOpen(false)} className="block text-slate-700 font-medium">Our Founder</a>
              <a href="#about" onClick={() => setMenuOpen(false)} className="block text-slate-700 font-medium">About</a>
              <a href="#mission" onClick={() => setMenuOpen(false)} className="block text-slate-700 font-medium">Mission</a>
              <a href="#press" onClick={() => setMenuOpen(false)} className="block text-slate-700 font-medium">Press</a>
              <a href="#contact" onClick={() => setMenuOpen(false)} className="block text-slate-700 font-medium">Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

// Hero
function Hero() {
  return (
    <section className="pt-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] text-slate-900 leading-tight mb-6">
              Saving Lives.<br />One Breath at a Time.
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Lung cancer is the #1 cancer killer—but it doesn&apos;t have to be.
              Early detection can mean the difference between a 6% survival rate
              and a 60% one. We&apos;re here to close that gap.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#founder"
                className="border-2 border-brand text-brand hover:bg-brand hover:text-white font-semibold px-8 py-3 transition-colors"
              >
                OUR FOUNDER
              </a>
              <a 
                href="#donate"
                className="bg-brand hover:bg-brand-dark text-white font-semibold px-8 py-3 transition-colors"
              >
                DONATE
              </a>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <img 
              src="/logo-full.png" 
              alt="Lung Cancer Awareness Foundation" 
              className="w-full max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

// Stats
function Stats() {
  return (
    <section className="bg-gradient-to-r from-brand to-brand-dark py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-white text-center">
          <div>
            <p className="font-serif text-3xl lg:text-4xl font-bold">236K</p>
            <p className="text-brand-light text-sm mt-1">New U.S. Cases Yearly</p>
          </div>
          <div>
            <p className="font-serif text-3xl lg:text-4xl font-bold">#1</p>
            <p className="text-brand-light text-sm mt-1">Cancer Killer</p>
          </div>
          <div>
            <p className="font-serif text-3xl lg:text-4xl font-bold">20%</p>
            <p className="text-brand-light text-sm mt-1">Never Smoked</p>
          </div>
          <div>
            <p className="font-serif text-3xl lg:text-4xl font-bold">7%</p>
            <p className="text-brand-light text-sm mt-1">Research Funding Share</p>
          </div>
        </div>
      </div>
    </section>
  )
}

// Our Founder
function Story() {
  return (
    <section id="founder" className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <img 
              src="/dionne-harmon.jpg" 
              alt="Dionne Harmon" 
              className="w-full max-w-lg rounded-sm shadow-lg object-cover aspect-[4/5]"
            />
          </FadeIn>
          
          <FadeIn delay={100}>
            <p className="text-brand font-semibold text-sm uppercase tracking-wider mb-4">Our Founder</p>
            <h2 className="font-serif text-3xl md:text-4xl text-slate-900 mb-6">
              Dionne Harmon
            </h2>
            
            <p className="text-lg text-slate-600 leading-relaxed mb-5">
              Dionne Harmon has spent her career helping bring impactful stories to life. As an Emmy-winning television producer and executive, she has worked behind the scenes on major cultural moments, leading teams with vision, focus, and integrity. Her professional journey has always been guided by purpose and the belief that meaningful work requires both artistry and responsibility.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed mb-5">
              That sense of responsibility took on new meaning when Dionne was diagnosed with stage 3 lung cancer.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed mb-5">
              Facing a serious health challenge brought clarity to what matters most: access to reliable information, strong medical advocacy, and a supportive community. Throughout her journey, she became increasingly aware of how much misinformation, stigma, and silence still surround lung cancer. She saw the need for earlier conversations, greater access to resources, and increased investment in research to improve detection, treatment, and outcomes.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed mb-5">
              The Lung Cancer Awareness Foundation was born from that realization.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed mb-5">
              What began as a deeply personal challenge evolved into a commitment to help others navigate theirs. For Dionne, this work is not about recognition. It is about responsibility. It is about using her voice and platform to open doors, support progress in research, share knowledge, and build a community committed to fighting this disease. Through the Lung Cancer Awareness Foundation, Dionne continues her life&apos;s work in a new way — helping turn awareness into action, research into progress, and survival into support for others.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

// About
function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <FadeIn>
            <p className="text-brand font-semibold text-sm uppercase tracking-wider mb-4">About Us</p>
            <h2 className="font-serif text-3xl md:text-4xl text-slate-900 mb-6">
              The Lung Cancer Awareness Foundation
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              The Lung Cancer Awareness Foundation is dedicated to improving outcomes for individuals and families affected by lung cancer through education, early detection, research, advocacy, and support.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Founded by Dionne Harmon following her own lung cancer diagnosis, the foundation was created to address the gaps that many patients encounter — including limited awareness, persistent stigma, and unequal access to reliable information and care. What began as a deeply personal journey has evolved into a broader commitment to ensuring that no one faces lung cancer without the resources and support they need.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Our work focuses on increasing public understanding of lung health, promoting proactive screening and early detection, and supporting research that advances diagnosis, treatment, and long-term outcomes. Through partnerships with healthcare providers, researchers, and community organizations, the foundation works to expand access to knowledge, strengthen support systems, and contribute to more equitable care.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              At its core, the Lung Cancer Awareness Foundation is grounded in the belief that awareness leads to action — and action into tangible results.
            </p>
            <p className="text-lg text-slate-900 font-medium leading-relaxed">
              Saving lives. One breath at a time.
            </p>
          </FadeIn>

          <FadeIn delay={150}>
            <div className="bg-cream p-8 lg:p-10">
              <h3 className="font-serif text-2xl text-slate-900 mb-6">The Numbers</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-700 font-medium">Lung Cancer Deaths</span>
                    <span className="text-slate-900 font-bold">127,000/year</span>
                  </div>
                  <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-brand rounded-full" style={{ width: '100%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-700 font-medium">Breast Cancer Deaths</span>
                    <span className="text-slate-900 font-bold">43,000/year</span>
                  </div>
                  <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-slate-400 rounded-full" style={{ width: '34%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-700 font-medium">Prostate Cancer Deaths</span>
                    <span className="text-slate-900 font-bold">35,000/year</span>
                  </div>
                  <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-slate-400 rounded-full" style={{ width: '28%' }} />
                  </div>
                </div>
                <p className="text-sm text-slate-500 pt-4 border-t border-slate-200">
                  Source: American Cancer Society, 2024 estimates
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

// Mission
function Mission() {
  return (
    <section id="mission" className="py-20 lg:py-28 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-12 max-w-3xl mx-auto">
          <p className="text-brand-light font-semibold text-sm uppercase tracking-wider mb-4">Mission</p>
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
            Our Mission Statement
          </h2>
          <p className="text-slate-300 leading-relaxed mb-6 text-left md:text-center">
            The Lung Cancer Awareness Foundation is committed to expanding education, accelerating research, promoting early detection, and strengthening support systems for those impacted by lung cancer. We work to ensure that scientific advancement, public awareness, and patient advocacy move forward together.
          </p>
          <p className="text-slate-300 leading-relaxed mb-6 text-left md:text-center">
            We envision a future where lung cancer is detected earlier, researched more deeply, discussed openly, and treated equitably — where every individual has access to the knowledge, screening, scientific advancements, and support needed to improve outcomes and quality of life.
          </p>
          <p className="text-white font-medium leading-relaxed text-left md:text-center">
            Our goal is to save lives – one breath at a time.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          <FadeIn delay={0}>
            <div className="border-t-4 border-brand pt-8">
              <h3 className="font-display font-bold text-white text-xl mb-4">Awareness</h3>
              <p className="text-slate-400 leading-relaxed">
                Increasing awareness of lung cancer is essential to improving outcomes. Misconceptions and stigma often delay important conversations and prevent people from seeking timely care. By providing accurate information and encouraging open dialogue, we can help individuals better understand their risk, recognize potential signs, and make informed decisions about their health.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={100}>
            <div className="border-t-4 border-brand pt-8">
              <h3 className="font-display font-bold text-white text-xl mb-4">Early Detection</h3>
              <p className="text-slate-400 leading-relaxed">
                Early detection plays a critical role in saving lives. Lung cancer is often diagnosed at a later stage, when treatment options may be more limited. When identified earlier, there are more options, more time, and a greater chance of improved outcomes. Expanding awareness around screening and encouraging proactive health decisions can make a meaningful difference.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={200}>
            <div className="border-t-4 border-brand pt-8">
              <h3 className="font-display font-bold text-white text-xl mb-4">Research</h3>
              <p className="text-slate-400 leading-relaxed">
                Ongoing research is essential to advancing the prevention, detection, and treatment of lung cancer. Investment in research helps drive innovation, improve survival rates, and expand the options available to patients. By supporting scientific progress, we can contribute to more effective care today and better outcomes for future generations.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

// Press
function Press() {
  const items = [
    {
      title: 'KTLA — Cancer mystery in non-smoking women',
      url: 'https://ktla.com/video/cancer-mystery-in-non-smoking-women/11445904/',
    },
    {
      title: 'People — Emmy producer, stage 3 cancer, Kim Kardashian & Prenuvo',
      url: 'https://people.com/emmy-producer-stage-3-cancer-kim-kardashian-prenuvo-exclusive-11811600',
    },
    {
      title: 'Forbes — From Harvard to Hollywood: Dionne Harmon on impactful career',
      url: 'https://www.forbes.com/sites/stephanietharpe/2024/09/03/from-harvard-to-hollywood-dionne-harmon-talks-impactful-career/',
    },
  ]

  return (
    <section id="press" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <FadeIn>
            <img
              src="/dionne-harmon.jpg"
              alt="Dionne Harmon"
              className="w-full max-w-md rounded-sm shadow-lg object-cover aspect-[4/5] mx-auto lg:mx-0"
            />
          </FadeIn>
          <FadeIn delay={100}>
            <p className="text-brand font-semibold text-sm uppercase tracking-wider mb-4">Press</p>
            <h2 className="font-serif text-3xl md:text-4xl text-slate-900 mb-6">
              In the News
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Recent coverage featuring Dionne Harmon and the Lung Cancer Awareness Foundation.
            </p>
            <ul className="space-y-4">
              {items.map((item) => (
                <li key={item.url}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand font-medium hover:underline text-lg leading-snug block"
                  >
                    {item.title}
                    <span className="text-slate-400 text-sm font-normal ml-1">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

// Donate
function Donate() {
  const [amount, setAmount] = useState(100)

  return (
    <section id="donate" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <FadeIn>
            <p className="text-brand font-semibold text-sm uppercase tracking-wider mb-4">Donate</p>
            <h2 className="font-serif text-3xl md:text-4xl text-slate-900 mb-6">
              Support Our Work
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Lung cancer remains one of the most urgent public health challenges worldwide. Despite advances in medicine, late detection, stigma, and unequal access to care continue to affect outcomes.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              The Lung Cancer Awareness Foundation was established to address these challenges through a comprehensive approach that includes education, early detection advocacy, patient support, and research investment.
            </p>
            <p className="text-lg text-slate-700 font-medium mb-4">
              With donor support, we are committed to:
            </p>
            <ul className="space-y-3 text-slate-700 text-lg mb-8 list-disc pl-6">
              <li>Expanding public education around lung health and risk awareness</li>
              <li>Promoting early detection and proactive screening initiatives</li>
              <li>Funding and supporting innovative lung cancer research</li>
              <li>Reducing stigma through informed public dialogue</li>
              <li>Partnering with medical and research institutions to advance equitable care</li>
            </ul>
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              Every contribution fuels measurable progress — from awareness campaigns to research partnerships — ensuring that action follows education.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              Together, we are not only raising awareness. We are advancing solutions.
            </p>
            <p className="text-lg text-slate-900 font-medium leading-relaxed">
              We are saving lives — one breath at a time.
            </p>
            <p className="text-base text-slate-500 mt-8">
              The Lung Cancer Awareness Foundation is a 501(c)(3) nonprofit organization. Your contribution is tax-deductible to the fullest extent of the law.
            </p>
          </FadeIn>

          <FadeIn delay={150}>
            <div className="bg-cream p-8 lg:p-10">
              <h3 className="font-serif text-2xl text-slate-900 mb-6">Make a Gift</h3>
              
              <div className="grid grid-cols-4 gap-3 mb-6">
                {[50, 100, 250, 500].map(value => (
                  <button
                    key={value}
                    onClick={() => setAmount(value)}
                    className={`py-3 font-semibold text-sm transition-colors ${
                      amount === value
                        ? 'bg-brand text-white'
                        : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
                    }`}
                  >
                    ${value}
                  </button>
                ))}
              </div>

              <div className="mb-6">
                <label className="block text-sm text-slate-600 mb-2">Other Amount</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-semibold">$</span>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="w-full pl-10 pr-4 py-3 border-2 border-slate-200 focus:border-brand outline-none text-lg bg-white"
                  />
                </div>
              </div>

              <button className="w-full bg-brand hover:bg-brand-dark text-white font-semibold py-4 text-lg transition-colors">
                DONATE ${amount}
        </button>

              <p className="text-center text-sm text-slate-500 mt-4">
                Secure payment · Tax-deductible
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

// Contact
function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="max-w-2xl">
          <p className="text-brand font-semibold text-sm uppercase tracking-wider mb-4">Contact</p>
          <h2 className="font-serif text-3xl md:text-4xl text-slate-900 mb-6">
            Get in Touch
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            For press inquiries, partnership opportunities, or general questions.
          </p>

            <div className="space-y-4">
              <div>
                <p className="font-semibold text-slate-900">General Inquiries</p>
                <a href="mailto:info@lungcancerawarenessfoundation.org" className="text-brand hover:underline">
                  info@lungcancerawarenessfoundation.org
                </a>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Media</p>
                <a href="mailto:press@lungcancerawarenessfoundation.org" className="text-brand hover:underline">
                  press@lungcancerawarenessfoundation.org
                </a>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Location</p>
                <p className="text-slate-600">West Hollywood, California</p>
              </div>
            </div>
        </FadeIn>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer className="bg-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-2">
            <img 
              src="/logo-full.png" 
              alt="LCAF" 
              className="h-14 w-auto mb-4 brightness-0 invert opacity-90"
            />
            <p className="text-slate-400 max-w-md leading-relaxed text-sm">
              The Lung Cancer Awareness Foundation is a 501(c)(3) nonprofit organization 
              dedicated to early detection, research, patient support, and public awareness.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">Foundation</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#founder" className="hover:text-white transition-colors">Our Founder</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#mission" className="hover:text-white transition-colors">Mission</a></li>
              <li><a href="#press" className="hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">Connect</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#donate" className="hover:text-white transition-colors">Donate</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Lung Cancer Awareness Foundation Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-slate-300">Privacy</a>
            <a href="#" className="hover:text-slate-300">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="font-body antialiased">
      <Navigation />
      <Hero />
      <Stats />
      <Story />
      <About />
      <Mission />
      <Press />
      <Donate />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
