import '../components/Hero.css'
import './Category.css'

function Trousers() {
  const images = [1, 2, 3, 4, 5, 6]
  return (
    <>
      <div className="category-hero">
        <span className="category-label">Signature Pieces</span>
        <h1>Tailored Trousers</h1>
        <p>Fit like this doesn't come off a rack — every seam built around him first. Cut for movement, structured to hold shape all day.</p>
      </div>
      <div className="category-gallery">
        {images.map((n) => (
          <div className="category-item" key={n}>
            <img src={`/images/trousers-${n}.jpg`} alt={`Tailored trousers ${n}`} />
          </div>
        ))}
      </div>
    </>
  )
}

export default Trousers