import './Showreel.css'

function Showreel() {
  return (
    <section className="showreel">
      <span className="showreel-label">In Motion</span>
      <h2>Every style, one frame.</h2>
      <div className="showreel-frame">
        <img src="/images/showreel.jpg" alt="Akahome Signatures styles" className="showreel-img" />
      </div>
    </section>
  )
}

export default Showreel