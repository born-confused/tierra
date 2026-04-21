function TileWall() {
  const tiles = [
    'tile wave',
    'tile sand',
    'tile pebble',
    'tile ridge',
    'tile fog',
    'tile moss',
    'tile pearl',
    'tile stone',
    'tile cream',
    'tile clay',
    'tile frost',
    'tile sage',
    'tile dune',
    'tile mist',
    'tile olive',
    'tile chalk',
    'tile shell',
    'tile sea',
    'tile ivory',
    'tile drift',
  ];

  return (
    <div className="tile-shell">
      <div className="tile-grid">
        {tiles.map((className, index) => (
          <div key={index} className={className} />
        ))}
      </div>
      <div className="tile-note-row">
        <div className="tile-note">
          <strong>Instant refresh</strong>
          <p>Swap individual tiles instead of replacing an entire wall system.</p>
        </div>
        <div className="tile-note tile-note-green">
          <strong>Built for flexibility</strong>
          <p>Designed for spaces that evolve, from pop-ups to homes to branded interiors.</p>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-glow hero-glow-right" />
      <div className="hero-glow hero-glow-left" />
      <div className="container hero-grid">
        <div>
          <div className="eyebrow-pill">Modular walls for a lower-waste future</div>
          <h1>Beautiful walls should not come with renovation waste.</h1>
          <p className="hero-copy">
            C-LOCK is a modular wall tile system that helps homes, offices, and retail spaces upgrade interiors without the waste, rigidity, and carbon burden of traditional wall panels.
          </p>

          <div className="hero-cards">
            <article className="mini-card">
              <strong>Problem</strong>
              <p>
                Traditional wall renovations create unnecessary material waste and lock users into full replacements.
              </p>
            </article>
            <article className="mini-card">
              <strong>Solution</strong>
              <p>
                Snap-fit tiles that are easy to install, easy to swap, and built for repeated refreshes.
              </p>
            </article>
            <article className="mini-card">
              <strong>Edge</strong>
              <p>
                Design-forward surfaces with circular thinking and carbon-conscious materials at the core.
              </p>
            </article>
          </div>

          <div className="button-row">
            <a href="#why-clock" className="button button-primary">
              Explore the product
            </a>
            <a href="#contact" className="button button-secondary">
              Request a sample
            </a>
          </div>
        </div>

        <TileWall />
      </div>
    </section>
  );
}