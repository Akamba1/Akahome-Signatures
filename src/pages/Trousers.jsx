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
          <a href={`https://wa.me/2347046913739?text=Hello%20Akahome%20Signatures%2C%20I%20like%20this%20trousers%20design%3A%20https%3A%2F%2Fakahomesignatures-nine.vercel.app%2Fimages%2Ftrousers-${n}.jpg%20-%20Can%20I%20sew%20this%3F`} target="_blank" rel="noopener noreferrer" className="category-item" key={n}>
            <img src={`/images/trousers-${n}.jpg`} alt={`Tailored trousers ${n}`} />
          </a>
        ))}
      </div>
    </>
  )
}

export default Trousers
