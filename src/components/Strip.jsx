import './Strip.css'

function Strip() {
  const items = ['Agbada', 'Senator Wear', 'Kaftans', 'Cooperate Trousers', 'Native Wear', 'Jalabiya']
  return (
    <div className="strip">
      <div className="strip-track">
        {[...items, ...items].map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  )
}

export default Strip