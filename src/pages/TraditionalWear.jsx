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
              <div className="category-item" key={n}>
                <img src={`/images/${section.prefix}-${n}.jpg`} alt={`${section.title} ${n}`} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}

export default TraditionalWear