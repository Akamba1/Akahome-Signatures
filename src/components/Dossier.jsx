import { Link } from 'react-router-dom'
import './Dossier.css'

const entries = [
  { number: '01', name: 'Senator Set', note: 'Clean enough for church, sharp enough that people ask who made it.', img: '/images/senator-set.jpg', link: '/traditional-wear' },
  { number: '02', name: 'Tailored Trousers', note: 'Fit like this doesn\'t come off a rack — every seam built around him first.', img: '/images/trousers.jpg', link: '/trousers' },
  { number: '03', name: 'Casual Shirts', note: 'Off-duty, still put-together — this is what he reaches for on a free day.', img: '/images/casual-shirts.jpg', link: '/shirts' },
  { number: '04', name: 'Jalabiya', note: 'Traditional cut, modern finish — built for Jumu\'ah and everything after.', img: '/images/jalabiya.jpg', link: '/traditional-wear' },
]

function Dossier() {
  return (
    <section className="dossier" id="work">
      <div className="dossier-head">
        <span className="dossier-label">Signature Pieces</span>
        <h2>The Collection</h2>
      </div>
      {entries.map((entry, i) => (
        <Link to={entry.link} className={`dossier-entry ${i % 2 === 1 ? 'reverse' : ''}`} key={entry.number}>
          <div className="dossier-visual">
            <span className="ghost-number">{entry.number}</span>
            <div className="video-slot">
              <img src={entry.img} alt={entry.name} className="dossier-img" />
            </div>
          </div>
          <div className="dossier-text">
            <h3>{entry.name}</h3>
            <p>{entry.note}</p>
            <span className="view-more">View {entry.name} →</span>
          </div>
        </Link>
      ))}
    </section>
  )
}

export default Dossier