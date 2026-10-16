import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Menu,
  Send,
  X,
} from 'lucide-react'

const services = [
  {
    title: 'Brand Management & Strategy',
    description: 'Crafting cohesive brand identity guidelines, visual tone structures, target positioning maps, and comprehensive corporate guidelines.',
    icon: 'strategy.svg',
    featured: true,
  },
  {
    title: 'Social Media Marketing',
    description: 'Dynamic narrative distribution, bespoke graphics, community building, and campaign analytics across high-impact platforms.',
    icon: 'social.svg',
  },
  {
    title: 'Websites & Digital Platforms',
    description: 'Modern web designs that load instantly, scale beautifully across mobile and desktop, and project brand credibility.',
    icon: 'digital.svg',
  },
  {
    title: 'Corporate & Lifestyle Events',
    description: 'Expertly planned press launches, brand activation events, dinners, product unveilings, and partner receptions.',
    icon: 'events.svg',
    featured: true,
  },
  {
    title: 'Photography & Video Production',
    description: 'Corporate portraits, product photo shoots, event coverage, and creative brand videography.',
    icon: 'photography.svg',
  },
  {
    title: 'Press Relations & Copywriting',
    description: 'Persuasive press release writing, strategic media pitches, local and global news placements, and interview setups.',
    icon: 'press.svg',
  },
]

const projects = [
  {
    title: 'Savannah Luxury Hospitality Launch',
    description: 'Complete brand identity design, high-profile press release orchestration, and private launch activation for an eco-luxury safari retreat.',
    category: 'Brand Strategy',
    filters: ['Brand strategy', 'Digital design'],
    location: 'Nairobi, KE',
    tone: 'savannah',
    code: 'BK / 024',
  },
  {
    title: 'Tech Innovators Annual Summit',
    description: 'Full-scale media briefing desk, speaker positioning, digital livestreams, and VIP reception for 400+ pan-African delegates.',
    category: 'Events & PR',
    filters: ['Events & PR', 'Digital design'],
    location: 'Westlands, Nairobi',
    tone: 'summit',
    code: 'BK / 031',
  },
]

const navigation = [
  ['About', '#about'],
  ['Services', '#services'],
  ['Selected Work', '#work'],
  ['Contact', '#contact'],
]

