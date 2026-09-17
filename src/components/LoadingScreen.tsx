import { useEffect, useState } from "react"

export default function LoadingScreen() {
  const [isExiting, setIsExiting] = useState(false)
  const [isMounted, setIsMounted] = useState(true)

  useEffect(() => {
    const exitTimer = window.setTimeout(() => {
      setIsExiting(true)
      document.documentElement.classList.add("is-site-ready")
    }, 1000)
    const removeTimer = window.setTimeout(() => setIsMounted(false), 1500)

    return () => {
      window.clearTimeout(exitTimer)
      window.clearTimeout(removeTimer)
      document.documentElement.classList.remove("is-site-ready")
    }
  }, [])

  if (!isMounted) return null

  return (
    <div className={`loading-screen${isExiting ? " is-exiting" : ""}`} role="status" aria-live="polite" aria-label="Loading website">
      <div className="loading-screen-content">
        <img className="loading-screen-logo" src="/images/drix-logo.png" alt="Drix Digitals" />
        <div className="loading-screen-line" aria-hidden="true">
          <span />
        </div>
        <span className="loading-screen-label">Loading</span>
      </div>
    </div>
  )
}
