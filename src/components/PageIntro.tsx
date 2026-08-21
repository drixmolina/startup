import { Link } from "react-router-dom"

export default function PageIntro({ eyebrow, title, description, action = "Start a project" }: { eyebrow: string; title: string; description: string; action?: string }) {
  return <section className="page-intro"><div className="container narrow"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="lead">{description}</p><Link className="button" to="/contact">{action}</Link></div></section>
}

export function SectionTitle({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return <div className="section-title"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{description && <p className="lead">{description}</p>}</div>
}
