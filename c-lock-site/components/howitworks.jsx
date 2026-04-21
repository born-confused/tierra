export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section">
        <div className="container narrow-heading">
          <div className="section-label">How it works</div>
          <h2>A simpler way to build and refresh walls</h2>
          <p>
            Most wall systems are static. Once installed, changing them means tearing materials out and starting over. C-LOCK turns walls into a flexible surface that can evolve with the space.
          </p>
        </div>

        <div className="container card-grid three-up">
          <article className="content-card">
            <span className="step-label">01</span>
            <h3>Snap tiles into place</h3>
            <p>
              The modular design is made for quick setup, reducing installation friction for both commercial and residential users.
            </p>
          </article>
          <article className="content-card">
            <span className="step-label">02</span>
            <h3>Rearrange or replace as needed</h3>
            <p>
              Instead of full renovation cycles, users can update only the sections they want to refresh.
            </p>
          </article>
          <article className="content-card">
            <span className="step-label">03</span>
            <h3>Recycle through the loop</h3>
            <p>
              At end of life, the system is intended to support circular recovery and material reuse.
            </p>
          </article>
        </div>
      </section>
  );
}