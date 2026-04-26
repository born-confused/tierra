import Navbar from "../../components/navbar";

const faqGroups = [
  {
    id: "basics",
    label: "Basics",
    title: "What Tierra is",
    items: [
      {
        q: 'What is Tierra?',
        a: 'Tierra is a modular wall tile system designed to replace traditional plastic and wood wall panels with a more flexible, low-waste alternative.',
      },
      {
        q: "How is it different from standard wall panels?",
        a: "Most conventional wall systems are made from fossil-based plastics or wood products and are often replaced in full during renovations. Tierra is designed around modular replacement, lower-toxicity material choices, and carbon storage within the product.",
      },
      {
        q: "Where can Tierra be used?",
        a: "It is positioned for interior use cases such as commercial spaces, retail environments, offices, and residential wall applications where modularity, appearance, and lower-waste updates matter.",
      },
    ],
  },
  {
    id: "materials",
    label: "Materials",
    title: "How the material works",
    items: [
      {
        q: "What is Tierra made from?",
        a: "At its core, Tierra uses a bio-based polymer system built around PHBV, combined with additional components that improve strength, toughness, fire performance, and surface durability.",
      },
      {
        q: "What is PHBV in simple terms?",
        a: "PHBV is a type of bio-based polymer produced through biological processes. In simple terms, it is a next-generation plastic designed to move away from conventional fossil-based material systems.",
      },
      {
        q: "Does it really store carbon?",
        a: "That is the core material idea. The polymer system contains carbon within the material itself, which means the finished tile is designed to lock carbon into the built environment rather than treat sustainability as an added surface claim.",
      },
      {
        q: "Why compare it to PVC or MDF?",
        a: "Because those are common reference points in interior materials. The comparison helps explain how Tierra differs in carbon source, toxicity profile, modularity, and lifecycle thinking.",
      },
    ],
  },
  {
    id: "performance",
    label: "Performance",
    title: "Durability and interior use",
    items: [
      {
        q: "Is Tierra durable enough for real interiors?",
        a: "It is being designed as an engineered composite tile rather than raw polymer alone. The full material system is intended to balance structure, toughness, and usability for interior applications.",
      },
      {
        q: "Is it moisture resistant?",
        a: "Yes, moisture resistance is part of the product design direction. The coated surface is intended to improve durability for indoor environments.",
      },
      {
        q: "What about fire performance?",
        a: "Fire performance is addressed through engineered additives within the composite system. The goal is not just sustainability, but a material that can meet real interior expectations.",
      },
      {
        q: "Can it be customized visually?",
        a: "Yes. The system is intended to support textured, colored, and design-friendly surfaces so it functions as a material and design product, not only an environmental concept.",
      },
    ],
  },
  {
    id: "lifecycle",
    label: "Lifecycle",
    title: "Reuse, waste, and carbon impact",
    items: [
      {
        q: "Why is modularity so important?",
        a: "Because many renovation cycles generate waste by replacing entire panels when only part of a wall needs to change. Tierra is designed so individual tiles can be removed, replaced, or rearranged instead.",
      },
      {
        q: "What happens at end of life?",
        a: "The product direction is based on circular design principles, meaning the system is intended to support removal, replacement, and reuse more naturally than conventional disposable wall panels.",
      },
      {
        q: "How much carbon does one tile store?",
        a: "The current simple estimate is roughly 1.2 kilograms of CO₂-equivalent carbon per tile, based on the assumed PHBV content and the carbon value carried by the polymer system.",
      },
      {
        q: "Why do you compare 15 to 20 tiles with one tree?",
        a: "It is a simple way to make the carbon number understandable. The idea is to translate material impact into something intuitive without losing the core message that carbon can be stored in infrastructure.",
      },
    ],
  },
  {
    id: "future",
    label: "Future",
    title: "Cost, scale, and roadmap",
    items: [
      {
        q: "Is Tierra commercially available today?",
        a: "It is still positioned in a prototype-stage direction, with the roadmap moving from currently available PHBV inputs toward deeper CO₂-derived feedstock integration over time.",
      },
      {
        q: "How should people think about cost today?",
        a: "At the prototype stage, the tile is expected to cost more than conventional low-cost options. The long-term strategy is to move toward stronger cost competitiveness as production scales.",
      },
      {
        q: "What is the long-term roadmap?",
        a: "The vision moves through three phases: first using commercially available PHBV, then integrating more CO₂-derived inputs, and eventually building toward a broader carbon-to-material supply chain.",
      },
      {
        q: "Why does the roadmap matter?",
        a: "Because Tierra is not only a product concept. It is also a systems concept. The roadmap shows how the material story can become stronger as feedstocks, process integration, and scale improve.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <main>
      <Navbar />

      <section className="section faq-hero-section">
        <div className="container faq-hero">
          <div className="faq-hero-copy">
            <div className="section-label">FAQ</div>
            <h1>Questions curious minds will ask.</h1>
          </div>
          
        </div>
      </section>

      <section className="section faq-nav-section">
        <div className="container faq-category-strip">
          {faqGroups.map((group) => (
            <a key={group.id} href={`#${group.id}`} className="faq-category-link">
              {group.label}
            </a>
          ))}
        </div>
      </section>

      <section className="section faq-groups-section">
        <div className="container faq-groups">
          {faqGroups.map((group) => (
            <section key={group.id} id={group.id} className="faq-group-block">
              <div className="faq-group-heading">
                <div className="section-label">{group.label}</div>
                <h2>{group.title}</h2>
              </div>

              <div className="faq-group-list">
                {group.items.map((item) => (
                  <details key={item.q} className="faq-page-item">
                    <summary>{item.q}</summary>
                    <p>{item.a}</p>
                  </details>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="section faq-closing-section">
        <div className="container">
          <div className="contact-panel faq-closing-panel">
            <div className="section-label section-label-light">Still curious?</div>
            <h2>Some questions are better answered in conversation.</h2>
            <p>
              If you want to discuss the material, the product direction, or the broader vision behind Tierra, reach out directly.
            </p>
            <div className="button-row">
              <a href="mailto:gsinghan@uci.edu" className="button button-primary">
                Email the team
              </a>
              <a href="/materials" className="button button-secondary button-secondary-dark">
                Explore materials
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}