import './Craft.css'

const steps = [
  { title: 'Consult', text: 'We talk fabric, occasion, and silhouette — agbada for a wedding, senator wear for the office, or a shirt that\'s just for you.' },
  { title: 'Measure', text: 'Full-body measurement taken by hand. Nothing estimated, nothing standard — the pattern is drafted for your frame alone.' },
  { title: 'Fit', text: 'A first fitting to adjust, a final fitting to confirm. You leave with a garment that sits the way it should.' },
]

function Craft() {
  return (
    <section className="craft" id="craft">
      <div className="craft-head">
        <span className="craft-label">The Process</span>
        <h2>Three fittings.<br/>One garment that's yours.</h2>
      </div>
      <div className="craft-steps">
        {steps.map((step, i) => (
          <div className="craft-step" key={step.title}>
            <span className="step-number">0{i + 1}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Craft