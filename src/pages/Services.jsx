import Footer from '../components/Footer'

const platforms = [
  { name: 'Facebook', icon: '📘', active: true },
  { name: 'Instagram', icon: '📸', active: false },
  { name: 'X (Twitter)', icon: '🐦', active: false },
  { name: 'YouTube', icon: '▶️', active: false },
  { name: 'TikTok', icon: '🎵', active: false },
  { name: 'LinkedIn', icon: '💼', active: false },
  { name: 'Telegram', icon: '✈️', active: false },
  { name: 'Discord', icon: '🎮', active: false },
  { name: 'Spotify', icon: '🎧', active: false },
  { name: 'SoundCloud', icon: '☁️', active: false },
  { name: 'Snapchat', icon: '👻', active: false },
  { name: 'Website Traffic', icon: '🌐', active: false },
]

export default function Services() {
  return (
    <div>
      <section className="services-section">
        <div className="section-header">
          <div className="section-label">our services</div>
          <h2 className="section-title">
            Powerful <span className="highlight">SMM Services</span> for Fast Growth
          </h2>
          <p className="section-description">
            Explore our comprehensive range of social media marketing services designed to help you grow your presence across all major platforms. From Facebook to TikTok, we've got you covered.
          </p>
        </div>

        <div className="platform-filters">
          {platforms.map((platform, index) => (
            <button
              key={index}
              className={`platform-btn ${platform.active ? 'active' : ''}`}
            >
              <span className="platform-icon">{platform.icon}</span>
              {platform.name}
            </button>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  )
}
