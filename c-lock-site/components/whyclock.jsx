export default function WhyClock({ benefits }) {
  return (
    <section id="why-clock" className="section section-white">
        <div className="container split-grid">
          <div>
            <div className="section-label">Why C-LOCK</div>
            <h2>A wall system built around carbon, not just construction.</h2>
            <p>
              C-LOCK is designed as a material system, not just a surface upgrade. It addresses carbon impact, renovation waste, and material toxicity together through a modular architecture that allows walls to evolve instead of being replaced.
            </p>
          </div>

          <div className="card-grid two-up">
            {benefits.map((item) => (
              <article key={item.title} className="content-card soft-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
  );
}