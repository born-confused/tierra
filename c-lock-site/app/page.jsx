import Navbar from "../components/navbar";
import Hero from "../components/hero";
import HowItWorks from "../components/howitworks";
import WhyClock from "../components/whyclock";
import UseCases from "../components/usecases";
import FaqPreview from "../components/faqpreview";


const benefits = [
  {
    title: 'Carbon-integrated material',
    text: 'Designed to store carbon within the material itself instead of relying on carbon-intensive inputs.',
  },
  {
    title: 'Modular by design',
    text: 'Snap-fit tiles allow updates at the tile level instead of replacing entire wall systems.',
  },
  {
    title: 'Circular lifecycle',
    text: 'Tiles can be removed, replaced, and reused, reducing waste from repeated renovation cycles.',
  },
  {
    title: 'Designed for real spaces',
    text: 'Built to meet durability, moisture resistance, and safety expectations while maintaining flexibility.',
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

      <section className="section section-white">
        <div className="container narrow-heading">
          <div className="section-label">The problem</div>
          <h2>Interior materials were never designed for a carbon-constrained world.</h2>
          <p>
            Most wall systems today rely on fossil-based plastics or wood, create unnecessary waste during renovations, and introduce materials that are not designed with long-term environmental impact in mind.
          </p>
        </div>

        <div className="container card-grid three-up">
          <article className="content-card">
            <span className="step-label">01</span>
            <h3>Walls release carbon</h3>
            <p>
              Traditional materials are made from carbon-intensive sources and do not store carbon in any meaningful way.
            </p>
          </article>

          <article className="content-card">
            <span className="step-label">02</span>
            <h3>Renovations create waste</h3>
            <p>
              Entire panels are removed and discarded even when only small updates are needed.
            </p>
          </article>

          <article className="content-card">
            <span className="step-label">03</span>
            <h3>Materials are not clean</h3>
            <p>
              Many systems rely on materials that introduce toxicity concerns and are not built for circular reuse.
            </p>
          </article>
        </div>
      </section>

      <HowItWorks />

      <WhyClock benefits={benefits} />

      <UseCases audience={audience} />

      <section id="sustainability" className="section section-dark">
        <div className="container split-grid">
          <div>
            <div className="section-label section-label-light">Sustainability</div>
            <h2>Sustainability is not an extra claim. It is the product architecture.</h2>
            <p>
              C-LOCK is designed to reduce waste from traditional renovation while introducing a material approach that stores carbon within the product itself. Each tile is engineered using bio-based polymer systems that integrate carbon into the structure of the material.
            </p>
          </div>
          <div className="card-grid two-up">
            {[
              'Each tile stores approximately 1.2 kg of CO₂-equivalent carbon',
              '15–20 tiles installed is roughly equivalent to the annual carbon absorption of one tree',
              'Replace full-panel renovation with tile-level updates',
              'Support circular reuse instead of disposal-driven cycles',
            ].map((text) => (
              <article key={text} className="dark-card">
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FaqPreview faqs={faqs} />

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
