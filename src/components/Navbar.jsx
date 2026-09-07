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
        <a href="#services-section" className={isActive('/services')}>Services</a>
        <a href="#blog">Blog</a>
        <a href="#about">About Us</a>
        <a href="#contact">Contact Us</a>
        <a href="#api">API</a>
      </div>

      <div className="nav-buttons">
        <button className="btn btn-outline">Sign In</button>
        <button className="btn btn-primary">Sign Up</button>
      </div>
    </nav>
  )
}
