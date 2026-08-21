import { solutions } from "./site"

export const serviceEntries = solutions.map((solution) => ({
  ...solution,
  slug: solution.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
  benefits: [
    "A clearer customer journey",
    "A workflow shaped around the business",
    "A maintainable foundation for future improvements",
  ],
  process: ["Understand the workflow", "Plan the useful first release", "Build, test, and improve"],
}))

export const projectEntries = [
  {
    slug: "facilitease",
    title: "FacilitEASE",
    category: "Property and facility management",
    summary: "A centralized system concept for reservations, inventory, job orders, maintenance, and reports.",
    technologies: ["React", "TypeScript", "Operations workflows"],
    status: "Case study concept",
    features: ["Venue reservations", "Equipment inventory", "Maintenance reports", "Job order tracking"],
  },
  {
    slug: "online-store-platform",
    title: "Online Store Platform",
    category: "E-commerce",
    summary: "A storefront and operations foundation for products, checkout, orders, inventory, and customer accounts.",
    technologies: ["Responsive web", "Commerce flows", "Inventory foundations"],
    status: "Solution example",
    features: ["Product catalog", "Cart and checkout preview", "Order handoff", "Inventory views"],
  },
  {
    slug: "business-operations-app",
    title: "Business Operations App",
    category: "Web application",
    summary: "Dashboards and request tracking that make day-to-day work easier to see and follow through.",
    technologies: ["Dashboards", "Role-aware workflows", "Reporting"],
    status: "Solution example",
    features: ["Operations overview", "Requests and approvals", "Status tracking", "Reports"],
  },
]
