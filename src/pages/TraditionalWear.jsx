import './Category.css'

const subsections = [
  { title: 'Agbada', prefix: 'agbada' },
  { title: 'Kaftan', prefix: 'kaftan' },
  { title: 'Jalabiya', prefix: 'jalabiya' },
  { title: 'Senator', prefix: 'senator' },
]

function TraditionalWear() {
  return (
    <>
      <div className="category-hero">
        <span className="category-label">Signature Pieces</span>
        <h1>Traditional Wear</h1>
        <p>Traditional cut, modern finish — agbada, kaftan, jalabiya, and senator sets, each built to the same standard.</p>
      </div>

      {subsections.map((section) => (
        <div key={section.prefix}>
          <h2 className="subsection-title">{section.title}</h2>
          <div className="category-gallery">
            {[1, 2, 3].map((n) => (
              <a href={`https://wa.me/2347046913739?text=Hello%20Akahome%20Signatures%2C%20I%20like%20this%20${section.title}%20design%3A%20https%3A%2F%2Fakahomesignatures-nine.vercel.app%2Fimages%2F${section.prefix}-${n}.jpg%20-%20Can%20I%20sew%20this%3F`} target="_blank" rel="noopener noreferrer" className="category-item" key={n}>
                <img src={`/images/${section.prefix}-${n}.jpg`} alt={`${section.title} ${n}`} />
              </a>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}

export default TraditionalWear
