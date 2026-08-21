import { Link, useParams } from "react-router-dom"
import Meta from "../components/Meta"
import { serviceEntries } from "../data/content"

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = serviceEntries.find((entry) => entry.slug === slug)
  if (!service) return <NotFound />
  return <><Meta title={`${service.title} | DM Digital Solutions`} description={service.summary} /><section className="page-intro"><div className="container narrow"><p className="eyebrow">{service.level}</p><h1>{service.title}</h1><p className="lead">{service.summary}</p><Link className="button" to={`/contact?project=${encodeURIComponent(service.title)}`}>Discuss this service</Link></div></section><section className="section"><div className="container detail-page-grid"><div><div className="section-title"><p className="eyebrow">Capabilities</p><h2>A useful foundation for the next stage.</h2></div><ul className="feature-list">{service.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></div><div className="principles"><article><span>01</span><h3>Understand</h3><p>{service.benefits[0]}</p></article><article><span>02</span><h3>Build</h3><p>{service.benefits[1]}</p></article><article><span>03</span><h3>Improve</h3><p>{service.benefits[2]}</p></article></div></div></section><section className="section section-muted"><div className="container narrow"><div className="section-title"><p className="eyebrow">A practical process</p><h2>From first conversation to useful release.</h2></div><div className="process-home-grid">{service.process.map((step, index) => <article key={step}><span>0{index + 1}</span><h3>{step}</h3><p>Keep the scope clear, test the workflow, and leave room for the next improvement.</p></article>)}</div><Link className="button" to="/projects">See related work</Link></div></section></>
}

function NotFound() { return <section className="page-intro"><div className="container narrow"><p className="eyebrow">Service</p><h1>That service is not available.</h1><p className="lead">Return to the services overview to choose another starting point.</p><Link className="button" to="/services">View services</Link></div></section> }
