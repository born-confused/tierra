export default function UseCases({ audience }) {
  return (
    <section id="use-cases" className="section">
        <div className="container narrow-heading">
          <div className="section-label">Use cases</div>
          <h2>Designed for spaces that change often and spaces that deserve better materials.</h2>
        </div>
        <div className="container card-grid three-up">
          {audience.map((item, index) => (
            <article key={item.title} className="content-card use-case-card">
              <div className={`image-block image-block-${index + 1}`} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>
  );
}