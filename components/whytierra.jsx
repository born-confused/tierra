export default function WhyTierra({ benefits }) {
  return (
    <section id="why-clock" className="section section-white">
        <div className="container split-grid">
          <div className="why-tierra-heading">
            <div className="section-label">Why Tierra</div>
            <h2>A wall system built around carbon, not just construction.</h2>
          </div>

          <div className="why-tierra-image">
            <img
              src="/tierra-bedroom-wall.webp"
              alt="Tierra modular wall tiles installed in a bedroom interior"
            />
          </div>

          <div className="card-grid two-up why-tierra-benefits">
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