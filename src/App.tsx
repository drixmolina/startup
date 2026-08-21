import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom"
import Layout from "./components/Layout"
import About from "./pages/About"
import AI from "./pages/AI"
import Contact from "./pages/Contact"
import Demos from "./pages/Demos"
import FAQ from "./pages/FAQ"
import Industries from "./pages/Industries"
import Privacy from "./pages/Privacy"
import Solutions from "./pages/Solutions"
import Terms from "./pages/Terms"
import Work from "./pages/Work"
import HomeRestored from "./pages/HomeRestored"
import Projects from "./pages/Projects"
import ProjectDetail from "./pages/ProjectDetail"
import Services from "./pages/Services"
import ServiceDetail from "./pages/ServiceDetail"

function AppRoutes() {
  const location = useLocation()

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomeRestored />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/work" element={<Work />} />
        <Route path="/demos" element={<Demos />} />
        <Route path="/ai" element={<AI />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

/*

const SERVICES = [
  {
    icon: "browser" as IconName,
    title: "Websites",
    description:
      "Modern, responsive websites that make your business easier to understand, trust, and contact.",
    cta: "Explore websites",
    href: "#contact",
  },
  {
    icon: "bag" as IconName,
    title: "E-commerce",
    description:
      "Online stores with product catalogs, checkout, payments, orders, inventory, and customer accounts.",
    cta: "Explore e-commerce",
    href: "#ecommerce",
  },
  {
    icon: "calendar" as IconName,
    title: "Booking & Reservations",
    description:
      "Let customers schedule appointments and reservations without endless back-and-forth messages.",
    cta: "Explore booking",
    href: "#booking",
  },
  {
    icon: "dashboard" as IconName,
    title: "Business Systems",
    description:
      "Custom dashboards and workflow tools built around how your team actually operates.",
    cta: "Explore systems",
    href: "#systems",
  },
  {
    icon: "spark" as IconName,
    title: "AI & Automation",
    description:
      "Practical automation for inquiries, lead collection, reminders, notifications, and follow-ups.",
    cta: "Explore automation",
    href: "#automation",
  },
  {
    icon: "support" as IconName,
    title: "Digital Support",
    description:
      "Maintenance, fixes, improvements, hosting help, and ongoing support after launch.",
    cta: "Explore support",
    href: "#contact",
  },
]

const INDUSTRIES = [
  {
    id: "dental",
    icon: "tooth" as IconName,
    title: "Dental Clinics",
    description:
      "Make appointments easier for patients while giving staff a clearer schedule.",
    tags: ["Booking", "Scheduling", "Patient inquiries"],
    href: "#demo-dental",
  },
  {
    id: "veterinary",
    icon: "paw" as IconName,
    title: "Veterinary Clinics",
    description:
      "Simplify pet appointments, reminders, records, and front desk coordination.",
    tags: ["Pet records", "Appointments", "Reminders"],
    href: "#demo-veterinary",
  },
  {
    id: "hotels",
    icon: "hotel" as IconName,
    title: "Hotels & Resorts",
    description:
      "Create a smoother direct reservation experience for guests and your team.",
    tags: ["Rooms", "Reservations", "Packages"],
    href: "#contact",
  },
  {
    id: "cafes",
    icon: "coffee" as IconName,
    title: "Cafes & Restaurants",
    description:
      "Turn menus, ordering, reservations, and repeat customers into one digital flow.",
    tags: ["QR menu", "Ordering", "Reservations"],
    href: "#demo-cafe",
  },
  {
    id: "retail",
    icon: "bag" as IconName,
    title: "Retail & E-commerce",
    description:
      "Move beyond social media-only selling with your own searchable storefront.",
    tags: ["Online store", "Payments", "Inventory"],
    href: "#demo-commerce",
  },
  {
    id: "schools",
    icon: "school" as IconName,
    title: "Schools",
    description:
      "Digitize repetitive forms, requests, reservations, and administrative workflows.",
    tags: ["Requests", "Reservations", "Management"],
    href: "#contact",
  },
]

const FAQS = [
  {
    question: "What type of businesses do you work with?",
    answer:
      "DM Digital works with small and growing businesses such as clinics, cafes, hotels, retail shops, e-commerce sellers, schools, and service businesses.",
  },
  {
    question: "Do you build custom websites or use templates?",
    answer:
      "Projects are custom-built around the business goal, workflow, and customer journey. We can use proven patterns, but the final experience is designed for your business.",
  },
  {
    question: "Can you build an online store?",
    answer:
      "Yes. We can build product catalogs, carts, checkout flows, payment options, order management, inventory views, customer accounts, discounts, and reviews.",
  },
  {
    question: "Can you integrate GCash, Maya, COD, or card payments?",
    answer:
      "Yes. Payment options depend on the final platform and provider requirements, but the store can be planned around local payment habits from the start.",
  },
  {
    question: "Can you build booking systems?",
    answer:
      "Yes. Booking systems can include services, staff availability, time slots, confirmation screens, reminders, and a staff-facing appointment dashboard.",
  },
  {
    question: "Can you automate repetitive business processes?",
    answer:
      "Yes. Practical automation can help collect leads, answer common questions, route inquiries, send reminders, notify staff, and reduce repeated manual tasks.",
  },
  {
    question: "How much does a project cost?",
    answer:
      "Pricing depends on the scope, features, integrations, and timeline. The contact form helps qualify the project so DM Digital can provide a clear proposal.",
  },
  {
    question: "Do you provide maintenance after launch?",
    answer:
      "Yes. Ongoing support can include bug fixes, updates, hosting assistance, content changes, performance reviews, and feature improvements.",
  },
  {
    question: "How long does development take?",
    answer:
      "A focused business website can be finished faster than a full system. E-commerce, booking, and custom software timelines depend on the feature set.",
  },
  {
    question: "Can you work with an existing website?",
    answer:
      "Usually, yes. DM Digital can review the current setup and recommend whether it is better to improve the existing site or rebuild on a stronger foundation.",
  },
]

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  return (
    <>
      <header className={`site-nav${scrolled ? " is-scrolled" : ""}`}>
        <div className="container nav-inner">
          <a href="#home" className="brand" aria-label="DM Digital home">
            <span className="brand-mark">DM</span>
            <span className="brand-text">Digital</span>
          </a>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <div className="nav-actions">
            <Button href="#contact" className="nav-cta">
              Book a Consultation
            </Button>
            <button
              type="button"
              className="menu-button"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen(true)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {mobileOpen ? <MobileMenu onClose={() => setMobileOpen(false)} /> : null}
    </>
  )
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="mobile-menu"
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      <div className="mobile-menu-top">
        <a href="#home" className="brand" onClick={onClose}>
          <span className="brand-mark">DM</span>
          <span className="brand-text">Digital</span>
        </a>
        <button
          type="button"
          className="close-button"
          aria-label="Close menu"
          onClick={onClose}
        >
          <span />
          <span />
        </button>
      </div>
      <nav className="mobile-links" aria-label="Mobile primary navigation">
        {NAV_LINKS.map((link) => (
          <a key={link.label} href={link.href} onClick={onClose}>
            {link.label}
          </a>
        ))}
      </nav>
      <Button href="#contact" className="mobile-menu-cta" onClick={onClose}>
        Book a Free Consultation
      </Button>
    </div>
  )
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-dashboard-backdrop" aria-hidden="true">
        <HeroDashboard />
      </div>
      <div className="container hero-content">
        <FadeIn>
          <p className="eyebrow">Digital solutions for growing businesses</p>
          <h1>DM Digital</h1>
          <p className="hero-statement">
            Digital solutions built around your business.
          </p>
          <p className="hero-copy">
            Websites, online stores, booking systems, custom software, and
            practical automation designed to help businesses grow, sell, and
            operate more efficiently.
          </p>
          <div className="hero-actions">
            <Button href="#contact">Book a Free Consultation</Button>
            <Button href="#solutions" variant="secondary">
              Explore Solutions
            </Button>
          </div>
          <div className="hero-tags" aria-label="Core capabilities">
            <span>Websites</span>
            <span>E-commerce</span>
            <span>Software</span>
            <span>Automation</span>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

function HeroDashboard() {
  const metrics = [
    { label: "Revenue", value: "PHP 89,240", detail: "+12% this month" },
    { label: "Orders", value: "243", detail: "38 awaiting pickup" },
    { label: "Appointments", value: "56", detail: "Today" },
    { label: "Customers", value: "1,847", detail: "+24% returning" },
  ]

  const activity = [
    {
      label: "New appointment",
      title: "Dental Clinic",
      meta: "Dr. Santos - 2:00 PM",
      state: "Confirmed",
    },
    {
      label: "New order",
      title: "Online Store",
      meta: "PHP 2,499 - Processing",
      state: "Paid",
    },
    {
      label: "New reservation",
      title: "Hotel Deluxe Room",
      meta: "August 24",
      state: "Reserved",
    },
    {
      label: "Automation",
      title: "Customer inquiry",
      meta: "Processed automatically",
      state: "Completed",
    },
  ]

  return (
    <div className="hero-hub">
      <div className="hub-toolbar">
        <div className="hub-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <strong>DM Business Hub</strong>
        <span>Live operations</span>
      </div>
      <div className="hub-grid">
        {metrics.map((metric) => (
          <div key={metric.label} className="metric-tile">
            <span>{metric.label}</span>
            <strong>{metric.value}</strong>
            <small>{metric.detail}</small>
          </div>
        ))}
      </div>
      <div className="hub-chart" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="hub-activity">
        {activity.map((item) => (
          <div className="activity-card" key={item.label}>
            <small>{item.label}</small>
            <strong>{item.title}</strong>
            <span>{item.meta}</span>
            <em>{item.state}</em>
          </div>
        ))}
      </div>
    </div>
  )
}

function TrustStrip() {
  const items = [
    "Web Development",
    "E-commerce",
    "Business Systems",
    "Automation",
    "Based in the Philippines",
  ]
  return (
    <section className="trust-strip" aria-label="Credibility">
      <div className="container trust-inner">
        <strong>Built with modern technology</strong>
        <div className="trust-items">
          {items.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <strong>Working with growing businesses</strong>
      </div>
    </section>
  )
}

function ProblemSection() {
  const traditional = [
    "Message",
    "Manual reply",
    "Check availability",
    "Write down booking",
    "Send confirmation",
    "Update spreadsheet",
  ]
  const digital = [
    "Customer",
    "Website",
    "Booking or order",
    "Automation",
    "Dashboard",
  ]

  return (
    <section className="section problem-section" id="problem">
      <div className="container">
        <SectionHeader
          eyebrow="The shift"
          title="Your business should not depend on manual work."
          subtitle="Many businesses still manage bookings, orders, inquiries, and internal processes through messages, spreadsheets, paper, and disconnected tools."
        />
        <FadeIn className="workflow-compare">
          <WorkflowColumn
            title="Traditional"
            steps={traditional}
            tone="manual"
          />
          <WorkflowColumn title="Digital" steps={digital} tone="digital" />
        </FadeIn>
        <FadeIn className="problem-bottom">
          <h3>Less manual work. Better customer experience.</h3>
          <p>
            DM Digital turns repeated tasks into clear flows customers can use
            and teams can manage.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}

function WorkflowColumn({
  title,
  steps,
  tone,
}: {
  title: string
  steps: string[]
  tone: "manual" | "digital"
}) {
  return (
    <div className={`workflow-column workflow-${tone}`}>
      <h3>{title}</h3>
      <ol>
        {steps.map((step) => (
          <li key={step}>
            <span>{step}</span>
          </li>
        ))}
      </ol>
    </div>
  )
}

function ServicesSection() {
  return (
    <section className="section section-soft" id="solutions">
      <div className="container">
        <SectionHeader
          eyebrow="Solutions"
          title="What we build"
          subtitle="Practical digital systems designed around how your business actually works."
          align="center"
        />
        <div className="service-grid">
          {SERVICES.map((service, index) => (
            <FadeIn key={service.title}>
              <ServiceCard service={service} number={index + 1} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({
  service,
  number,
}: {
  service: typeof SERVICES[number]
  number: number
}) {
  return (
    <article className="service-card">
      <div className="card-topline">
        <span>{String(number).padStart(2, "0")}</span>
        <Icon name={service.icon} />
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <ArrowLink href={service.href}>{service.cta}</ArrowLink>
    </article>
  )
}

function EcommerceSection() {
  const features = [
    "Product Catalog",
    "Variations",
    "Shopping Cart",
    "Checkout",
    "GCash",
    "Maya",
    "COD",
    "Orders",
    "Inventory",
    "Accounts",
    "Discounts",
    "Reviews",
  ]

  return (
    <section className="section commerce-section" id="ecommerce">
      <div className="container commerce-grid">
        <div>
          <SectionHeader
            eyebrow="E-commerce"
            title="Your products deserve their own online store."
            subtitle="Move beyond Facebook, Instagram, TikTok, and Messenger-only selling with a storefront where customers can browse, order, pay, and track purchases."
          />
          <div className="commerce-flow" aria-label="E-commerce selling flow">
            {[
              "Social selling",
              "DM Digital Store",
              "Product catalog",
              "Checkout",
              "Order management",
              "Inventory",
            ].map((step) => (
              <span key={step}>{step}</span>
            ))}
          </div>
          <div className="feature-pills">
            {features.map((feature) => (
              <span key={feature}>{feature}</span>
            ))}
          </div>
          <div className="section-actions">
            <Button href="#contact">Build Your Online Store</Button>
            <Button href="#demo-commerce" variant="secondary">
              Try E-commerce Demo
            </Button>
          </div>
        </div>
        <FadeIn className="commerce-previews">
          <StorePreview />
          <AdminPreview />
        </FadeIn>
      </div>
    </section>
  )
}

function StorePreview() {
  const products = [
    { name: "Premium Hoodie", price: "PHP 1,499" },
    { name: "Classic Tee", price: "PHP 899" },
    { name: "Cargo Pants", price: "PHP 1,299" },
  ]

  return (
    <div className="preview-panel store-preview">
      <div className="preview-heading">
        <strong>DM Store</strong>
        <span>New arrivals</span>
      </div>
      <div className="product-row">
        {products.map((product) => (
          <article key={product.name} className="product-card">
            <div className="product-thumb" aria-hidden="true" />
            <strong>{product.name}</strong>
            <span>{product.price}</span>
            <button type="button">Add to Cart</button>
          </article>
        ))}
      </div>
    </div>
  )
}

function AdminPreview() {
  const metrics = [
    { label: "Today's Sales", value: "PHP 18,450" },
    { label: "Orders", value: "27" },
    { label: "Products", value: "183" },
    { label: "Low Stock", value: "8" },
  ]

  return (
    <div className="preview-panel admin-preview">
      <div className="preview-heading">
        <strong>Store Admin</strong>
        <span>Today</span>
      </div>
      <div className="admin-metrics">
        {metrics.map((metric) => (
          <div key={metric.label}>
            <span>{metric.label}</span>
            <strong>{metric.value}</strong>
          </div>
        ))}
      </div>
      <div className="mini-bars" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  )
}

function BookingSection() {
  const [selectedTime, setSelectedTime] = useState("2:00 PM")
  const times = ["9:00 AM", "10:30 AM", "1:00 PM", "2:00 PM"]

  return (
    <section className="section booking-section" id="booking">
      <div className="container">
        <SectionHeader
          eyebrow="Booking systems"
          title="Make booking effortless."
          subtitle="Let customers schedule appointments and reservations without unnecessary back-and-forth."
          align="center"
        />
        <FadeIn className="booking-demo">
          <div className="booking-panel customer-booking">
            <p className="panel-label">Customer side</p>
            <h3>Book Appointment</h3>
            <BookingField label="Service" value="Dental Cleaning" />
            <BookingField label="Staff" value="Dr. Santos" />
            <BookingField label="Date" value="August 20" />
            <div
              className="booking-times"
              role="group"
              aria-label="Choose appointment time"
            >
              {times.map((time) => (
                <button
                  type="button"
                  key={time}
                  className={selectedTime === time ? "is-selected" : ""}
                  aria-pressed={selectedTime === time}
                  onClick={() => setSelectedTime(time)}
                >
                  {time}
                </button>
              ))}
            </div>
            <Button>Confirm Booking</Button>
          </div>
          <div className="booking-connector" aria-hidden="true">
            <span />
          </div>
          <div className="booking-panel appointment-dashboard">
            <p className="panel-label">Business dashboard</p>
            <h3>Today's Appointments</h3>
            {[
              ["09:00", "Juan Dela Cruz", "Cleaning"],
              ["10:30", "Maria Santos", "Consultation"],
              ["13:00", "Pedro Reyes", "Filling"],
              [
                selectedTime.replace(" PM", ":00"),
                "New patient",
                "Dental Cleaning",
              ],
            ].map(([time, name, service]) => (
              <div className="appointment-row" key={`${time}-${name}`}>
                <strong>{time}</strong>
                <span>{name}</span>
                <em>{service}</em>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

function BookingField({ label, value }: { label: string; value: string }) {
  return (
    <div className="booking-field">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  )
}

function BusinessSystemsSection() {
  return (
    <section className="section systems-section" id="systems">
      <div className="container systems-grid">
        <div>
          <SectionHeader
            eyebrow="Custom software"
            title="Software that fits the way you work."
            subtitle="When spreadsheets, chat messages, and disconnected tools stop being enough, build a system around your actual workflow."
          />
          <div className="section-actions">
            <Button href="#contact">Plan a Business System</Button>
            <Button href="#work" variant="secondary">
              View Case Study
            </Button>
          </div>
        </div>
        <FadeIn>
          <OperationsDashboard />
        </FadeIn>
      </div>
    </section>
  )
}

function OperationsDashboard() {
  const metrics = [
    ["Revenue", "PHP 45,820"],
    ["Orders", "128"],
    ["Pending Requests", "14"],
    ["Inventory Alerts", "6"],
  ]
  const rows = [
    ["Inventory", "Low stock", "Needs review"],
    ["Reservation", "Room request", "Confirmed"],
    ["Job order", "Maintenance", "In progress"],
  ]

  return (
    <div className="operations-dashboard">
      <aside>
        <strong>DM Operations</strong>
        {[
          "Dashboard",
          "Orders",
          "Appointments",
          "Inventory",
          "Customers",
          "Requests",
          "Reports",
          "Settings",
        ].map((item, index) => (
          <span key={item} className={index === 0 ? "is-active" : ""}>
            {item}
          </span>
        ))}
      </aside>
      <main>
        <div className="ops-header">
          <div>
            <span>Overview</span>
            <h3>Operations dashboard</h3>
          </div>
          <em>Live</em>
        </div>
        <div className="ops-metrics">
          {metrics.map(([label, value]) => (
            <div key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
        <div className="ops-table">
          {rows.map(([type, detail, status]) => (
            <div key={detail}>
              <strong>{type}</strong>
              <span>{detail}</span>
              <em>{status}</em>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

function AISection() {
  const workflow = [
    "Customer",
    "AI Assistant",
    "Understands Request",
    "Collects Information",
    "Creates Lead",
    "Business Notification",
  ]

  return (
    <section className="section section-soft" id="automation">
      <div className="container ai-grid">
        <div>
          <SectionHeader
            eyebrow="AI and automation"
            title="Automate the work that slows you down."
            subtitle="Use practical automation to reduce repetitive work, respond faster, and keep inquiries organized."
          />
          <div className="automation-flow">
            {workflow.map((step) => (
              <span key={step}>{step}</span>
            ))}
          </div>
        </div>
        <FadeIn className="ai-cards">
          <div className="chat-card">
            <span>AI Assistant</span>
            <p>How can I help you today?</p>
            <div className="chat-bubble">
              I would like to book dental cleaning this week.
            </div>
          </div>
          <div className="lead-card">
            <span>New Lead</span>
            <strong>Maria Santos</strong>
            <p>Interested in: Dental Cleaning</p>
            <em>Automation completed</em>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

function IndustriesSection() {
  return (
    <section className="section industries-section" id="industries">
      <div className="container">
        <SectionHeader
          eyebrow="Industries"
          title="Built for businesses like yours."
          subtitle="Different industries have different problems. DM Digital builds around them."
          align="center"
        />
        <div className="industry-grid">
          {INDUSTRIES.map((industry) => (
            <FadeIn key={industry.id}>
              <IndustryCard industry={industry} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

function IndustryCard({ industry }: { industry: typeof INDUSTRIES[number] }) {
  return (
    <article className="industry-card" id={`industry-${industry.id}`}>
      <div className="industry-icon">
        <Icon name={industry.icon} />
      </div>
      <h3>{industry.title}</h3>
      <p>{industry.description}</p>
      <div className="tag-list">
        {industry.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <ArrowLink href={industry.href}>
        Explore {industry.title.replace(" & ", " ")}
      </ArrowLink>
    </article>
  )
}

function IndustryLandingStructure() {
  const [activeIndustry, setActiveIndustry] = useState(INDUSTRIES[0].id)
  const industry =
    INDUSTRIES.find((item) => item.id === activeIndustry) ?? INDUSTRIES[0]

  return (
    <section className="section landing-structure" id="industry-pages">
      <div className="container landing-grid">
        <div>
          <SectionHeader
            eyebrow="Landing-page ready"
            title="A reusable structure for every industry."
            subtitle="The single-page app is organized so future routes can reuse the same content pattern for dental, veterinary, hotels, cafes, retail, and schools."
          />
          <div
            className="industry-tabs"
            role="tablist"
            aria-label="Industry page examples"
          >
            {INDUSTRIES.map((item) => (
              <button
                type="button"
                key={item.id}
                role="tab"
                aria-selected={activeIndustry === item.id}
                className={activeIndustry === item.id ? "is-active" : ""}
                onClick={() => setActiveIndustry(item.id)}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
        <FadeIn>
          <article className="landing-preview">
            <p className="eyebrow">/{`industries/${industry.id}`}</p>
            <h3>Digital solutions for {industry.title.toLowerCase()}.</h3>
            <p>{industry.description}</p>
            <div className="landing-steps">
              {[
                "Problems",
                "Solutions",
                "Features",
                "Demo",
                "Process",
                "FAQ",
                "CTA",
              ].map((step) => (
                <span key={step}>{step}</span>
              ))}
            </div>
            <Button href={industry.href}>Open Relevant Demo</Button>
          </article>
        </FadeIn>
      </div>
    </section>
  )
}

const DEMOS = [
  {
    id: "dental" as DemoId,
    title: "Dental Booking",
    subtitle: "Appointment scheduling for clinics.",
  },
  {
    id: "veterinary" as DemoId,
    title: "Veterinary Management",
    subtitle: "Pet records, appointments, and reminders.",
  },
  {
    id: "commerce" as DemoId,
    title: "E-commerce Store",
    subtitle: "Storefront, cart, and order management.",
  },
  {
    id: "cafe" as DemoId,
    title: "Cafe Ordering",
    subtitle: "Digital menu and pickup ordering.",
  },
]

function DemosSection() {
  const [activeDemo, setActiveDemo] = useState<DemoId>("dental")

  useEffect(() => {
    const updateDemoFromHash = () => {
      const hashDemo = window.location.hash.replace("#demo-", "")
      if (DEMOS.some((demo) => demo.id === hashDemo)) {
        setActiveDemo(hashDemo as DemoId)
      }
    }

    updateDemoFromHash()
    window.addEventListener("hashchange", updateDemoFromHash)
    return () => window.removeEventListener("hashchange", updateDemoFromHash)
  }, [])

  return (
    <section className="section demo-section" id="demos">
      <div className="container">
        <SectionHeader
          eyebrow="Demo center"
          title="See what we can build."
          subtitle="Explore polished interactive previews for common business systems."
          align="center"
        />
        <FadeIn className="demo-shell">
          <div
            className="demo-tabs"
            role="tablist"
            aria-label="Interactive demos"
          >
            {DEMOS.map((demo) => (
              <button
                type="button"
                key={demo.id}
                role="tab"
                id={`demo-${demo.id}`}
                aria-controls={`panel-${demo.id}`}
                aria-selected={activeDemo === demo.id}
                className={activeDemo === demo.id ? "is-active" : ""}
                onClick={() => {
                  setActiveDemo(demo.id)
                  window.history.replaceState(null, "", `#demo-${demo.id}`)
                }}
              >
                <strong>{demo.title}</strong>
                <span>{demo.subtitle}</span>
              </button>
            ))}
          </div>
          <div
            className="demo-stage"
            role="tabpanel"
            id={`panel-${activeDemo}`}
            aria-labelledby={`demo-${activeDemo}`}
          >
            <DemoPreview activeDemo={activeDemo} />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

function DemoPreview({ activeDemo }: { activeDemo: DemoId }) {
  if (activeDemo === "veterinary") return <VeterinaryDemo />
  if (activeDemo === "commerce") return <CommerceDemo />
  if (activeDemo === "cafe") return <CafeDemo />
  return <DentalDemo />
}

function DentalDemo() {
  const [selectedTime, setSelectedTime] = useState("2:00 PM")
  const times = ["9:00 AM", "11:30 AM", "2:00 PM", "4:00 PM"]

  return (
    <div className="interactive-demo dental-demo">
      <div className="demo-form">
        <p className="panel-label">Dental Appointment System</p>
        <h3>Book Appointment</h3>
        <BookingField label="Service" value="Dental Cleaning" />
        <BookingField label="Dentist" value="Dr. Santos" />
        <BookingField label="Date" value="August 20" />
        <div className="choice-grid">
          {times.map((time) => (
            <button
              type="button"
              key={time}
              className={selectedTime === time ? "is-selected" : ""}
              aria-pressed={selectedTime === time}
              onClick={() => setSelectedTime(time)}
            >
              {time}
            </button>
          ))}
        </div>
      </div>
      <div className="demo-summary">
        <span>Ready to confirm</span>
        <strong>{selectedTime}</strong>
        <p>Dental Cleaning with Dr. Santos</p>
        <Button href="#contact">Build This Demo</Button>
      </div>
    </div>
  )
}

function VeterinaryDemo() {
  const pets = [
    {
      name: "Max",
      breed: "Golden Retriever",
      next: "August 22",
      vaccine: "Due September 10",
    },
    {
      name: "Mochi",
      breed: "Persian Cat",
      next: "August 25",
      vaccine: "Complete",
    },
    {
      name: "Bruno",
      breed: "Beagle",
      next: "August 28",
      vaccine: "Due September 18",
    },
  ]
  const [selectedPet, setSelectedPet] = useState(pets[0])

  return (
    <div className="interactive-demo vet-demo">
      <div className="record-list" role="list" aria-label="Pet records">
        {pets.map((pet) => (
          <button
            type="button"
            key={pet.name}
            className={selectedPet.name === pet.name ? "is-selected" : ""}
            onClick={() => setSelectedPet(pet)}
          >
            <strong>{pet.name}</strong>
            <span>{pet.breed}</span>
          </button>
        ))}
      </div>
      <div className="pet-record">
        <p className="panel-label">Veterinary Management</p>
        <h3>{selectedPet.name}</h3>
        <span>{selectedPet.breed}</span>
        <dl>
          <div>
            <dt>Next appointment</dt>
            <dd>{selectedPet.next}</dd>
          </div>
          <div>
            <dt>Vaccination</dt>
            <dd>{selectedPet.vaccine}</dd>
          </div>
          <div>
            <dt>Reminder</dt>
            <dd>SMS queued</dd>
          </div>
        </dl>
        <Button href="#contact">Build This Demo</Button>
      </div>
    </div>
  )
}

function CommerceDemo() {
  const products = [
    { name: "Hoodie", price: 1499 },
    { name: "T-Shirt", price: 899 },
    { name: "Tote Bag", price: 499 },
  ]
  const [cart, setCart] = useState<Record<string, number>>({})
  const total = useMemo(
    () =>
      products.reduce(
        (sum, product) => sum + product.price * (cart[product.name] ?? 0),
        0,
      ),
    [cart, products],
  )
  const itemCount = Object.values(cart).reduce(
    (sum, quantity) => sum + quantity,
    0,
  )

  return (
    <div className="interactive-demo commerce-demo-preview">
      <div>
        <p className="panel-label">E-commerce Store</p>
        <h3>New Arrivals</h3>
        <div className="demo-products">
          {products.map((product) => (
            <article key={product.name}>
              <div className="product-thumb" aria-hidden="true" />
              <strong>{product.name}</strong>
              <span>PHP {product.price.toLocaleString()}</span>
              <button
                type="button"
                onClick={() =>
                  setCart((current) => ({
                    ...current,
                    [product.name]: (current[product.name] ?? 0) + 1,
                  }))
                }
              >
                Add to Cart
              </button>
            </article>
          ))}
        </div>
      </div>
      <div className="cart-summary">
        <span>Cart</span>
        <strong>{itemCount} items</strong>
        <p>PHP {total.toLocaleString()}</p>
        <Button href="#contact">Build This Demo</Button>
      </div>
    </div>
  )
}

function CafeDemo() {
  const menu = [
    { name: "Latte", price: 150 },
    { name: "Americano", price: 120 },
    { name: "Croissant", price: 100 },
  ]
  const [quantities, setQuantities] = useState<Record<string, number>>({
    Latte: 1,
  })
  const total = menu.reduce(
    (sum, item) => sum + item.price * (quantities[item.name] ?? 0),
    0,
  )

  function updateQuantity(name: string, delta: number) {
    setQuantities((current) => ({
      ...current,
      [name]: Math.max(0, (current[name] ?? 0) + delta),
    }))
  }

  return (
    <div className="interactive-demo cafe-demo">
      <div className="menu-list">
        <p className="panel-label">Cafe Ordering</p>
        <h3>Pickup Order</h3>
        {menu.map((item) => (
          <div className="menu-item" key={item.name}>
            <div>
              <strong>{item.name}</strong>
              <span>PHP {item.price}</span>
            </div>
            <div className="stepper" aria-label={`${item.name} quantity`}>
              <button
                type="button"
                onClick={() => updateQuantity(item.name, -1)}
                aria-label={`Remove ${item.name}`}
              >
                -
              </button>
              <span>{quantities[item.name] ?? 0}</span>
              <button
                type="button"
                onClick={() => updateQuantity(item.name, 1)}
                aria-label={`Add ${item.name}`}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="order-ticket">
        <span>Order ticket</span>
        <strong>PHP {total.toLocaleString()}</strong>
        <p>Pickup in 20 minutes</p>
        <Button href="#contact">Build This Demo</Button>
      </div>
    </div>
  )
}

function WorkSection() {
  return (
    <section className="section section-soft" id="work">
      <div className="container">
        <SectionHeader
          eyebrow="Selected work"
          title="Systems that show how DM Digital thinks."
          subtitle="Realistic case-study structures that demonstrate workflow, operations, and customer experience."
          align="center"
        />
        <div className="work-grid">
          <FadeIn className="case-study case-study-large">
            <div>
              <p className="eyebrow">Facility & Property Management</p>
              <h3>FacilitEASE</h3>
              <p>
                A centralized system designed to manage facility reservations,
                inventory, job orders, maintenance, and administrative
                workflows.
              </p>
              <div className="tag-list">
                {[
                  "Reservations",
                  "Inventory",
                  "Job Orders",
                  "Maintenance",
                  "Reports",
                ].map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <ArrowLink href="#contact">View Case Study</ArrowLink>
            </div>
            <FacilitEasePreview />
          </FadeIn>
          <FadeIn className="case-study">
            <p className="eyebrow">E-commerce</p>
            <h3>Online Store Platform</h3>
            <p>
              Storefront, checkout, orders, inventory, and customer accounts for
              growing sellers.
            </p>
          </FadeIn>
          <FadeIn className="case-study">
            <p className="eyebrow">Web application</p>
            <h3>Business Operations App</h3>
            <p>
              Dashboards, request tracking, reports, and internal tools for
              day-to-day work.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

function FacilitEasePreview() {
  return (
    <div
      className="facilitease-preview"
      aria-label="FacilitEASE interface preview"
    >
      <div className="preview-heading">
        <strong>FacilitEASE</strong>
        <span>Facility dashboard</span>
      </div>
      <div className="facility-grid">
        {["Reservations", "Inventory", "Job Orders", "Maintenance"].map(
          (label, index) => (
            <div key={label}>
              <span>{label}</span>
              <strong>{[18, 42, 9, 6][index]}</strong>
            </div>
          ),
        )}
      </div>
      <div className="facility-list">
        <span>Conference Room A - approved</span>
        <span>Projector inventory - low stock</span>
        <span>Aircon maintenance - scheduled</span>
      </div>
    </div>
  )
}

function ProcessSection() {
  const steps = [
    ["Discover", "Understand your business, workflow, customers, and goals."],
    ["Plan", "Define the right solution, features, and technical approach."],
    ["Build", "Design and develop the system around your requirements."],
    [
      "Launch & Support",
      "Deploy, maintain, monitor, and improve your digital solution.",
    ],
  ]

  return (
    <section className="section process-section" id="process">
      <div className="container">
        <SectionHeader
          eyebrow="Process"
          title="From idea to digital solution."
          align="center"
        />
        <div className="process-grid">
          {steps.map(([title, description], index) => (
            <FadeIn key={title}>
              <article className="process-card">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhySection() {
  const reasons = [
    ["Business-first", "We start with the problem, not the technology."],
    ["Custom-built", "Solutions are designed around your actual workflow."],
    [
      "Modern technology",
      "Projects use current, maintainable web technologies.",
    ],
    [
      "Long-term support",
      "Systems can be maintained and improved after launch.",
    ],
  ]

  return (
    <section className="section section-soft why-section">
      <div className="container">
        <SectionHeader
          eyebrow="Why DM Digital"
          title="Built for your business, not a template."
          align="center"
        />
        <div className="why-grid">
          {reasons.map(([title, description]) => (
            <FadeIn key={title}>
              <article className="why-card">
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section className="section about-section" id="about">
      <div className="container about-grid">
        <div>
          <SectionHeader
            eyebrow="About"
            title="Technology should solve problems, not create more of them."
            subtitle="DM Digital helps small and growing businesses move away from manual processes and outdated digital experiences."
          />
          <p className="about-copy">
            We combine web development, e-commerce, business systems, IT
            solutions, and AI automation to create practical digital tools built
            around each business.
          </p>
        </div>
        <FadeIn>
          <article className="founder-card">
            <div className="founder-avatar" aria-hidden="true">
              DM
            </div>
            <p className="eyebrow">Founder</p>
            <h3>Drix Molina</h3>
            <span>Founder / Full-Stack Developer</span>
            <div className="tag-list">
              {[
                "Full-Stack Development",
                "IT Solutions",
                "AI Automation",
                "Business Systems",
              ].map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
            <Button href="#contact" variant="secondary">
              View Developer Portfolio
            </Button>
          </article>
        </FadeIn>
      </div>
    </section>
  )
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="section section-soft faq-section" id="faq">
      <div className="container faq-container">
        <SectionHeader eyebrow="FAQ" title="Common questions" align="center" />
        <FadeIn>
          <div className="faq-list">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index
              return (
                <div className="faq-item" key={faq.question}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  >
                    <span>{faq.question}</span>
                    <strong aria-hidden="true">{isOpen ? "-" : "+"}</strong>
                  </button>
                  <div
                    id={`faq-answer-${index}`}
                    className={isOpen ? "faq-answer is-open" : "faq-answer"}
                  >
                    <p>{faq.answer}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="container">
        <FadeIn className="final-cta-inner">
          <p className="eyebrow">Get started</p>
          <h2>Have a business process you would like to improve?</h2>
          <p>
            Tell us what you are currently doing, what is slowing you down, and
            what you would like to improve. We will explore the right digital
            solution for your business.
          </p>
          <div className="hero-actions">
            <Button href="#contact">Book a Free Consultation</Button>
            <Button href="#demos" variant="ghost">
              Explore Our Demos
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

type ContactForm = {
  name: string
  business: string
  email: string
  phone: string
  businessType: string
  services: string[]
  budget: string
  timeline: string
  message: string
}

function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState<ContactForm>({
    name: "",
    business: "",
    email: "",
    phone: "",
    businessType: "",
    services: [],
    budget: "",
    timeline: "",
    message: "",
  })

  const businessTypes = [
    "Dental Clinic",
    "Veterinary Clinic",
    "Hotel / Resort",
    "Cafe / Restaurant",
    "Retail / E-commerce",
    "School",
    "Other",
  ]
  const serviceOptions = [
    "Website",
    "E-commerce",
    "Booking System",
    "Business Software",
    "AI / Automation",
    "Not Sure",
  ]

  function updateField(field: keyof ContactForm, value: string) {
    setForm((current) => ({ ...current, [field]: value }))
  }

  function toggleService(service: string, checked: boolean) {
    setForm((current) => ({
      ...current,
      services: checked
        ? [...current.services, service]
        : current.services.filter((item) => item !== service),
    }))
  }

  if (submitted) {
    return (
      <section className="section contact-section" id="contact">
        <div
          className="container success-container"
          role="status"
          aria-live="polite"
        >
          <div className="success-icon" aria-hidden="true">
            OK
          </div>
          <h2>Thanks for reaching out.</h2>
          <p>
            We have received your inquiry. We will review your requirements and
            get back to you soon.
          </p>
          <div className="hero-actions">
            <Button onClick={() => setSubmitted(false)} variant="secondary">
              Back to Form
            </Button>
            <Button href="#demos">Explore Demos</Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-grid">
        <div>
          <SectionHeader
            eyebrow="Contact"
            title="Let's build something useful."
            subtitle="Tell us about your business and what you would like to improve."
          />
          <div className="contact-aside">
            <strong>A good inquiry includes:</strong>
            <span>Your business type</span>
            <span>What is manual or slow today</span>
            <span>The system you want to build</span>
            <span>Your ideal timeline</span>
          </div>
        </div>
        <FadeIn>
          <form
            className="contact-form"
            onSubmit={(event) => {
              event.preventDefault()
              setSubmitted(true)
            }}
          >
            <div className="form-row">
              <Field label="Full Name" htmlFor="name" required>
                <input
                  id="name"
                  required
                  autoComplete="name"
                  value={form.name}
                  onChange={(event) => updateField("name", event.target.value)}
                  placeholder="Juan Dela Cruz"
                />
              </Field>
              <Field label="Business Name" htmlFor="business" required>
                <input
                  id="business"
                  required
                  value={form.business}
                  onChange={(event) =>
                    updateField("business", event.target.value)
                  }
                  placeholder="Your business"
                />
              </Field>
            </div>
            <div className="form-row">
              <Field label="Email" htmlFor="email" required>
                <input
                  id="email"
                  required
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  placeholder="you@business.com"
                />
              </Field>
              <Field label="Phone" htmlFor="phone">
                <input
                  id="phone"
                  type="tel"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={(event) => updateField("phone", event.target.value)}
                  placeholder="+63 9XX XXX XXXX"
                />
              </Field>
            </div>
            <Field label="Business Type" htmlFor="business-type" required>
              <select
                id="business-type"
                required
                value={form.businessType}
                onChange={(event) =>
                  updateField("businessType", event.target.value)
                }
              >
                <option value="">Select your business type</option>
                {businessTypes.map((type) => (
                  <option key={type}>{type}</option>
                ))}
              </select>
            </Field>
            <fieldset className="service-options">
              <legend>Interested In</legend>
              <div>
                {serviceOptions.map((service) => (
                  <label key={service}>
                    <input
                      type="checkbox"
                      checked={form.services.includes(service)}
                      onChange={(event) =>
                        toggleService(service, event.target.checked)
                      }
                    />
                    <span>{service}</span>
                  </label>
                ))}
              </div>
            </fieldset>
            <div className="form-row">
              <Field label="Budget Range" htmlFor="budget" helpText="Optional">
                <select
                  id="budget"
                  value={form.budget}
                  onChange={(event) =>
                    updateField("budget", event.target.value)
                  }
                >
                  <option value="">No preference</option>
                  {[
                    "PHP 10,000 - PHP 30,000",
                    "PHP 30,000 - PHP 60,000",
                    "PHP 60,000 - PHP 100,000",
                    "PHP 100,000+",
                  ].map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </Field>
              <Field label="Timeline" htmlFor="timeline">
                <select
                  id="timeline"
                  value={form.timeline}
                  onChange={(event) =>
                    updateField("timeline", event.target.value)
                  }
                >
                  <option value="">Select timeline</option>
                  {[
                    "As soon as possible",
                    "1-3 months",
                    "3-6 months",
                    "Just exploring",
                  ].map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </Field>
            </div>
            <Field label="What would you like to improve?" htmlFor="message">
              <textarea
                id="message"
                rows={5}
                value={form.message}
                onChange={(event) => updateField("message", event.target.value)}
                placeholder="Describe your current process, bottleneck, or idea."
              />
            </Field>
            <Button type="submit" className="submit-button">
              Send Inquiry
            </Button>
          </form>
        </FadeIn>
      </div>
    </section>
  )
}

function Field({
  label,
  htmlFor,
  required = false,
  helpText,
  children,
}: {
  label: string
  htmlFor: string
  required?: boolean
  helpText?: string
  children: ReactNode
}) {
  return (
    <div className="field">
      <label htmlFor={htmlFor}>
        {label}
        {required ? <span aria-hidden="true"> *</span> : null}
        {helpText ? <em>{helpText}</em> : null}
      </label>
      {children}
    </div>
  )
}

function Footer() {
  const columns = [
    {
      title: "Solutions",
      links: [
        ["Websites", "#solutions"],
        ["E-commerce", "#ecommerce"],
        ["Booking", "#booking"],
        ["Business Systems", "#systems"],
        ["AI & Automation", "#automation"],
        ["Digital Support", "#contact"],
      ],
    },
    {
      title: "Industries",
      links: [
        ["Dental", "#industry-dental"],
        ["Veterinary", "#industry-veterinary"],
        ["Hotels", "#industry-hotels"],
        ["Cafes", "#industry-cafes"],
        ["Retail", "#industry-retail"],
        ["Schools", "#industry-schools"],
      ],
    },
    {
      title: "Company",
      links: [
        ["About", "#about"],
        ["Work", "#work"],
        ["Demos", "#demos"],
        ["Contact", "#contact"],
      ],
    },
    {
      title: "Connect",
      links: [
        ["Email", "#contact"],
        ["LinkedIn", "#contact"],
        ["GitHub", "#contact"],
      ],
    },
  ]

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a href="#home" className="brand">
            <span className="brand-mark">DM</span>
            <span className="brand-text">Digital</span>
          </a>
          <p>Digital solutions built around your business.</p>
        </div>
        {columns.map((column) => (
          <nav key={column.title} aria-label={column.title}>
            <strong>{column.title}</strong>
            {column.links.map(([label, href]) => (
              <a key={label} href={href}>
                {label}
              </a>
            ))}
          </nav>
        ))}
      </div>
      <div className="container footer-bottom">
        <span>(c) 2026 DM Digital. All rights reserved.</span>
        <div>
          <a href="#home">Privacy Policy</a>
          <a href="#home">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}

export default function LegacyApp() {
  return (
    <div className="app-shell">
      <Nav />
      <main>
        <Hero />
        <TrustStrip />
        <ProblemSection />
        <ServicesSection />
        <EcommerceSection />
        <BookingSection />
        <BusinessSystemsSection />
        <AISection />
        <IndustriesSection />
        <IndustryLandingStructure />
        <DemosSection />
        <WorkSection />
        <ProcessSection />
        <WhySection />
        <AboutSection />
        <FAQSection />
        <FinalCTA />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

*/
