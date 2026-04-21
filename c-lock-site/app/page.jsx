import Navbar from "../components/navbar";
import Hero from "../components/hero";
import HowItWorks from "../components/howitworks";
import WhyClock from "../components/whyclock";


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

      <HowItWorks />

      <WhyClock benefits={benefits} />

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
