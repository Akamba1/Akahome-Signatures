import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <Link to="/" className="logo" onClick={() => setOpen(false)}>
        <img src="/images/akahome-logo.jpg" alt="Akahome Signatures" className="logo-img" />
        <span className="logo-text">Akahome <em>Signatures</em></span>
      </Link>

      <button className={`menu-toggle ${open ? 'is-open' : ''}`} onClick={() => setOpen(!open)} aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className="site-nav">
        <ul>
          <li><Link to="/trousers">Trousers</Link></li>
          <li><Link to="/shirts">Shirts</Link></li>
          <li><Link to="/suits">Suits</Link></li>
          <li><Link to="/traditional-wear">Traditional Wear</Link></li>
        </ul>
      </nav>

      <div className={`mobile-backdrop ${open ? 'show' : ''}`} onClick={() => setOpen(false)}></div>
      <nav className={`mobile-nav ${open ? 'show' : ''}`}>
        <ul>
          <li><Link to="/trousers" onClick={() => setOpen(false)}>Trousers</Link></li>
          <li><Link to="/shirts" onClick={() => setOpen(false)}>Shirts</Link></li>
          <li><Link to="/suits" onClick={() => setOpen(false)}>Suits</Link></li>
          <li><Link to="/traditional-wear" onClick={() => setOpen(false)}>Traditional Wear</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar