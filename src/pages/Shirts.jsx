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
          <a href={`https://wa.me/2347046913739?text=Hello%20Akahome%20Signatures%2C%20I%20like%20this%20shirt%20design%3A%20https%3A%2F%2Fakahomesignatures-nine.vercel.app%2Fimages%2Fshirts-${n}.jpg%20-%20Can%20I%20sew%20this%3F`} target="_blank" rel="noopener noreferrer" className="category-item" key={n}>
            <img src={`/images/shirts-${n}.jpg`} alt={`Casual shirt ${n}`} />
          </a>
        ))}
      </div>
    </>
  )
}

export default Shirts
