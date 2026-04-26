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
          <div className="eyebrow-pill">Carbon-integrated building materials</div>
          <h1>We turn carbon into walls.</h1>
          <p className="hero-copy">
            Tierra is a modular wall tile system that helps homes, offices, and retail spaces upgrade interiors without the waste, rigidity, and carbon burden of traditional wall panels.
          </p>

          <div className="hero-cards">
            <article className="mini-card">
              <strong>Problem</strong>
              <p>
                Most wall materials release carbon and create waste.
              </p>
            </article>
            <article className="mini-card">
              <strong>What we do</strong>
              <p>
                We turn carbon into modular wall tiles.
              </p>
            </article>
            <article className="mini-card">
              <strong>Why it matters</strong>
              <p>
                Your walls store carbon instead of emitting it.
              </p>
            </article>
          </div>

          <div className="button-row">
            <a href="#why-clock" className="button button-primary">
              Explore the system
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