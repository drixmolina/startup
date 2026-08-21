import { Link } from "react-router-dom"
import Meta from "../components/Meta"
import { serviceEntries } from "../data/content"

export default function Services() {
  return <><Meta title="Services | DM Digital Solutions" description="Explore websites, e-commerce, booking systems, custom software, automation, and AI solutions." /><section className="page-intro"><div className="container narrow"><p className="eyebrow">Services</p><h1>Digital systems with a job to do.</h1><p className="lead">Choose the right starting point for your business, then shape it around the way your team and customers actually work.</p></div></section><section className="section"><div className="container"><div className="solution-detail-grid">{serviceEntries.map((service, index) => <article className="detail-card" key={service.slug}><div className="detail-top"><span>0{index + 1}</span><p className="eyebrow">{service.level}</p></div><h2>{service.title}</h2><p>{service.summary}</p><h3>What it can include</h3><ul>{service.features.map((feature) => <li key={feature}>{feature}</li>)}</ul><Link className="text-link" to={`/services/${service.slug}`}>View service details →</Link></article>)}</div></div></section></>
}
