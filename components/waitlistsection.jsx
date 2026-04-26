'use client';

import { useEffect, useState } from 'react';

export default function WaitlistSection() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [celebrate, setCelebrate] = useState(false);

  useEffect(() => {
    async function fetchCount() {
      const res = await fetch('/api/waitlist');
      const data = await res.json();
      setCount(data.count ?? 0);
    }

    fetchCount();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setStatus('');

    const res = await fetch('/api/waitlist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email }),
    });

    const data = await res.json();

    if (!res.ok) {
      setStatus(data.error || 'Something went wrong.');
      setLoading(false);
      return;
    }

    setStatus('You\'re on the Tierra waitlist.');
    setCelebrate(true);
    setTimeout(() => setCelebrate(false), 2500);
    setCount(data.count ?? count);
    setName('');
    setEmail('');
    setLoading(false);
  }

  return (
    
    <section id="contact" className="contact-section">
        {celebrate && (
        <div className="celebration-overlay">
            <div className="celebration-card">
            <div className="celebration-burst">🎉</div>
            <h3>You're on the Tierra waitlist</h3>
            <p>We'll keep you posted on early access and ordering updates.</p>
            </div>
        </div>
        )}
      <div className="container">
        <div className="contact-panel waitlist-panel">
          <span className="section-label section-label-light">
            GET EARLY ACCESS
          </span>

          <h2>Be among the first to bring carbon-storing walls into your space.</h2>

          <p>
            Join the waitlist for early access, product updates, and priority
            ordering when Tierra becomes available.
          </p>

          <form className="waitlist-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />

            <button className="button button-primary" type="submit">
              {loading ? 'Joining...' : 'Order Early Access'}
            </button>
          </form>

          <div className="waitlist-meta">
            <span className="waitlist-count">
                {count} people have joined the waitlist.
            </span>

            {status && (
                <span className={status.includes('already') ? 'waitlist-error' : 'waitlist-status'}>
                {status}
                </span>
            )}
            </div>

          <div className="button-row waitlist-secondary-actions">
            <a
              href="mailto:your@email.com"
              className="button button-secondary-dark"
            >
              Email the team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}