import './Testimonials.css'

const quotes = [
  { text: 'Bro made these fit better than anything I\'ve bought abroad, no cap.', name: 'A client, Lagos' },
  { text: 'Clean enough for church, sharp enough that people ask who made it.', name: 'A client, Lagos' },
  { text: 'Wore this to my guy\'s wedding and I was the best-dressed groomsman, easy.', name: 'A client, Lagos' },
]

function Testimonials() {
  return (
    <section className="testimonials">
      <span className="testi-label">What People Say</span>
      <div className="testi-grid">
        {quotes.map((q, i) => (
          <div className="testi-card" key={i}>
            <p className="testi-text">"{q.text}"</p>
            <span className="testi-name">— {q.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials