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
    for (const [property, content] of [["og:title", title], ["og:description", description], ["og:type", "website"], ["twitter:card", "summary"]]) {
      const tag = document.querySelector(`meta[property="${property}"]`) ?? document.createElement("meta")
      tag.setAttribute("property", property)
      tag.setAttribute("content", content)
      document.head.appendChild(tag)
    }
  }, [title, description])
  return null
}
