import Navbar from "../components/navbar";
import Hero from "../components/hero";
import WhyTierra from "../components/whytierra";
import UseCases from "../components/usecases";
import WaitlistSection from '../components/waitlistsection';


const benefits = [
  {
    title: 'Carbon-integrated material',
    text: 'Designed to store carbon within the material itself instead of relying on carbon-intensive inputs.',
  },
  {
    title: 'Modular by design',
    text: 'Snap-fit tiles allow updates at the tile level instead of replacing entire wall systems.',
  },
  {
    title: 'Circular lifecycle',
    text: 'Tiles can be removed, replaced, and reused, reducing waste from repeated renovation cycles.',
  },
  {
    title: 'Designed for real spaces',
    text: 'Built to meet durability, moisture resistance, and safety expectations while maintaining flexibility.',
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
    q: 'What is Tierra?',
    a: 'Tierra is a modular wall tile system designed to replace traditional plastic and wood wall panels with a more flexible, low-waste alternative.',
  },
  {
    q: 'Do I need tools or professional installers?',
    a: 'The system is designed around a simple snap-fit setup, making installation faster and more approachable than traditional wall panel systems.',
  },
  {
    q: 'Why is this better than standard wall panels?',
    a: 'Traditional renovations often create waste because entire panels get replaced. Tierra lets users update only the pieces they need while also aiming for stronger environmental performance.',
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

      <section className="home-image-banner">
        <img
          src="/tierra-hero-banner.webp"
          alt="Tierra modular wall tiles in an interior setting"
        />
      </section>

      <Hero />

      <section className="home-image-banner">
        <img
          src="/tierra-transition.webp"
          alt="Tierra modular wall tiles in another interior setting"
        />
      </section>

      <WhyTierra benefits={benefits} />

      <UseCases audience={audience} />

      <WaitlistSection />
    </main>
  );
}
