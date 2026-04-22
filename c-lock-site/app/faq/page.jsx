import Navbar from "../../components/navbar";

export default function FaqPage() {
  return (
    <main>
      <Navbar />

      <section className="section faq-section">
        <div className="container centered-heading">
          <div className="section-label">FAQ</div>
          <h1>Questions curious minds will ask.</h1>
          <p className="hero-copy">
            This page will answer the most common questions about C-LOCK, from materials and carbon storage to durability, use cases, and end-of-life considerations.
          </p>
        </div>
      </section>
    </main>
  );
}