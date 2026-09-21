import { useState } from "react"
import { Link } from "react-router-dom"
import Meta from "../components/Meta"
import { projectEntries, serviceEntries } from "../data/content"

const proofMetrics = [
  { label: "Discovery-first strategy", value: "Strategy" },
  { label: "Conversion-focused UX", value: "UX" },
  { label: "Operational clarity", value: "Systems" },
  { label: "AI + automation", value: "Automation" },
]

const process = [
  ["01", "Understand", "Map the workflow, customer journey, and friction before choosing a solution."],
  ["02", "Design", "Define the right experience, conversion flow, and digital system structure."],
  ["03", "Build", "Ship the useful first version with clear, maintainable foundations."],
  ["04", "Improve", "Measure the result and keep refining what matters most."],
]

const testimonials = [
  {
    quote: "The new booking flow made our front desk far calmer. Patients can self-serve without our team chasing messages all day.",
    name: "Clinic Operations Lead",
    context: "Dental practice",
  },
  {
    quote: "The system feels like it was designed around how we actually work. It reduced repetitive admin and gave us clearer visibility.",
    name: "Business Owner",
    context: "Service business",
  },
  {
    quote: "It finally looked premium and performed like a real business tool, not a patched-together website.",
    name: "Founder",
    context: "Growing retail brand",
  },
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
            <h1>Turn friction into<br />a stronger business.</h1>
            <p className="hero-copy">Premium websites, operational systems, and practical AI workflows designed to help service businesses convert faster and run smoother.</p>

            <div className="hero-actions">
              <Link className="button" to="/contact">Book a discovery call <span aria-hidden="true">→</span></Link>
              <Link className="button button-secondary" to="/projects">View case studies</Link>
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-label="DM Digital portrait">
          <div className="hero-photo" />
          <div className="hero-portrait-overlay" aria-hidden="true" />
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
              <p className="eyebrow">Why businesses choose us</p>
              <h2>More than a website. A clearer growth system.</h2>
            </div>
            <p className="lead">
              The right digital platform should help you win trust, reduce manual work, and give customers a smoother path to buying or booking.
            </p>
          </div>

          <div className="principles">
            {[
              ["01", "Built around the business", "We map the real workflow before recommending a system, so the final product fits how the business actually operates."],
              ["02", "Designed to convert", "Every page, call-to-action, and user flow is aimed at making the next step easier and more confident for customers."],
              ["03", "Built to scale", "The tech foundation is clean, maintainable, and ready for future improvements without starting over."],
            ].map(([number, title, copy]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
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

      <section className="section">
        <div className="container">
          <div className="section-title">
            <p className="eyebrow">Client feedback</p>
            <h2>Proof that the experience translates into calmer operations.</h2>
          </div>

          <div className="case-layout">
            {testimonials.map((testimonial) => (
              <article key={testimonial.name} className="case-detail">
                <p className="eyebrow">{testimonial.context}</p>
                <h3>“{testimonial.quote}”</h3>
                <div className="case-meta">
                  <div>
                    <span>Client</span>
                    <strong>{testimonial.name}</strong>
                  </div>
                </div>
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
            <Link className="button button-ghost" to="/services">Explore services</Link>
          </div>
        </div>
      </section>
    </>
  )
}
