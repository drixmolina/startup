import { Link } from "react-router-dom"
import Meta from "../components/Meta"

const principles = [
  ["01", "Understand", "Map the actual problem before choosing technology."],
  ["02", "Build clearly", "Keep the first release focused, maintainable, and useful."],
  ["03", "Improve", "Leave room for better workflows, integrations, and automation."],
]

export default function About() {
  return (
    <>
      <Meta
        title="About | DM Digital Solutions"
        description="Learn how DM Digital Solutions builds practical digital tools around the way growing businesses actually work."
      />

      <div className="about-page">
        <section className="about-hero">
          <div className="container about-hero-inner">
            <p className="eyebrow">About DM Digital Solutions</p>
            <h1>Technology should<br />solve problems, not<br />create more of them.</h1>
            <p className="about-hero-lead">
              DM Digital Solutions builds practical digital tools for businesses moving beyond manual processes and disconnected experiences.
            </p>
          </div>
        </section>

        <section className="about-section about-who">
          <div className="container about-two-column">
            <div>
              <p className="eyebrow">Who we are</p>
              <h2>Digital solutions built around how businesses actually work.</h2>
            </div>
            <div className="about-copy">
              <p>
                DM Digital Solutions helps growing businesses improve the way they operate through websites, e-commerce platforms, booking systems, custom business software, automation, and practical AI.
              </p>
              <p>
                Our approach begins with understanding the real workflow, customer journey, and operational problems of the business before deciding what technology to build.
              </p>
              <p>We focus on solutions that are practical, maintainable, and useful in everyday operations.</p>
            </div>
          </div>
        </section>

        <section className="about-section about-mission-vision">
          <div className="container">
            <div className="about-section-heading">
              <p className="eyebrow">What guides the work</p>
              <h2>Useful by design. Purposeful in practice.</h2>
            </div>
            <div className="about-values-grid">
              <article className="about-value">
                <p className="eyebrow">Our mission</p>
                <h3>Make technology useful.</h3>
                <p>
                  Our mission is to build practical digital solutions that make business operations simpler, faster, and more reliable.
                </p>
                <p>
                  We aim to help businesses reduce manual work, improve customer experiences, organize information more effectively, and use technology with a clear purpose.
                </p>
              </article>
              <article className="about-value">
                <p className="eyebrow">Our vision</p>
                <h3>Help growing businesses move forward digitally.</h3>
                <p>
                  Our vision is for DM Digital Solutions to become a trusted technology partner for growing businesses that want accessible, scalable, and practical digital systems.
                </p>
                <p>We want technology to feel like an advantage to the business, not another problem to manage.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="about-section about-business-first">
          <div className="container about-two-column">
            <div>
              <p className="eyebrow">Business first</p>
              <h2>Start with the<br />way the work<br />happens.</h2>
            </div>
            <div>
              <p className="about-copy about-business-intro">
                A good interface is only one part of a useful system. We look at customer journeys, internal handoffs, data, and the decisions a team makes every day.
              </p>
              <div className="about-principles">
                {principles.map(([number, title, text]) => (
                  <article key={number}>
                    <span>{number}</span>
                    <div>
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="about-section about-founder">
          <div className="container about-founder-grid">
            <div className="about-founder-visual">
              <img src="/images/drix-hero-mobile.jpeg" alt="Drix Molina, founder of DM Digital Solutions" />
            </div>
            <div className="about-founder-content">
              <p className="eyebrow">Founder</p>
              <h2>Drix Molina</h2>
              <p className="about-founder-role">Founder &amp; Full-Stack Developer</p>
              <p>
                Drix Molina is the founder of DM Digital Solutions and an Information Technology graduate specializing in Web and Mobile Application development.
              </p>
              <p>
                His experience includes building full-stack web applications, business management systems, e-commerce platforms, automation workflows, and custom digital solutions for real business needs.
              </p>
              <p>
                His projects include FacilitEASE, a property and facilities management system, client e-commerce work, and business applications designed around operational workflows.
              </p>
              <p>
                His approach to development is simple: understand the problem first, then build technology that makes the process easier.
              </p>
              <div className="about-portfolio">
                <div>
                  <p className="eyebrow">Selected work</p>
                  <h3>See the work behind the founder.</h3>
                  <p>Explore Drix Molina&apos;s development projects, technical experience, and selected work.</p>
                </div>
                <div className="about-actions">
                  <a className="button" href="https://webfolio-dm.vercel.app/" target="_blank" rel="noopener noreferrer">View portfolio</a>
                  <Link className="button button-secondary" to="/contact">Start a project</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
