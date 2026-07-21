import './Showreel.css'

function Showreel() {
  return (
    <section className="showreel">
      <span className="showreel-label">In Motion</span>
      <h2>Every style, one reel.</h2>
      <div className="showreel-frame">
        <video src="/videos/showreel.mp4" autoPlay muted loop playsInline className="showreel-video" />
      </div>
    </section>
  )
}

export default Showreel