import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="logo">LOGO</div>
          <p className="footer-desc">
            SMM is Bangladesh's most trusted SMM panel. We offer fast, affordable social media growth services for every platform, with full support for local payments like bKash and Nagad.
          </p>
          <div className="footer-social">
            <span>f</span>
            <span>📷</span>
            <span>▶️</span>
            <span>🐦</span>
            <span>in</span>
          </div>
        </div>

        <div className="footer-links-group">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/">Blog</Link></li>
            <li><Link to="/">Contact Us</Link></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Refund Policy</a></li>
          </ul>
        </div>

        <div className="footer-links-group">
          <h4>Services Pages</h4>
          <ul>
            <li><a href="#">Facebook SMM Panel</a></li>
            <li><a href="#">Instagram SMM Panel</a></li>
            <li><a href="#">YouTube SMM Panel</a></li>
            <li><a href="#">TikTok SMM Panel</a></li>
            <li><a href="#">Telegram SMM Panel</a></li>
            <li><a href="#">X-Twitter SMM Panel</a></li>
          </ul>
        </div>

        <div className="footer-links-group">
          <h4>Contact Info</h4>
          <div className="contact-info">
            <p><span>📧</span> info@smmsun.com</p>
            <p><span>📞</span> +1 833 252 275</p>
            <p><span>🎧</span> Serving all of Bangladesh<br />Support: 24/7</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 SMM Limited. All Rights Reserved. | Operated under the Bangladesh ICT Framework.</p>
      </div>
    </footer>
  )
}
