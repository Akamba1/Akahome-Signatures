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
          <a href={`https://wa.me/2347046913739?text=Hello%20Akahome%20Signatures%2C%20I%20like%20this%20suit%20design%3A%20https%3A%2F%2Fakahomesignatures-nine.vercel.app%2Fimages%2Fsuits-${n}.jpg%20-%20Can%20I%20sew%20this%3F`} target="_blank" rel="noopener noreferrer" className="category-item" key={n}>
            <img src={`/images/suits-${n}.jpg`} alt={`Suit ${n}`} />
          </a>
        ))}
      </div>
    </>
  )
}

export default Suits
