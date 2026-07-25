import './Footer.css'

function Footer() {
  return (
    <>
      <section className="contact-band" id="contact">
      <h2>Have your own <em>design</em> or idea?</h2>
      <p className="contact-band-sub">Book a fitting and let's talk.</p>
        
        <a
          href="https://wa.me/2347046913739?text=Hi%20Akahome%20Signatures%2C%20I%27d%20like%20to%20book%20a%20fitting."
          target="_blank"
          rel="noopener noreferrer"
          className="cta"
        >
          Book a Fitting →
        </a>
      </section>

      <footer className="site-footer">
        <div className="footer-logo">
        <img src="/images/akahome-logo.jpg" alt="Akahome Signatures" className="logo-img" />
        <span className="logo-text">Akahome <em>Signatures</em></span>
        </div>
        <div className="footer-meta">Joshua Akahome-Yesufu, CEO</div>
        <div className="footer-links">
          <span>Lagos, Nigeria</span>
          <a href="https://wa.me/2347046913739" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <a href="https://www.instagram.com/akahomesignatures/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.tiktok.com/@akahomesignatures" target="_blank" rel="noopener noreferrer">TikTok</a>
        </div>
        <div className="footer-copyright">© 2026 Akahome Signatures. All rights reserved.</div>
      </footer>
    </>
  )
}

export default Footer