import Navbar from "../../components/navbar";

export default function MeetTheCreatorsPage() {
  return (
    <main>
      <Navbar />

      <section className="section">
        <div className="container centered-heading">
          <div className="section-label">Meet the Creators</div>
          <h1>The people behind C-LOCK.</h1>
          <p className="hero-copy">
            This page will introduce the team, why they are building C-LOCK, and the people shaping its vision.
          </p>
        </div>
      </section>
    </main>
  );
}