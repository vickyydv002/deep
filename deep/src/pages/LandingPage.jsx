const features = [
  {
    icon: '⚡',
    title: 'Lightning fast',
    text: 'Deploy in seconds with zero-config pipelines and instant previews.',
  },
  {
    icon: '🔒',
    title: 'Secure by default',
    text: 'Enterprise-grade encryption, SSO, and role-based access out of the box.',
  },
  {
    icon: '📊',
    title: 'Real-time insights',
    text: 'Track performance, uptime, and user behavior from a single dashboard.',
  },
]

const stats = [
  { value: '10k+', label: 'Teams onboarded' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '4.9★', label: 'Average rating' },
]

export default function LandingPage({ onNavigate }) {
  return (
    <div className="page">
      <header className="header">
        <a href="/" className="logo" onClick={(e) => { e.preventDefault(); onNavigate('/') }}>
          Deep
        </a>
        <nav className="nav">
          <a href="#features">Features</a>
          <a href="#stats">Why Deep</a>
          <a href="#cta">Pricing</a>
        </nav>
        <div className="header-actions">
          <button
            type="button"
            className="btn btn-ghost"
            onClick={() => onNavigate('/myapp')}
          >
            My App
          </button>
          <a href="#cta" className="btn btn-primary">
            Get started
          </a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-badge">Now in public beta</div>
          <h1>
            Ship faster.
            <br />
            <em>Build smarter.</em>
          </h1>
          <p className="hero-sub">
            Deep gives your team the tools to launch products, monitor performance,
            and scale — all from one beautiful platform.
          </p>
          <div className="hero-cta">
            <a href="#cta" className="btn btn-primary btn-lg">
              Start for free
            </a>
            <a href="#features" className="btn btn-ghost btn-lg">
              See how it works
            </a>
          </div>
          <div className="hero-visual">
            <div className="mock-window">
              <div className="mock-bar">
                <span />
                <span />
                <span />
              </div>
              <div className="mock-content">
                <div className="mock-line mock-line--wide" />
                <div className="mock-line" />
                <div className="mock-line" />
                <div className="mock-cards">
                  <div className="mock-card" />
                  <div className="mock-card" />
                  <div className="mock-card" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="stats" className="stats">
          {stats.map(({ value, label }) => (
            <div className="stat" key={label}>
              <span className="stat-value">{value}</span>
              <span className="stat-label">{label}</span>
            </div>
          ))}
        </section>

        <section id="features" className="features">
          <div className="section-header">
            <p className="eyebrow">Features</p>
            <h2>Everything you need to launch</h2>
            <p>Powerful tools that stay out of your way.</p>
          </div>
          <div className="feature-grid">
            {features.map(({ icon, title, text }) => (
              <article className="feature-card" key={title}>
                <span className="feature-icon">{icon}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="cta" className="cta">
          <h2>Ready to go deep?</h2>
          <p>Join thousands of teams already building with Deep.</p>
          <form
            className="cta-form"
            onSubmit={(e) => {
              e.preventDefault()
            }}
          >
            <input type="email" placeholder="you@company.com" required />
            <button type="submit" className="btn btn-primary">
              Get early access
            </button>
          </form>
        </section>
      </main>

      <footer className="footer">
        <span className="logo">Deep</span>
        <p>&copy; 2026 Deep. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>
        </div>
      </footer>
    </div>
  )
}
