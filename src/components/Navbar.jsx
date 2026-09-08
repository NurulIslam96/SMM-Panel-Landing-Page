import { Link, useLocation } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

export default function Navbar() {
  const location = useLocation()
  const isActive = (path) => location.pathname === path ? 'active' : ''
  const [menuOpen, setMenuOpen] = useState(false)
  const navbarRef = useRef(null)

  useEffect(() => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setMenuOpen(false)
      }
    }

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('touchstart', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [menuOpen])

  return (
    <nav className="navbar" ref={navbarRef}>
      <Link to="/" className="logo" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setMenuOpen(false); }}>LOGO</Link>

      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <Link to="/" className={isActive('/')} onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setMenuOpen(false); }}>Home</Link>
        <a href="#services-section" onClick={() => setMenuOpen(false)}>Services</a>
        <a href="#growth-section" onClick={(e) => { e.preventDefault(); document.getElementById('growth-section').scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false); }}>Blog</a>
        <a href="#advantages-section" onClick={(e) => { e.preventDefault(); document.getElementById('advantages-section').scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false); }}>About Us</a>
        <a href="#faq-section" onClick={(e) => { e.preventDefault(); document.getElementById('faq-section').scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false); }}>API</a>
        <a href="#contact-section" onClick={(e) => { e.preventDefault(); document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false); }}>Contact Us</a>
      </div>

      <div className={`nav-buttons ${menuOpen ? 'mobile-visible' : ''}`}>
        <button className="btn btn-outline" onClick={() => setMenuOpen(false)}>Sign In</button>
        <button className="btn btn-primary" onClick={() => setMenuOpen(false)}>Sign Up</button>
      </div>

      <button className="hamburger" aria-label="Toggle menu" onClick={() => setMenuOpen(prev => !prev)}>
        <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
      </button>
    </nav>
  )
}
