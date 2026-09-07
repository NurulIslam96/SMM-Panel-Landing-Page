import { Link } from 'react-router-dom'
import Stats from '../components/Stats'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <div className="rating">
              <span className="stars">★★★★★</span>
              <span className="rating-text">Excellent 4.8 out of 5</span>
            </div>

            <h1>
              Best SMM Panel <br />
              in Bangladesh - <span className="highlight">Fast</span>
              <span className="highlight">,Safe</span> & <br />
              Growth in Social Media.
            </h1>

            <p className="hero-description">
              SMM is Bangladesh's most reliable & cheap SMM panel for real social media
              growth. We built this platform for Bangladeshi businesses, creators, and agencies.
              You get fast delivery, safe methods, and followers that actually stay. No fake bots.
              No account risks. Just real results. Most panels chase big numbers. We focus on
              keeping those numbers. You get retention guarantees, delivery control, and long-
              term credibility.
            </p>

            <div className="hero-buttons">
              <Link to="/services" className="btn btn-outline">
                View Services
              </Link>
              <button className="btn btn-primary">
                Create an Account
              </button>
            </div>
          </div>

          <div className="hero-image">
            <img src="/hero.png" alt="Hero" className="hero-img" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Stats />

      {/* Services Section */}
      <section className="services-section" id="services-section">
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
          {['Facebook', 'Instagram', 'X (Twitter)', 'YouTube', 'TikTok', 'LinkedIn', 'Telegram', 'Discord', 'Spotify', 'SoundCloud', 'Snapchat', 'Website Traffic'].map((platform, index) => (
            <button key={index} className="platform-btn">
              <span className="platform-icon">●</span>
              {platform}
            </button>
          ))}
        </div>

        <div className="service-card">
          <div className="service-image">
            <div className="service-image-placeholder">🚀</div>
          </div>
          <div className="service-content">
            <h3 className="service-title">Facebook Marketing Services</h3>
            <p className="service-description">
              Boost your brand visibility, connect with your ideal audience, and drive more traffic, engagement, and sales through strategic Facebook marketing campaigns.
            </p>
            <div className="service-list">
              {[
                { title: 'Facebook Post Likes', desc: 'Boost post engagement and credibility with real likes.' },
                { title: 'Facebook Likes', desc: 'Grow your page popularity with high-quality likes.' },
                { title: 'Facebook Comments', desc: 'Increase interaction with engaging comments.' },
                { title: 'Facebook Shares', desc: 'Expand your reach with powerful shares.' },
                { title: 'Facebook Video Views', desc: 'Get more visibility with high-retention video views.' },
                { title: 'Facebook Reactions', desc: 'Make your posts more engaging with diverse reactions.' },
              ].map((item, index) => (
                <div key={index} className="service-item">
                  <span className="service-number">{index + 1}</span>
                  <span className="service-item-text">
                    <strong>{item.title}</strong> - {item.desc}
                  </span>
                </div>
              ))}
            </div>
            <Link to="/services" className="btn btn-primary">
              View Facebook Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
