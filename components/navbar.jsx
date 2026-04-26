const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Materials', href: '/materials' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Meet the Creators', href: '/meet-the-team' }
];

export default function Navbar() {
  return (
    <>
      {
        <header className="site-header">
          <div className="container nav-wrap">
            <a href="/" className="brand">
              <img src="/tierra_logo-removebg-preview.png" alt="Tierra logo" className="brand-logo" />
              <div>
                <div className="brand-title">TIERRA</div>
                <div className="brand-subtitle">Rethinking Surfaces. Rebuilding Materials.</div>
              </div>
            </a>

            <div className="nav-right">
              <nav className="nav-links">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href}>
                    {item.label}
                  </a>
                ))}
              </nav>

              <a href="#contact" className="nav-cta">
                Order Now
              </a>
            </div>
          </div>
        </header>
      }
    </>
  );
}