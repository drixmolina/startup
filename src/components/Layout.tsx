import { useEffect, useState, type ReactNode } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"

const links = [["Services", "/services"], ["Projects", "/projects"], ["Industries", "/industries"], ["Demos", "/demos"], ["AI", "/ai"], ["About", "/about"], ["FAQ", "/faq"]] as const

export default function Layout({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dark, setDark] = useState(() => localStorage.getItem("dm-theme") === "dark")
  const location = useLocation()

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light"
    localStorage.setItem("dm-theme", dark ? "dark" : "light")
  }, [dark])

  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container nav-inner">
          <Link className="brand" to="/" aria-label="DM Digital Solutions home"><span className="brand-mark">DM</span><span>Digital Solutions</span></Link>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {links.map(([label, path]) => <NavLink key={label} to={path}>{label}</NavLink>)}
          </nav>
          <div className="nav-actions">
            <button className="theme-toggle" type="button" onClick={() => setDark((value) => !value)} aria-label={`Switch to ${dark ? "light" : "dark"} mode`} aria-pressed={dark}>{dark ? "Light" : "Dark"}</button>
            <Link className="button button-small" to="/contact">Start a project</Link>
            <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen((value) => !value)}><span /><span /><span /></button>
          </div>
        </div>
        {menuOpen && <nav className="mobile-nav" id="mobile-navigation" aria-label="Mobile navigation">
          {links.map(([label, path]) => <NavLink key={label} to={path}>{label}</NavLink>)}
          <Link className="button" to="/contact">Start a project</Link>
        </nav>}
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <div className="container footer-grid">
          <div><Link className="brand" to="/"><span className="brand-mark">DM</span><span>Digital Solutions</span></Link><p>Digital solutions for growing businesses.</p></div>
          <div><p className="footer-label">Explore</p><Link to="/services">Services</Link><Link to="/projects">Projects</Link><Link to="/industries">Industries</Link><Link to="/demos">Demos</Link></div>
          <div><p className="footer-label">Company</p><Link to="/about">About</Link><Link to="/faq">FAQ</Link><Link to="/contact">Contact</Link><Link to="/privacy">Privacy</Link><Link to="/terms">Terms</Link></div>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} DM Digital Solutions</span><span>Built around the way your business works.</span></div>
      </footer>
    </div>
  )
}
