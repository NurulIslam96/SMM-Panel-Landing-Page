import { Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

export default function Navbar() {
  const location = useLocation()
  const isActive = (path) => location.pathname === path ? 'active' : ''

  useEffect(() => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location.pathname])

  return (
    <nav className="navbar">
      <Link to="/" className="logo">LOGO</Link>

      <div className="nav-links">
        <Link to="/" className={isActive('/')} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</Link>
        <a href="#services-section">Services</a>
        <a href="#growth-section" onClick={(e) => { e.preventDefault(); document.getElementById('growth-section').scrollIntoView({ behavior: 'smooth' }); }}>Blog</a>
        <a href="#advantages-section" onClick={(e) => { e.preventDefault(); document.getElementById('advantages-section').scrollIntoView({ behavior: 'smooth' }); }}>About Us</a>
        <a href="#faq-section" onClick={(e) => { e.preventDefault(); document.getElementById('faq-section').scrollIntoView({ behavior: 'smooth' }); }}>API</a>
        <a href="#contact-section" onClick={(e) => { e.preventDefault(); document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' }); }}>Contact Us</a>
      </div>

      <div className="nav-buttons">
        <button className="btn btn-outline">Sign In</button>
        <button className="btn btn-primary">Sign Up</button>
      </div>
    </nav>
  )
}
