import { useState } from "react"
import { Link } from "react-router-dom"
import Meta from "../components/Meta"
import { projectEntries, serviceEntries } from "../data/content"

const proofMetrics = [
  { label: "High-converting websites", value: "01" },
  { label: "Booking flow design", value: "02" },
  { label: "Business systems", value: "03" },
  { label: "AI + automation", value: "04" },
]

const process = [
  ["01", "Understand", "Map the workflow, customer journey, and friction before choosing a solution."],
  ["02", "Design", "Define the right experience, conversion flow, and digital system structure."],
  ["03", "Build", "Ship the useful first version with clear, maintainable foundations."],
  ["04", "Improve", "Measure the result and keep refining what matters most."],
]

export default function HomeRestored() {
  const [selectedService, setSelectedService] = useState(serviceEntries[0])
  const [selectedProject, setSelectedProject] = useState(projectEntries[0])

  return (
    <>
      <Meta
        title="DM Digital | Digital systems for growing businesses"
        description="Premium websites, e-commerce, booking systems, dashboards, and AI workflows built around the way your business works."
      />

      <section className="hero home-landing-hero">
        <div className="container home-landing-grid">
          <div className="home-landing-copy">
            <p className="eyebrow">DIGITAL SOLUTIONS FOR GROWING BUSINESSES</p>
            <h1>Build the right<br />digital solutions.</h1>
            <p className="hero-copy">Websites, systems, automation, and practical AI for growing businesses.</p>

            <div className="hero-actions">
              <Link className="button" to="/contact">Get Started <span aria-hidden="true">→</span></Link>
            </div>
          </div>

          <div className="hero-visual" aria-label="DM Digital portrait">
            <div className="hero-photo" />
            <div className="hero-floating hero-floating-top">
              <span>PROJECT DELIVERY =<br />ON TRACK</span>
            </div>
            <div className="hero-floating hero-floating-mid">
              <span>RECENT CLIENT<br />WINS</span>
            </div>
            <div className="hero-floating hero-floating-bottom">
              <span>BUSINESS<br />EFFICIENCY = HIGH</span>
            </div>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="container band-grid">
          <strong>Built for modern growth</strong>
          {proofMetrics.map((metric) => (
            <span key={metric.label}>{metric.label}</span>
          ))}
          <strong>For growing businesses</strong>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-title section-title-split">
            <div>
              <p className="eyebrow">What we build</p>
              <h2>Designed to move business forward.</h2>
            </div>
            <p className="lead">
              A focused digital system helps customers act faster, teams work cleaner, and the business looks more polished online.
            </p>
          </div>

          <div className="solution-picker">
            <div className="solution-tabs" aria-label="Solution categories">
              {serviceEntries.slice(0, 4).map((service) => (
                <button
                  type="button"
                  key={service.slug}
                  className={selectedService.slug === service.slug ? "is-active" : ""}
                  onClick={() => setSelectedService(service)}
                >
                  {service.title}
                </button>
              ))}
            </div>

            <article className="solution-focus">
              <div className="solution-focus-header">
                <p className="eyebrow">{selectedService.level}</p>
                <h3>{selectedService.title}</h3>
              </div>

              <p>{selectedService.summary}</p>

              <div className="tag-row">
                {selectedService.features.slice(0, 4).map((feature) => (
                  <span key={feature}>{feature}</span>
                ))}
              </div>

              <div className="solution-focus-meta">
                <div>
                  <span>Ideal for</span>
                  <strong>{selectedService.level}</strong>
                </div>
                <div>
                  <span>Outcome</span>
                  <strong>Sharper customer journey</strong>
                </div>
              </div>

              <Link className="button" to={`/services/${selectedService.slug}`}>
                Explore solution
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <p className="eyebrow">Selected work</p>
            <h2>High-trust digital systems, not generic templates.</h2>
            <p className="lead">
              These examples show how DM Digital translates operations, customer journeys, and service delivery into a clearer experience.
            </p>
          </div>

          <div className="case-layout">
            <div className="case-list">
              {projectEntries.map((project) => (
                <button
                  type="button"
                  key={project.slug}
                  className={selectedProject.slug === project.slug ? "case-option is-active" : "case-option"}
                  onClick={() => setSelectedProject(project)}
                >
                  <span>{project.category}</span>
                  <strong>{project.title}</strong>
                </button>
              ))}
            </div>

            <article className="case-detail">
              <p className="eyebrow">{selectedProject.category}</p>
              <h3>{selectedProject.title}</h3>
              <p>{selectedProject.summary}</p>

              <div className="tag-row">
                {selectedProject.features.map((feature) => (
                  <span key={feature}>{feature}</span>
                ))}
              </div>

              <div className="case-meta">
                <div>
                  <span>Status</span>
                  <strong>{selectedProject.status}</strong>
                </div>
                <div>
                  <span>Focus</span>
                  <strong>Operational clarity</strong>
                </div>
              </div>

              <Link className="button button-secondary" to={`/projects/${selectedProject.slug}`}>
                See project
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container home-principles">
          <div className="section-title">
            <p className="eyebrow">How we work</p>
            <h2>Minimal on the surface. Thoughtful underneath.</h2>
            <p className="lead">
              A practical way to move from a business problem to a useful digital system that actually gets used.
            </p>
          </div>

          <div className="principles">
            {process.map(([number, title, copy]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band home-final-cta">
        <div className="container">
          <p className="eyebrow">Ready when you are</p>
          <h2>Have a business process you would like to improve?</h2>
          <p>
            Tell us what you are trying to improve, and we will help identify the right digital solution for your next move.
          </p>

          <div className="hero-actions">
            <Link className="button button-light" to="/contact">Start a project</Link>
            <Link className="button button-ghost" to="/demos">Explore demos</Link>
          </div>
        </div>
      </section>
    </>
  )
}
