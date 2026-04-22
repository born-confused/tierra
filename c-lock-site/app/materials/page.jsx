import Navbar from "../../components/navbar";

const processSteps = [
  {
    title: "Carbon input",
    text: "Plant-based carbon is used today, with industrial CO₂ feedstocks part of the long-term direction.",
  },
  {
    title: "Biological conversion",
    text: "Microorganisms convert carbon inputs into PHBV through fermentation-based processes.",
  },
  {
    title: "Extraction",
    text: "The polymer is separated and prepared for product use.",
  },
  {
    title: "Composite engineering",
    text: "The material is combined with performance-enhancing components for interior applications.",
  },
];

const compositionItems = [
  {
    title: "Bio-polymer base",
    text: "PHBV forms the core material structure.",
    position: "top-left",
  },
  {
    title: "Mineral fillers",
    text: "Improve strength and dimensional stability.",
    position: "top-right",
  },
  {
    title: "Flexible components",
    text: "Increase toughness and reduce cracking risk.",
    position: "bottom-left",
  },
  {
    title: "Protective layers",
    text: "Support moisture resistance and surface durability.",
    position: "bottom-right",
  },
];

const comparisonRows = [
  ["Carbon source", "Captured / bio", "Fossil", "Wood"],
  ["Carbon storage", "Yes", "No", "Limited"],
  ["Toxicity", "Low", "High", "Medium"],
  ["Modularity", "High", "Medium", "Low"],
  ["Sustainability", "High", "Low", "Medium"],
];

const roadmap = [
  {
    phase: "Phase 1",
    title: "Commercial launch foundation",
    text: "Use commercially available PHBV and launch as a premium sustainable interior system.",
  },
  {
    phase: "Phase 2",
    title: "CO₂-derived feedstock integration",
    text: "Introduce stronger carbon differentiation through more direct carbon-based inputs.",
  },
  {
    phase: "Phase 3",
    title: "Full carbon-to-material pipeline",
    text: "Develop a broader system where CO₂ becomes part of a scalable building-material supply chain.",
  },
];

export default function MaterialsPage() {
  return (
    <main>
      <Navbar />

      <section className="section materials-hero-section">
        <div className="container materials-hero">
          <div className="materials-hero-copy">
            <div className="section-label">Materials</div>
            <h1>From carbon to material.</h1>
            <p className="hero-copy">
              C-LOCK is built around a material system that stores carbon within the product itself. Instead of relying on fossil-heavy panels, it uses bio-based polymer chemistry and engineered additives to create a modular wall tile designed for interiors.
            </p>
            <div className="materials-hero-tags">
              <span>Bio-based polymer</span>
              <span>Engineered composite</span>
              <span>Carbon-integrated wall system</span>
            </div>
          </div>

          <div className="materials-hero-panel">
            <div className="materials-panel-shell">
              <div className="materials-panel-grid">
                <div className="materials-panel-tile tile-wave" />
                <div className="materials-panel-tile tile-sand" />
                <div className="materials-panel-tile tile-pearl" />
                <div className="materials-panel-tile tile-sage" />
              </div>

              <div className="materials-panel-note">
                <strong>C-LOCK Tile</strong>
                <p>
                  A lightweight, modular decorative wall tile engineered to store carbon while meeting real interior performance needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section materials-flow-section">
        <div className="container">
          <div className="materials-flow-intro">
            <div className="section-label">System flow</div>
            <h2>Carbon becomes part of the wall through a four-step material journey.</h2>
          </div>

          <div className="materials-flow-strip">
            {processSteps.map((step, index) => (
              <article key={step.title} className="materials-flow-step">
                <div className="materials-flow-index">0{index + 1}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container composition-layout">
          <div className="composition-intro">
            <div className="section-label">Composition</div>
            <h2>Not raw polymer. A complete material system.</h2>
            <p>
              C-LOCK tiles are engineered as composites. That means the final tile is built from multiple components working together to deliver structure, durability, flexibility, and surface protection.
            </p>
          </div>

          <div className="composition-board">
            <div className="composition-center">
              <div className="composition-center-surface">
                <div className="composition-center-label">C-LOCK Tile</div>
              </div>
            </div>

            {compositionItems.map((item) => (
              <article
                key={item.title}
                className={`composition-callout composition-${item.position}`}
              >
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section materials-table-section">
        <div className="container">
          <div className="materials-table-intro">
            <div className="section-label">Comparison</div>
            <h2>How C-LOCK differs from conventional wall materials.</h2>
            <p>
              The material story is not only about appearance. It changes where the material comes from, how it behaves with carbon, and what happens over its lifecycle.
            </p>
          </div>

          <div className="comparison-table-wrap">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>C-LOCK</th>
                  <th>PVC Panels</th>
                  <th>MDF</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row[0]}>
                    <th>{row[0]}</th>
                    <td>{row[1]}</td>
                    <td>{row[2]}</td>
                    <td>{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section section-dark materials-impact-section">
        <div className="container sustainability-proof">
          <div className="sustainability-intro">
            <div className="section-label section-label-light">Carbon impact</div>
            <h2>The material carries measurable carbon value.</h2>
            <p>Built so the wall itself becomes part of the carbon story.</p>
          </div>

          <div className="proof-stats">
            <div className="proof-stat">
              <div className="proof-number">1.2 kg</div>
              <p>CO₂-equivalent carbon stored per tile</p>
            </div>

            <div className="proof-stat">
              <div className="proof-number">15–20 tiles</div>
              <p>roughly equivalent to one tree, in wall form</p>
            </div>

            <div className="proof-stat">
              <div className="proof-number">~60%</div>
              <p>assumed PHBV content in the current carbon estimate</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container roadmap-intro">
          <div className="section-label">Roadmap</div>
          <h2>Building toward a full carbon-to-material pipeline.</h2>
        </div>

        <div className="container roadmap-strip">
          {roadmap.map((item) => (
            <article key={item.phase} className="roadmap-phase">
              <div className="roadmap-phase-label">{item.phase}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}