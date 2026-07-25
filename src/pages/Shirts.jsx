import './Category.css'

function Shirts() {
  const images = [1, 2, 3, 4, 5, 6]
  return (
    <>
      <div className="category-hero">
        <span className="category-label">Signature Pieces</span>
        <h1>Casual Shirts</h1>
        <p>Off-duty, still put-together — this is what he reaches for on a free day. Not office wear, but never sloppy either.</p>
      </div>
      <div className="category-gallery">
        {images.map((n) => (
          <div className="category-item" key={n}>
            <img src={`/images/shirts-${n}.jpg`} alt={`Casual shirt ${n}`} />
          </div>
        ))}
      </div>
    </>
  )
}

export default Shirts