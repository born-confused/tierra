export default function UseCases({ audience }) {
  return (
    <section id="use-cases" className="section">
        <div className="container split-grid">
          <div className="use-cases-heading">
            <div className="section-label">Use cases</div>
            <h2>Designed for spaces that change often and spaces that deserve better materials.</h2>
          </div>
        </div>

        <div className="use-case-image-strip">
          {audience.map((item, index) => (
            <div key={item.title} className="use-case-portrait">
              <img src={`/tierra-usecase-${index + 1}.webp`} alt={item.title} />
            </div>
          ))}
        </div>
      </section>
  );
}