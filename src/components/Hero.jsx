import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <video
          src="/videos/hero-bg.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="hero-media"
        />
      </div>
      <div className="hero-overlay"></div>

      <div className="hero-grid">
        <div className="label">Gentlemen's Wear</div>
        <h1>
          Cut for<br/>
          <span className="it">how you</span><br/>
          stand.
        </h1>
        <div className="hero-side">
          <p>Akahome Signatures builds traditional and contemporary menswear around your exact measurements — agbada, kaftans, and tailored suiting, finished by hand in Lagos.</p>
          
            <a
              href="https://wa.me/2347046913739?text=Hi%20Akahome%20Signatures%2C%20I%27d%20like%20to%20book%20a%20fitting."
              target="_blank"
              rel="noopener noreferrer"
              className="cta"
            >
            Book a Fitting →
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero