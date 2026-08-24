import { useEffect } from "react"

export default function Meta({ title, description }: { title: string; description: string }) {
  useEffect(() => {
    document.title = title
    const meta = document.querySelector('meta[name="description"]') ?? document.createElement("meta")
    meta.setAttribute("name", "description")
    meta.setAttribute("content", description)
    document.head.appendChild(meta)
    const canonical = document.querySelector('link[rel="canonical"]') ?? document.createElement("link")
    canonical.setAttribute("rel", "canonical")
    canonical.setAttribute("href", window.location.href.split("?")[0])
    document.head.appendChild(canonical)
    const tags = [["property", "og:title", title], ["property", "og:description", description], ["property", "og:type", "website"], ["property", "og:url", window.location.href.split("?")[0]], ["name", "twitter:card", "summary"]]
    for (const [attribute, name, content] of tags) {
      const tag = document.querySelector(`meta[${attribute}="${name}"]`) ?? document.createElement("meta")
      tag.setAttribute(attribute, name)
      tag.setAttribute("content", content)
      document.head.appendChild(tag)
    }
  }, [title, description])
  return null
}
