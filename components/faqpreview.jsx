export default function FaqPreview({ faqs }) {
  return (
    <section id="faq" className="section faq-section">
        <div className="container centered-heading">
          <div className="section-label">FAQ</div>
          <h2>Questions a buyer or design partner will ask</h2>
        </div>
        <div className="container faq-list">
          {faqs.map((item) => (
            <details key={item.q} className="faq-item">
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>
  );
}