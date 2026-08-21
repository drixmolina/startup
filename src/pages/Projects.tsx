import { Link } from "react-router-dom"
import Meta from "../components/Meta"
import { projectEntries } from "../data/content"

export default function Projects() {
  return <><Meta title="Projects | DM Digital Solutions" description="Explore selected workflow, commerce, and operations system concepts from DM Digital Solutions." /><section className="page-intro"><div className="container narrow"><p className="eyebrow">Selected work</p><h1>Systems that make complex work easier to see.</h1><p className="lead">Explore examples of how customer journeys, operations, inventory, and follow-through can become clearer digital experiences.</p></div></section><section className="section"><div className="container"><div className="solution-detail-grid">{projectEntries.map((project, index) => <article className="detail-card" key={project.slug}><div className="detail-top"><span>0{index + 1}</span><p className="eyebrow">{project.category}</p></div><h2>{project.title}</h2><p>{project.summary}</p><div className="tag-row">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div><p className="form-note">{project.status}</p><Link className="text-link" to={`/projects/${project.slug}`}>View case study →</Link></article>)}</div></div></section></>
}
