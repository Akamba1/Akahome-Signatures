import './About.css'

function About() {
  return (
    <section className="about" id="about">
      <div className="about-media">
        {/* Once you have his photo or video, replace this div's content:
            <img src="/images/joshua-about.jpg" alt="Joshua Akahome-Yesufu" className="about-img" />
            or for video:
            <video src="/videos/joshua-about.mp4" autoPlay muted loop playsInline className="about-img" />
        */}
        <span className="about-placeholder">Photo</span>
      </div>

      <div className="about-content">
        <span className="about-label">The Tailor</span>
        <h2>Built by hand,<br/><span className="it">worn</span> with intent.</h2>
        <p>
          Akahome Signatures is the work of Joshua Akahome-Yesufu — every
          piece measured, cut, and finished by hand rather than pulled off
          a rack. No shortcuts, no standard sizing. Just clothing built
          around the person actually wearing it.
        </p>
        <p>
          What started as a personal obsession with fit has grown into a
          full wardrobe of gentlemen's wear — from senator sets to casual
          shirts to traditional pieces — all carrying the same standard.
        </p>
      </div>
    </section>
  )
}

export default About