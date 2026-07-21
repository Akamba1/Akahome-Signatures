import './Dossier.css'

const entries = [
  { number: '01', name: 'Senator Set', note: 'Clean enough for church, sharp enough that people ask who made it.', video: '/videos/senator-set.mp4' },
  { number: '02', name: 'Tailored Trousers', note: 'Fit like this doesn\'t come off a rack — every seam built around him first.', video: '/videos/trousers.mp4' },
  { number: '03', name: 'Casual Shirts', note: 'Off-duty, still put-together — this is what he reaches for on a free day.', video: '/videos/casual-shirts.mp4' },
  { number: '04', name: 'Jalabiya', note: 'Traditional cut, modern finish — built for Jumu\'ah and everything after.', video: '/videos/jalabiya.mp4' },
]

function Dossier() {
  return (
    <section className="dossier" id="work">
      <div className="dossier-head">
        <span className="dossier-label">Signature Pieces</span>
        <h2>The Collection</h2>
      </div>
      {entries.map((entry, i) => (
        <div className={`dossier-entry ${i % 2 === 1 ? 'reverse' : ''}`} key={entry.number}>
          <div className="dossier-visual">
            <span className="ghost-number">{entry.number}</span>
            <div className="video-slot">
              <video src={entry.video} autoPlay muted loop playsInline className="dossier-video" />
            </div>
          </div>
          <div className="dossier-text">
            <h3>{entry.name}</h3>
            <p>{entry.note}</p>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Dossier