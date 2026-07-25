import './Category.css'

function Suits() {
  const images = [1, 2, 3, 4, 5, 6]
  return (
    <>
      <div className="category-hero">
        <span className="category-label">Signature Pieces</span>
        <h1>Suits</h1>
        <p>Structured, precise, built for the moments that call for it — weddings, interviews, the days you need to look like you mean business.</p>
      </div>
      <div className="category-gallery">
        {images.map((n) => (
          <div className="category-item" key={n}>
            <img src={`/images/suits-${n}.jpg`} alt={`Suit ${n}`} />
          </div>
        ))}
      </div>
    </>
  )
}

export default Suits