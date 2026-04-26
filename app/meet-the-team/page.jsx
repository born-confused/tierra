import Navbar from "../../components/navbar";

const team = [
  {
    name: "Gopal Singhania",
    role: "CEO",
    descriptor: "Vision, manufacturing, and operations",
    image: "/team/gopal.webp",
    linkedin: "https://www.linkedin.com/in/gopalsinghania175",
    bio: "Gopal is the driving force behind the original idea for Tierra. With deep experience in plant operations, manufacturing systems, and process discipline, he brings the operational and industrial perspective needed to shape Tierra into a scalable real-world product.",
  },
  {
    name: "Sumit Sudan",
    role: "Product",
    descriptor: "Product thinking and technical execution",
    image: "/team/sumit.webp",
    linkedin: "https://www.linkedin.com/in/sumit-sudan",
    bio: "Sumit leads the product lens of Tierra. With experience across software engineering, product ownership, and user experience improvement, he helps translate the idea into a product system that is usable, structured, and grounded in real customer needs.",
  },
  {
    name: "Dishita Thaker",
    role: "Marketing",
    descriptor: "Brand, positioning, and go-to-market",
    image: "/team/dishita.webp",
    linkedin: "https://www.linkedin.com/in/dishita-thaker",
    bio: "Dishita shapes how Tierra is positioned and communicated. Her background in product marketing, consumer insights, and strategic storytelling helps turn a strong material concept into a brand and market narrative that people can understand and remember.",
  },
  {
    name: "Bhavya Bommireddy",
    role: "Operations",
    descriptor: "Execution, systems, and business operations",
    image: "/team/bhavya.webp",
    linkedin: "https://www.linkedin.com/in/bhavyabommireddy",
    bio: "Bhavya brings the operational backbone to Tierra. With experience spanning entrepreneurship, supply chain, and customer-centered business execution, she helps connect the product vision to scalable operational thinking and practical delivery.",
  },
  {
    name: "Aditya Nand",
    role: "Strategy",
    descriptor: "Product strategy, systems thinking, and AI",
    image: "/team/aditya.webp",
    linkedin: "https://www.linkedin.com/in/aditya-nand3",
    bio: "Aditya leads strategic framing for Tierra. With experience across product management, AI-enabled systems, and technical problem solving, he helps shape the broader direction of the product, the story behind it, and the long-term opportunity it can create.",
  },
];

export default function MeetTheCreatorsPage() {
  return (
    <main>
      <Navbar />

      <section className="section creators-hero-section">
        <div className="container creators-hero-single">
          <div className="section-label">Meet the Creators</div>
          <h1>The people behind Tierra.</h1>
          <p className="hero-copy">
            Tierra is being shaped by a team that brings together product thinking, operations, marketing, manufacturing, and strategy. What connects us is a shared belief that better materials can create better systems for the built environment.
          </p>
        </div>
      </section>

      <section className="section creators-grid-section">
        <div className="container creators-grid-single">
          {team.map((member) => (
            <article key={member.name} className="creator-card">
              <div className="creator-image-wrap square">
                <img src={member.image} alt={member.name} className="creator-image" />
              </div>

              <div className="creator-content">
                <div className="creator-role">{member.role}</div>
                <h2>{member.name}</h2>
                <div className="creator-descriptor">{member.descriptor}</div>
                <p>{member.bio}</p>

                <div className="creator-actions">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="button button-primary"
                  >
                    View LinkedIn
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section creators-closing-section">
        <div className="container">
          <div className="contact-panel creators-closing-panel">
            <div className="section-label section-label-light">Connect</div>
            <h2>Interested in the mission, the product, or the team?</h2>
            <p>
              Reach out and connect directly with the people building Tierra.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}