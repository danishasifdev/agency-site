// ============================================================
// SITE CONFIG - edit everything here. No need to touch components.
// ============================================================

export const AGENCY = {
  name: "Studio Nine", // TODO: swap once the name is finalized
  shortName: "N9", // used in the nav mark / favicon-style logo
  tagline: "Websites, web apps, and AI - built to launch.",
  email: "hello@studionine.co",
  phone: "+1 (555) 010-2938",
  location: "Remote - working with clients worldwide",
  founded: 2019,
};

// ---- WhatsApp -------------------------------------------------
// This powers ONLY the single floating chat button - every other CTA on the
// site points to the on-page contact form instead.
export const WHATSAPP = {
  number: "15550102938", // TODO: replace with the real business number
  defaultMessage: "Hi! I'd like to talk about a project.",
};

export function whatsappLink(message) {
  const text = encodeURIComponent(message || WHATSAPP.defaultMessage);
  return `https://wa.me/${WHATSAPP.number}?text=${text}`;
}

// ---- Contact form API -------------------------------------------------
// Uses Web3Forms (https://web3forms.com) - free, no backend required, just
// an access key. Get one at https://web3forms.com, then add it to .env.local:
//   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your-key-here
// (an .env.local.example file is included in the project root)
export const CONTACT_API = {
  endpoint: "https://api.web3forms.com/submit",
  accessKeyEnvVar: "NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY",
};

export const SOCIAL_LINKS = [
  { label: "Twitter / X", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Dribbble", href: "#" },
];

// ---- Trust / stats bar -------------------------------------------------
export const STATS = [
  { value: 60, suffix: "+", label: "Projects delivered" },
  { value: 45, suffix: "+", label: "Clients worked with" },
  { value: 4.9, suffix: "/5", label: "Average client rating" },
  {
    value: new Date().getFullYear() - 2019,
    suffix: "+ yrs",
    label: "In business",
  },
];

// ---- Pricing -------------------------------------------------
// basePrice is the flat starting price shown everywhere.
// Custom work is always "request a quote" - no hardcoded ceiling.
export const PRICING = {
  currency: "$",
  basePrice: 500,
  basePriceNote: "one-time, starting price",
  baseIncludes: [
    "Up to 5 pages, fully responsive",
    "Custom design - no templates",
    "Basic on-page SEO setup",
    "Contact form + analytics wired up",
    "2 rounds of revisions",
    "Launch on your domain + hosting help",
  ],
  customNote:
    "Web apps, larger sites, ongoing SEO, and AI features are scoped after a quick call, since every project's shape is different.",
  customIncludes: [
    "Web applications & dashboards",
    "AI features (chat, search, automation)",
    "Ongoing SEO & content strategy",
    "E-commerce & booking systems",
  ],
};

// ---- Nav -------------------------------------------------
export const NAV_LINKS = [
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/#projects" },
  { label: "Process", href: "/#process" },
  { label: "Pricing", href: "/#pricing" },
];

// ---- Services -------------------------------------------------
export const SERVICES = [
  {
    id: "websites",
    icon: "Globe",
    title: "Websites",
    description:
      "Marketing sites, portfolios, and landing pages that load fast and convert - designed from scratch for your brand.",
    points: ["Custom design", "Fast, responsive builds", "Built-in SEO basics"],
  },
  {
    id: "webapps",
    icon: "LayoutDashboard",
    title: "Web Apps",
    description:
      "Dashboards, portals, and internal tools. If it needs logins, data, or logic behind it, this is that.",
    points: [
      "Auth & user accounts",
      "Databases & APIs",
      "Scales with your product",
    ],
  },
  {
    id: "seo",
    icon: "TrendingUp",
    title: "SEO",
    description:
      "Technical SEO and on-page structure so search engines actually understand what you've built.",
    points: [
      "Technical audits",
      "On-page optimization",
      "Ongoing tracking (soon)",
    ],
  },
  {
    id: "ai",
    icon: "Sparkles",
    title: "AI Features",
    description:
      "Chatbots, smart search, content generation, and automation layered into your site or app.",
    points: ["Custom AI chat", "Workflow automation", "Smart search & recs"],
  },
];

// ---- Process -------------------------------------------------
export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Send us a message",
    description:
      "Tell us what you're building. A few lines is enough - we'll follow up with the right questions.",
  },
  {
    number: "02",
    title: "Meet & scope",
    description:
      "A short call to understand goals, timeline, and budget. This is where custom pricing gets locked in.",
  },
  {
    number: "03",
    title: "Design & build",
    description:
      "You'll see progress early and often - not a surprise reveal at the end.",
  },
  {
    number: "04",
    title: "Launch & support",
    description:
      "We ship it, wire up analytics, and stick around for the first fixes.",
  },
];

