import Navbar from "../components/navbar";
import Hero from "../components/hero";


const benefits = [
  {
    title: 'Tool-free installation',
    text: 'A snap-fit tile system inspired by modular building blocks, so walls can be installed or refreshed in minutes.',
  },
  {
    title: 'Zero-waste updates',
    text: 'Replace or rearrange only the tiles you want instead of ripping out entire wall panels.',
  },
  {
    title: 'Carbon-conscious materials',
    text: 'Designed to turn industrial pollution into durable, design-forward wall tiles.',
  },
  {
    title: 'Closed-loop lifecycle',
    text: 'Tiles are built with end-of-life recycling in mind, supporting a circular product model.',
  },
];

const audience = [
  {
    title: 'Retail and pop-ups',
    text: 'Refresh visual merchandising quickly without creating renovation waste every season.',
  },
  {
    title: 'Offices and commercial interiors',
    text: 'Create premium branded spaces that stay flexible as layouts and teams evolve.',
  },
  {
    title: 'Homes and DIY users',
    text: 'Upgrade walls with a design-forward system that is easy to install and simple to update.',
  },
];

const faqs = [
  {
    q: 'What is C-LOCK?',
    a: 'C-LOCK is a modular wall tile system designed to replace traditional plastic and wood wall panels with a more flexible, low-waste alternative.',
  },
  {
    q: 'Do I need tools or professional installers?',
    a: 'The system is designed around a simple snap-fit setup, making installation faster and more approachable than traditional wall panel systems.',
  },
  {
    q: 'Why is this better than standard wall panels?',
    a: 'Traditional renovations often create waste because entire panels get replaced. C-LOCK lets users update only the pieces they need while also aiming for stronger environmental performance.',
  },
  {
    q: 'Who is it for?',
    a: 'It is designed for homeowners, designers, architects, retail teams, offices, and brands that want flexible, premium-looking walls with a more sustainable lifecycle.',
  },
];

export default function HomePage() {
  return (
    <main id="top">
      <Navbar />

      <Hero />

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

      <section id="why-clock" className="section section-white">
        <div className="container split-grid">
          <div>
            <div className="section-label">Why C-LOCK</div>
            <h2>Built around the real problem, not just the wall.</h2>
            <p>
              The pain point is not only aesthetics. It is the waste, labor, rigidity, and repeated replacement that come with conventional wall panels. C-LOCK solves for all four at once.
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

      <section id="sustainability" className="section section-dark">
        <div className="container split-grid">
          <div>
            <div className="section-label section-label-light">Sustainability</div>
            <h2>Sustainability is not an extra claim. It is the product architecture.</h2>
            <p>
              C-LOCK is positioned around reducing waste from traditional interior renovation while using a material approach that aims to capture carbon and support end-of-life recycling.
            </p>
          </div>
          <div className="card-grid two-up">
            {[
              'Replace full-panel renovation with tile-level updates',
              'Reduce disposal from trend-driven interior refresh cycles',
              'Create a closed-loop path for returned materials',
              'Support design flexibility without sacrificing environmental intent',
            ].map((text) => (
              <article key={text} className="dark-card">
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

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

      <section id="contact" className="section contact-section">
        <div className="container">
          <div className="contact-panel">
            <div className="section-label section-label-light">Get in touch</div>
            <h2>Bring a lower-waste wall system into your next space.</h2>
            <p>
              Whether you are designing a retail installation, a commercial environment, or a home refresh, C-LOCK is built to make walls more adaptable and more responsible.
            </p>
            <div className="button-row">
              <a href="mailto:hello@clocktiles.com" className="button button-primary">
                Email the team
              </a>
              <a href="#top" className="button button-secondary button-secondary-dark">
                Back to top
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
