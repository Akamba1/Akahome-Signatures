import './Collab.css'

function Collab() {
  return (
    <section className="collab">
      <span className="collab-label">In Collaboration</span>
      <div className="collab-logos">
        <img src="/images/akahome-logo.jpg" alt="Akahome Signatures" className="collab-logo-img" />
        <span className="x">×</span>
        <img src="/images/oba-ade-logo.jpg" alt="Oba Ade" className="collab-logo-img" />
      </div>
      <h2 className="collab-title">Akahome Signatures <span className="x">×</span> Oba Ade</h2>
      <p className="collab-text">
        For looks that call for it, Akahome Signatures partners with <span className="collab-name">Oba Ade</span> — trousers and shoes built to match the same standard: nothing off the shelf, everything made to complete the look.
      </p>
      <div className="collab-video">
        <video src="/videos/collab.mp4" autoPlay muted loop playsInline className="collab-video-el" />
      </div>
      <h3 className="samples-title">Sample Looks</h3>
      <div className="collab-samples">
        <div className="sample-slot"><img src="/images/collab-look-1.jpg" alt="Akahome × Oba Ade look 1" className="sample-img" /></div>
        <div className="sample-slot"><img src="/images/collab-look-2.jpg" alt="Akahome × Oba Ade look 2" className="sample-img" /></div>
        <div className="sample-slot"><img src="/images/collab-look-3.jpg" alt="Akahome × Oba Ade look 3" className="sample-img" /></div>
      </div>
    </section>
  )
}

export default Collab