// ---- Projects / Portfolio (dummy placeholders) -------------------------------------------------
// image: [gradientFrom, gradientTo] used to render a placeholder thumbnail - swap for
// real screenshots later by adding an `image: "/projects/slug.png"` field instead.
export const PROJECTS = [
  {
    id: 1,
    slug: "lumen-finance",
    name: "Lumen Finance",
    category: "Web App",
    accent: "#6366f1",
    image: ["#6366f1", "#312e81"],
    summary:
      "A client dashboard for a fintech startup managing investor reporting.",
    description:
      "Lumen needed a portal where investors could log in and see fund performance without emailing the team for updates. We built a dashboard with role-based access, live charts, and automated monthly statements.",
    tags: ["Web App", "Dashboard", "Auth"],
    results: [
      { label: "Support emails", value: "-64%" },
      { label: "Investor logins / mo", value: "1,200+" },
      { label: "Build time", value: "5 weeks" },
    ],
  },
  {
    id: 2,
    slug: "aria-skincare",
    name: "Aria Skincare",
    category: "Website",
    accent: "#e07a5f",
    image: ["#e07a5f", "#7d3c2f"],
    summary:
      "A direct-to-consumer skincare brand's storefront and landing pages.",
    description:
      "Aria came to us with a Shopify theme that didn't reflect the brand. We redesigned the storefront, rebuilt the product pages around real customer questions, and wired up on-page SEO from scratch.",
    tags: ["Website", "E-commerce", "SEO"],
    results: [
      { label: "Conversion rate", value: "+38%" },
      { label: "Page load time", value: "1.1s" },
      { label: "Organic traffic", value: "+52%" },
    ],
  },
  {
    id: 3,
    slug: "northpoint-legal",
    name: "Northpoint Legal",
    category: "Website + SEO",
    accent: "#3d5a80",
    image: ["#3d5a80", "#1b263b"],
    summary:
      "A local law firm's site rebuild, focused on ranking for local search.",
    description:
      "Northpoint was invisible on search for the terms that actually bring in clients. We rebuilt the site with proper technical SEO foundations and location-specific pages, then tracked rankings monthly.",
    tags: ["Website", "Local SEO"],
    results: [
      { label: "Local search ranking", value: "Top 3" },
      { label: "Inbound inquiries / mo", value: "+21" },
      { label: "Time to rank", value: "3 months" },
    ],
  },
  {
    id: 4,
    slug: "sequence-ai",
    name: "Sequence AI",
    category: "AI Feature",
    accent: "#2a9d8f",
    image: ["#2a9d8f", "#12403a"],
    summary:
      "An AI-powered search and chat layer added to an existing product.",
    description:
      "Sequence's users were stuck digging through docs to find answers. We layered in an AI chat assistant trained on their knowledge base, plus smart search with semantic ranking.",
    tags: ["AI", "Search", "Chat"],
    results: [
      { label: "Support ticket volume", value: "-31%" },
      { label: "Avg. time to answer", value: "8s" },
      { label: "Weekly active users", value: "2,400+" },
    ],
  },
];

// ---- Testimonials (dummy placeholders) -------------------------------------------------
export const TESTIMONIALS = [
  {
    quote:
      "They scoped the project properly instead of just quoting a number. Nothing felt rushed.",
    name: "Dummy Client",
    role: "Founder, placeholder company",
  },
  {
    quote:
      "We didn't know we needed an AI search feature until they suggested it. It's the thing customers mention most now.",
    name: "Dummy Client",
    role: "Head of Product, placeholder company",
  },
  {
    quote:
      "Fast replies, clear pricing, and the site actually loads fast. Rare combination.",
    name: "Dummy Client",
    role: "Marketing Lead, placeholder company",
  },
  {
    quote:
      "Communication was constant. We never once had to ask 'so what's the status?'",
    name: "Dummy Client",
    role: "Operations Lead, placeholder company",
  },
  {
    quote:
      "The site they built for us still loads faster than any competitor's, a year later.",
    name: "Dummy Client",
    role: "CTO, placeholder company",
  },
];

// ---- FAQ -------------------------------------------------
export const FAQS = [
  {
    question: "How long does a project take?",
    answer:
      "A standard website usually takes 2–4 weeks from kickoff to launch. Web apps and AI features vary - we'll give you a timeline after scoping.",
  },
  {
    question: `Is ${PRICING.currency}${PRICING.basePrice} really the starting price?`,
    answer:
      "Yes - that covers a standard marketing site as described in the pricing section. Anything bigger (web apps, AI features, ongoing SEO) is scoped in a short call so the quote actually matches the work.",
  },
  {
    question: "Do you offer ongoing maintenance?",
    answer:
      "Not yet as a formal plan - it's on the roadmap alongside marketing services. For now we handle post-launch fixes directly.",
  },
  {
    question: "What do you need from me to get started?",
    answer:
      "Just a short description of what you're trying to build. We'll ask for brand assets, copy, and references once we're scoped in.",
  },
];

// ---- Footer -------------------------------------------------
export const FOOTER_COLUMNS = [
  {
    title: "Services",
    links: [
      { name: "Websites", url: "#services" },
      { name: "Web Apps", url: "#services" },
      { name: "SEO", url: "#services" },
      { name: "AI Features", url: "#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "Projects", url: "#projects" },
      { name: "Process", url: "#process" },
      { name: "Pricing", url: "#pricing" },
      { name: "FAQ", url: "#faq" },
    ],
  },
  {
    title: "Get in touch",
    links: [AGENCY.email, AGENCY.phone, AGENCY.location],
  },
];
