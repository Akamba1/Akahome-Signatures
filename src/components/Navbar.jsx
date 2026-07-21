import './Navbar.css'

function Navbar() {
  return (
    <header className="site-header">
      <div className="logo">
        <img src="/images/akahome-logo.jpg" alt="Akahome Signatures" className="logo-img" />
        <span className="logo-text">Akahome <em>Signatures</em></span>
      </div>
      <nav>
        <ul>
          <li><a href="#craft">The Craft</a></li>
          <li><a href="#work">Signature Pieces</a></li>
          <li><a href="#contact">Book a Fitting</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar