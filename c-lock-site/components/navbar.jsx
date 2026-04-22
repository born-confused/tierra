const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Materials', href: '/materials' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Meet the Creators', href: '/meet-the-team' },
  { label: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  return (
    <>
      {
        <header className="site-header">
        <div className="container nav-wrap">
            <a href="/" className="brand">
                <div className="brand-mark">C+</div>
                <div>
                <div className="brand-title">C-LOCK</div>
                <div className="brand-subtitle">The wall is your canvas</div>
                </div>
            </a>

            <nav className="nav-links">
                {navItems.map((item) => (
                <a key={item.href} href={item.href}>
                    {item.label}
                </a>
                ))}
            </nav>
            </div>
        </header>
      }
    </>
  );
}