function Reveal({ children, className = '', delay = 0, ...props }) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16, margin: '0px 0px -48px 0px' }}
      transition={{ duration: reduceMotion ? 0 : 0.62, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="header-inner page-width">
        <a className="brand-lockup" href="#home" aria-label="Brilliance Konnect home" onClick={() => setMenuOpen(false)}>
          <img src="/assets/BK-svg-logo.svg" alt="BK" />
          <img src="/assets/BK-svg-name.svg" alt="Brilliance-Konnect" />
          <span>Brilliance <em>Konnect.</em></span>
          
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
          {navigation.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
        </nav>
        <div className="header-location"><span />Nairobi, KE</div>
      </div>
    </header>
  )
}

export function Hero() {
  return (
    <section className="hero-section page-width" id="home">
      <div className="hero-layout">
        <div className="hero-copy">
          <Reveal>
            <p className="eyebrow-pill"><img src="/assets/badge-mark.svg" alt="" /> Kenyan PR & communication agency</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h1>Connecting <em>Brands</em><br />With Their<br />Audience.</h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="hero-description">
              We are <strong>Brilliance Konnect</strong>, a boutique PR and communications agency based in Nairobi. We build strong brand authority, high-impact campaigns, inclusive corporate events, and clean digital aesthetics.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">Discuss your campaign <ArrowUpRight size={16} /></a>
              <a className="button button-outline" href="#services">Our services <ArrowRight size={15} /></a>
            </div>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="hero-metrics" aria-label="Agency highlights">
              <div><strong>100%</strong><span>Trustworthy &<br />dedicated</span></div>
              <div><strong>15+</strong><span>Niche services<br />offered</span></div>
              <div><strong>24/7</strong><span>Brand support</span></div>
            </div>
          </Reveal>
        </div>

        <Reveal className="hero-visual-wrap" delay={0.14}>
          <div className="hero-visual">
            <div className="visual-topline">
              <span className="studio-pill"><i />Nairobi studio</span>
              <span>Est. 2024</span>
            </div>
            <div className="visual-center">
              <span className="monogram">BK</span>
              <p>Amplifying African Voices<br />with Global Elegance.</p>
            </div>
            <div className="visual-bottomline"><span>Brilliance Strategy</span><span>Nairobi, Kenya</span></div>
          </div>
          <div className="visual-caption"><em>Brilliance Strategy</em><span>Nairobi, Kenya</span></div>
        </Reveal>
      </div>
      <a className="scroll-cue" href="#about"><span>Discover Brilliance</span><ArrowDown size={15} /></a>
    </section>
  )
}

const pillars = [
  {
    title: 'Unwavering Trustworthiness',
    text: 'Your brand is your most valuable asset. We guard and guide it with absolute integrity, crystal-clear transparency, and professional consistency.',
    icon: 'trust.svg',
  },
  {
    title: 'Approachable Partnership',
    text: 'We are warm, responsive, and genuinely down-to-earth partners who prioritize open dialogue and active listening to achieve true alignment.',
    icon: 'partnership.svg',
  },
  {
    title: 'High Quality & Style',
    text: 'We craft modern, clean solutions that elevate your brand narrative with thoughtful design, polished execution, and supreme style.',
    icon: 'quality.svg',
  },
]

export function IdentityAndPillars() {
  return (
    <section className="identity-section section-band" id="about">
      <div className="identity-layout page-width">
        <Reveal className="identity-copy">
          <p className="section-kicker">Our identity & vision</p>
          <h2>Guiding Your Narrative<br />With Professional Style.</h2>
          <p className="body-copy">At <strong>Brilliance Konnect</strong>, we bridge the gap between simple business presence and outstanding market authority. Whether you are scaling a local startup or establishing a major corporate campaign, we construct the media, social, and physical touchpoints that make your audience believe in your vision.</p>
          <blockquote>
            <p>“True PR is not just about gaining attention. It is about cultivating authentic connection, solidifying credibility, and designing beautiful experiences that sustain trust over time.”</p>
            <cite><span />Brilliance Konnect philosophy</cite>
          </blockquote>
        </Reveal>
        <div className="pillars-column">
          <Reveal>
            <h3>The Core Pillars of Our Business</h3>
            <p className="body-copy pillars-intro">Every decision we make, every press release we publish, and every event we capture is anchored by three fundamental values:</p>
          </Reveal>
          <div className="pillar-list">
            {pillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={index * 0.07}>
                <article className="pillar-card">
                  <span className="icon-tile"><img src={`/assets/${pillar.icon}`} alt="" /></span>
                  <div><h4>{pillar.title}</h4><p>{pillar.text}</p></div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function Services() {
  return (
    <section className="services-section page-width" id="services">
      <Reveal className="section-heading">
        <p className="section-kicker">Bespoke communications solutions</p>
        <h2>Elevating Brands, Igniting<br />Connections.</h2>
        <p>Our strategic services provide an integrated brand trajectory. From media relationships and copywriting to digital portals and physical experiences.</p>
      </Reveal>
      <div className="services-grid">
        {services.map((service, index) => (
          <Reveal key={service.title} delay={(index % 3) * 0.07} className="service-reveal">
            <article className={`service-card${service.featured ? ' is-featured' : ''}`}>
              {service.featured ? (
                <div className="service-banner"><span>Featured service</span></div>
              ) : <div className="service-accent" />}
              <div className="service-content">
                <span className="icon-tile"><img src={`/assets/${service.icon}`} alt="" /></span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              <a className="service-link" href="#contact">Explore capabilities <ArrowUpRight size={14} /></a>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

const filters = ['All projects', 'Brand strategy', 'Digital design', 'Events & PR']

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All projects')
  const visibleProjects = projects.filter((project) => (
    activeFilter === 'All projects' || project.filters.includes(activeFilter)
  ))

  return (
    <section className="portfolio-section section-band" id="work">
      <div className="page-width portfolio-inner">
        <div className="portfolio-heading">
          <Reveal className="portfolio-intro">
            <p className="section-kicker">Our creative footprint</p>
            <h2>Showcasing Our Curated<br />Campaign Work.</h2>
            <p>Explore how we translate raw potential into captivating digital portals, classy physical setups, and authoritative brand structures.</p>
          </Reveal>
          <div className="filter-list" role="group" aria-label="Filter campaign work">
            {filters.map((filter) => (
              <button
                className={activeFilter === filter ? 'filter-button is-active' : 'filter-button'}
                type="button"
                key={filter}
                aria-pressed={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
              >{filter}</button>
            ))}
          </div>
        </div>
        <motion.div className="project-grid" layout>
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => (
              <motion.article
                className="project-card"
                key={project.title}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.28, delay: index * 0.04 }}
              >
                <div className={`project-art ${project.tone}`}>
                  <span className="project-code">{project.code}</span>
                  <div className="project-art-copy"><span>Brilliance Konnect</span><em>{project.title}</em></div>
                  <div className="project-meta">
                    <span className="project-tag"><img src={`/assets/${project.tone === 'summit' ? 'pr-tag.svg' : 'strategy-tag.svg'}`} alt="" />{project.category}</span>
                    <span>{project.location}</span>
                  </div>
                </div>
                <div className="project-copy"><h3>{project.title}</h3><p>{project.description}</p></div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

export function ContactSection() {
  const [state, setState] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()
    setState('sending')
    setErrorMessage('')

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '2c59140e-8688-4bc9-b58d-5f1134bbd751'
    if (!accessKey) {
      setState('error')
      setErrorMessage('The contact form is not configured yet. Please email us directly and we will be glad to help.')
      return
    }

    const formData = new FormData(event.currentTarget)
    const senderName = formData.get('name')
    formData.append('access_key', accessKey)
    formData.append('subject', `New website inquiry from ${senderName}`)
    formData.append('from_name', 'Brilliance Konnect website')
    formData.append('replyto', formData.get('email'))

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const result = await response.json()
      if (!response.ok || !result.success) throw new Error(result.message || 'We could not send your message.')
      setState('success')
    } catch (error) {
      setState('error')
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again or email us directly.')
    }
  }

  return (
    <section className="contact-section page-width" id="contact">
      <div className="contact-layout">
        <Reveal className="contact-copy">
          <p className="section-kicker">Let's make it resonate</p>
          <h2>Good work begins<br />with a conversation.</h2>
          <p>Tell us what you are building, where you want to go, and how you would like to be remembered. We will take it from there.</p>
          <a className="contact-email" href="mailto:brilliancekonnect@outlook.com">brilliancekonnect@outlook.com <ArrowUpRight size={16} /></a>
          <div className="contact-note"><span className="availability-dot" />Currently welcoming select new partnerships</div>
        </Reveal>
        <Reveal className="contact-form-wrap" delay={0.12}>
          {state === 'success' ? (
            <div className="form-success" role="status">
              <span className="success-icon"><Check size={22} /></span>
              <p className="section-kicker">Message received</p>
              <h3>Thank you for reaching out.</h3>
              <p>We have your note and will be in touch soon.</p>
              <button className="text-button" type="button" onClick={() => setState('idle')}>Send another message <ArrowRight size={15} /></button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-heading"><span>01 / 03</span><h3>Tell us about your project</h3></div>
              <div className="form-row">
                <label>Your name<input autoComplete="name" name="name" placeholder="Full name" required /></label>
                <label>Email address<input autoComplete="email" type="email" name="email" placeholder="you@company.com" required /></label>
              </div>
              <div className="form-row">
                <label>Company <span className="optional-label">Optional</span><input autoComplete="organization" name="company" placeholder="Your organization" /></label>
                <label>What can we help with?
                  <select name="service" defaultValue="" required>
                    <option value="" disabled>Select a service</option>
                    <option>Brand strategy</option>
                    <option>Press & communications</option>
                    <option>Events & experiences</option>
                    <option>Digital & social</option>
                    <option>Something else</option>
                  </select>
                </label>
              </div>
              <label>Project details<textarea name="message" placeholder="A little about your goals, timing, or what success looks like..." rows="4" required minLength={12} /></label>
              <input className="botcheck" type="text" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" />
              {state === 'error' && <p className="form-error" role="alert">{errorMessage} <a href="mailto:brilliancekonnect@outlook.com">Email us directly</a></p>}
              <button className="button button-primary form-submit" type="submit" disabled={state === 'sending'}>
                {state === 'sending' ? <><span className="spinner" />Sending your message</> : <>Send your inquiry <Send size={15} /></>}
              </button>
              <p className="form-privacy">Your details stay between us. No noise, just a thoughtful reply.</p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-width footer-inner">
        <div className="footer-main">
          <div className="footer-brand">
            <a className="footer-wordmark" href="#home">Brilliance <em>Konnect.</em></a>
            <p>Nairobi's boutique PR, media communications, and digital strategy agency. We cultivate lasting market trust and premium presence.</p>
            <span className="footer-address">Westlands Commercial Center, Nairobi, Kenya</span>
          </div>
          <div className="footer-column"><h3>Capabilities</h3><a href="#services">Brand management</a><a href="#services">Press & media</a><a href="#services">Event production</a><a href="#services">Digital platforms</a></div>
          <div className="footer-column"><h3>Company</h3><a href="#about">Our identity</a><a href="#about">Core pillars</a><a href="#work">Curated campaigns</a><a href="#contact">Get in touch</a></div>
          <div className="footer-cta"><h3>Start a conversation</h3><p>Ready to shape your corporate narrative and elevate audience engagement?</p><a href="mailto:brilliancekonnect@outlook.com">brilliancekonnect@outlook.com <ArrowUpRight size={14} /></a></div>
        </div>
        <div className="footer-bottom"><span>© Brilliance Konnect. All rights reserved.</span><a href="mailto:brilliancekonnect@outlook.com?subject=Media%20inquiry">Media inquiries</a><a href="#home" aria-label="Back to top">Back to top <ArrowUpRight size={13} /></a></div>
      </div>
    </footer>
  )
}

export function ScrollCueIcon() {
  return <ArrowDown aria-hidden="true" />
}
