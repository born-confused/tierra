function TileWall() {

  return (
    <div className="tile-shell">
      <div className="tile-image-frame">
        <img
          src="/tierra-installation.webp"
          alt="Tierra modular wall tiles being installed"
        />
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
          <h1>The wall is your "Canvas"</h1>
          <p className="hero-copy">
            Tierra is a modular wall tile system that helps homes, offices, and retail spaces upgrade interiors without the waste, rigidity, and carbon burden of traditional wall panels.
          </p>

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