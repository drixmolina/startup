import { useEffect, useState, type ReactNode } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"

const links = [["Solutions", "/services"], ["Projects", "/projects"], ["Industries", "/industries"], ["About", "/about"], ["Blog", "/faq"]] as const

export default function Layout({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    document.documentElement.dataset.theme = "light"
    localStorage.removeItem("dm-theme")
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <header className="site-header">
        <div className="container nav-inner">
          <Link className="brand" to="/" aria-label="Drix Digital Solutions home">
            <img className="brand-logo" src="/images/dm-logo.png" alt="Drix Digitals" />
          </Link>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {links.map(([label, path]) => <NavLink key={label} to={path}>{label}</NavLink>)}
          </nav>
          <div className="nav-actions">
            <Link className="button button-demo" to="/contact">Request a Demo</Link>
            <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen((value) => !value)}><span /><span /><span /></button>
          </div>
        </div>
        {menuOpen && <nav className="mobile-nav" id="mobile-navigation" aria-label="Mobile navigation">
          {links.map(([label, path]) => <NavLink key={label} to={path}>{label}</NavLink>)}
          <Link className="button button-demo" to="/contact">Request a Demo</Link>
        </nav>}
      </header>
      <main id="main-content">{children}</main>
      <footer className="site-footer">
        <div className="container footer-grid">
          <div><Link className="brand" to="/" aria-label="Drix Digital Solutions home"><img className="brand-logo brand-logo-footer" src="/images/dm-logo.png" alt="Drix Digitals" /></Link><p>Digital solutions for growing businesses.</p></div>
          <div><p className="footer-label">Explore</p><Link to="/services">Services</Link><Link to="/projects">Projects</Link><Link to="/industries">Industries</Link><Link to="/demos">Demos</Link></div>
          <div><p className="footer-label">Company</p><Link to="/about">About</Link><Link to="/faq">FAQ</Link><Link to="/contact">Contact</Link><Link to="/privacy">Privacy</Link><Link to="/terms">Terms</Link></div>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} DM Digital Solutions</span><span>Built around the way your business works.</span></div>
      </footer>
    </div>
  )
}
