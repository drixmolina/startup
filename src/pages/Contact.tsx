import { useState, type FormEvent } from "react"
import { useSearchParams } from "react-router-dom"
import Meta from "../components/Meta"
import { api, type ContactPayload } from "../lib/api"

const fields = [
  ["name", "Name", "text"],
  ["businessName", "Business name", "text"],
  ["email", "Email", "email"],
  ["phone", "Phone", "tel"],
  ["industry", "Industry", "text"],
  ["projectType", "Project type", "text"],
  ["budget", "Budget range", "text"],
  ["timeline", "Timeline", "text"],
] as const

export default function Contact() {
  const [params] = useSearchParams()
  const [form, setForm] = useState<ContactPayload>({
    projectType: params.get("project") ?? "",
    name: "",
    businessName: "",
    email: "",
    phone: "",
    industry: "",
    budget: "",
    timeline: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [error, setError] = useState("")

  function update(key: keyof ContactPayload, value: string) {
    setForm((current) => ({ ...current, [key]: value }))
    setStatus("idle")
    setError("")
  }

  function validate() {
    if (form.name.trim().length < 2) return "Please enter your name."
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) return "Please enter a valid email address."
    if (form.message.trim().length < 10) return "Please describe what you would like to improve."
    return ""
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (status === "loading") return
    const validationError = validate()
    if (validationError) {
      setStatus("error")
      setError(validationError)
      return
    }
    setStatus("loading")
    setError("")
    try {
      await api.submitContact({ ...form, name: form.name.trim(), email: form.email.trim(), message: form.message.trim() })
      setStatus("success")
    } catch (caught) {
      setStatus("error")
      setError(caught instanceof Error ? caught.message : "The inquiry could not be sent. Please try again.")
    }
  }

  return <><Meta title="Start a Project | DM Digital Solutions" description="Tell DM Digital Solutions what you are trying to improve and start a conversation about the right digital solution." /><section className="page-intro"><div className="container narrow"><p className="eyebrow">Start a project</p><h1>Tell us what you are trying to improve.</h1><p className="lead">Share enough context for us to identify the right digital solution. No invented packages, no forced fit.</p></div></section><section className="section"><div className="container form-layout"><div><p className="eyebrow">Project intake</p><h2>A useful first conversation starts here.</h2><p>We can discuss a website, e-commerce flow, booking system, custom software, automation, or AI workflow.</p></div><form className="contact-form" onSubmit={submit} noValidate aria-describedby="form-status"><div className="form-fields">{fields.map(([key, label, type]) => <label key={key}>{label}{["name", "email"].includes(key) && <span aria-hidden="true"> *</span>}<input required={key === "name" || key === "email"} type={type} value={form[key] ?? ""} onChange={(event) => update(key, event.target.value)} /></label>)}</div><label className="full-field">Project description <span aria-hidden="true">*</span><textarea required value={form.message} onChange={(event) => update("message", event.target.value)} rows={6} /></label><button className="button" type="submit" disabled={status === "loading"}>{status === "loading" ? "Sending..." : "Send project inquiry"}</button>{status === "success" && <p id="form-status" className="form-success" role="status">Your project inquiry has been received.</p>}{status === "error" && <p id="form-status" className="form-error" role="alert">{error}</p>}{status === "idle" && <p id="form-status" className="form-note">Your message is sent to the server API. We will only show success after the server confirms receipt.</p>}</form></div></section></>
}
