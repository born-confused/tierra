const navItems = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Why C-LOCK', href: '#why-clock' },
  { label: 'Use Cases', href: '#use-cases' },
  { label: 'Sustainability', href: '#sustainability' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  return (
    <>
      {
        <header className="site-header">
        <div className="container nav-wrap">
            <a href="#top" className="brand">
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