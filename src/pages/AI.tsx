import { useState, type FormEvent } from "react"
import { Link, useSearchParams } from "react-router-dom"
import Meta from "../components/Meta"
import { agents } from "../data/site"
import { api, type ChatHistoryItem } from "../lib/api"

type UiMessage = { role: "user" | "assistant"; text: string }

export default function AI() {
  const [params] = useSearchParams()
  const initial = agents.find((agent) => agent.id === params.get("agent")) ?? agents[0]
  const [agent, setAgent] = useState(initial)
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState<UiMessage[]>([
    { role: "assistant", text: `I am the Demo ${initial.name}. What business workflow would you like to improve?` },
  ])
  const [loading, setLoading] = useState(false)

  async function send(event: FormEvent) {
    event.preventDefault()
    if (!message.trim() || loading) return
    const text = message.trim()
    setMessage("")
    const nextMessages: UiMessage[] = [...messages, { role: "user", text }]
    setMessages(nextMessages)
    setLoading(true)
    try {
      const history: ChatHistoryItem[] = nextMessages.slice(-12).map((item) => ({ role: item.role, content: item.text }))
      const data = await api.chat({ agentId: agent.id, message: text, history: history.slice(0, -1) })
      setMessages((current) => [...current, { role: "assistant", text: data.message }])
    } catch (error) {
      setMessages((current) => [...current, { role: "assistant", text: error instanceof Error ? error.message : "The AI service could not respond." }])
    } finally {
      setLoading(false)
    }
  }

  function chooseAgent(nextAgent: typeof agent) {
    setAgent(nextAgent)
    setMessages([{ role: "assistant", text: `I am the Demo ${nextAgent.name}. What business workflow would you like to improve?` }])
  }

  return <>
    <Meta title="AI Agents & Business Automation | DM Digital Solutions" description="Customizable AI agents for customer support, sales, booking, lead qualification, and internal business workflows." />
    <section className="page-intro"><div className="container narrow"><p className="eyebrow">AI and automation</p><h1>We build AI agents around your business workflow.</h1><p className="lead">Useful AI needs context, boundaries, and a job to do. We design agents for support, sales, booking, lead qualification, and internal knowledge.</p></div></section>
    <section className="section"><div className="container ai-layout"><div className="agent-list"><p className="eyebrow">Choose a demo agent</p>{agents.map((item) => <button type="button" key={item.id} className={agent.id === item.id ? "is-active" : ""} onClick={() => chooseAgent(item)}><strong>{item.name}</strong><span>{item.description}</span></button>)}</div><div className="chat-panel"><div className="chat-heading"><div><p className="eyebrow">Demo AI Agent</p><h2>{agent.name}</h2></div><span>Server API</span></div><div className="chat-messages" aria-live="polite">{messages.map((item, index) => <div className={`chat-message ${item.role}`} key={`${item.role}-${index}`}><span>{item.role === "assistant" ? agent.name : "You"}</span><p>{item.text}</p></div>)}{loading && <div className="chat-message assistant"><span>{agent.name}</span><p>Thinking...</p></div>}</div><form className="chat-form" onSubmit={send}><label className="sr-only" htmlFor="agent-message">Message the demo agent</label><input id="agent-message" value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Describe a workflow..." /><button className="button" type="submit" disabled={loading}>Send</button></form><p className="form-note">Demo only. Messages are sent to `/api/ai/chat` when the backend is configured.</p></div></div></section>
    <section className="section section-muted"><div className="container narrow"><h2>Keep secrets on the server. Keep the agent useful.</h2><p className="lead">The frontend sends an agent ID and conversation message to an Express API. Agent configuration, provider credentials, prompts, validation, and rate limits belong behind that boundary.</p><Link className="button" to="/contact?project=AI%20solution">Plan an AI workflow</Link></div></section>
  </>
}
