/**
 * Site Content Configuration
 *
 * This file contains all the editable content for Andrew Killinger's personal website.
 * Edit the text here to update the site without touching layout components.
 *
 * Configuration values (LinkedIn, email, form endpoint) are at the top for easy access.
 */

// ============================================================================
// CONFIGURATION - Edit these values
// ============================================================================

export const config = {
  /** LinkedIn profile URL */
  linkedIn: 'https://www.linkedin.com/in/killinger',

  /** Email address for contact */
  email: 'Andrew.killinger@gmail.com',

  /**
   * Formspree form endpoint
   *
   * To set up your contact form:
   * 1. Go to https://formspree.io and create an account
   * 2. Create a new form and copy the form ID
   * 3. Replace 'XXXXXXX' below with your form ID
   *
   * Example: If your form URL is https://formspree.io/f/xyzabc123
   * Then set this to: 'https://formspree.io/f/xyzabc123'
   */
  formspreeEndpoint: 'https://formspree.io/f/XXXXXXX',

  /** Site metadata */
  site: {
    title: 'Andrew Killinger',
    description: 'Andrew Killinger leads corporate brand and digital communications in life sciences and biotech. Senior Director at Acadia Pharmaceuticals.',
    url: 'https://andrewkillinger.com',
    author: 'Andrew Killinger',
  },
} as const;

// ============================================================================
// NAVIGATION
// ============================================================================

export const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'The long way here', href: '#journey' },
  { label: 'What I focus on now', href: '#focus' },
  { label: 'Where I\'m headed', href: '#future' },
  { label: 'My why', href: '#why' },
  { label: 'Bio', href: '#bio' },
  { label: 'Get in touch', href: '#contact' },
] as const;

// ============================================================================
// HERO SECTION
// ============================================================================

export const hero = {
  greeting: "Hi, I'm Andrew.",
  intro: "I lead corporate brand and digital communications work in the life sciences and biotech space.",
  description: [
    "Most of my career has been spent helping organizations explain who they are, especially during moments of change. That work usually sits at the intersection of corporate narrative, digital platforms, and internal alignment. In practice, it means building clarity in complex environments and turning that clarity into systems that scale.",
    "I'm currently a Senior Director at Acadia Pharmaceuticals, where I oversee corporate brand, digital platforms, and owned channels. Before that, I worked across agency and in-house roles at organizations including Illumina and Weber Shandwick.",
    "This site is a place to explain how those experiences fit together, what they've taught me, and where I'm headed next.",
  ],
  /** Companies mentioned in the intro - these will be linked */
  companies: {
    acadia: { name: 'Acadia Pharmaceuticals', url: 'https://acadia.com' },
    illumina: { name: 'Illumina', url: 'https://illumina.com' },
    weberShandwick: { name: 'Weber Shandwick', url: 'https://webershandwick.com' },
  },
} as const;

// ============================================================================
// JOURNEY SECTION - "The long way here"
// ============================================================================

export const journey = {
  title: 'The long way here (and why it mattered)',
  sections: [
    {
      id: 'agency',
      title: 'Agency years: learning under pressure',
      paragraphs: [
        "I started my career on the agency side, during a period when digital and social communications were still being figured out in real time. Agency life was demanding, fast-moving, and occasionally unforgiving, but it was formative in the best way.",
        "Working at Weber Shandwick, I supported pharma, biotech, and healthcare clients navigating reputation, regulation, and growth. Those years taught me how organizations behave under pressure, how stakeholders actually make decisions, and how easily good ideas fail without structure, governance, and follow-through.",
        "Just as importantly, agency work trained me in client service and interpersonal dynamics. You learn quickly how to listen, how to anticipate concerns, and how to translate strategy into language that different audiences can actually use.",
        "That foundation still shapes how I work today.",
      ],
    },
    {
      id: 'inhouse',
      title: 'Moving in-house: building systems, not just campaigns',
      paragraphs: [
        "I moved in-house because I wanted to own outcomes, not just recommendations.",
        "At Illumina, I worked during a particularly formative period for the genomics industry. The company was scaling rapidly, the science was advancing quickly, and expectations for corporate leadership were rising alongside it. That environment sharpened my thinking around category leadership, credibility, and the long-term nature of corporate reputation.",
        "It was also where I began focusing more deeply on owned digital platforms as strategic assets. Websites, social channels, and content ecosystems weren't just distribution tools. They were expressions of organizational maturity and discipline.",
      ],
    },
    {
      id: 'acadia',
      title: 'Acadia: clarity during transition',
      paragraphs: [
        "I'm currently a Senior Director at Acadia Pharmaceuticals, where my role has evolved alongside the company itself.",
        "Acadia has transitioned from a more U.S.-centric organization into a global neuroscience company with a growing pipeline and broader set of stakeholders. My work has focused on supporting that shift through clearer corporate narrative, stronger digital foundations, and more consistent brand expression.",
        "One of the most visible examples of this work has been the recent refresh of Acadia's corporate identity, which I oversaw end-to-end. That effort wasn't about changing how things looked for novelty's sake. It was about aligning the company's external presence with who it is today and where it's going, and building a brand system capable of supporting future growth across markets and audiences.",
      ],
    },
  ],
} as const;

// ============================================================================
// FOCUS SECTION - "What I focus on now"
// ============================================================================

export const focus = {
  title: 'What I focus on now',
  areas: [
    {
      title: 'Corporate brand and reputation',
      description: "Helping organizations articulate who they are and ensuring that story holds up across investors, employees, regulators, and prospective talent.",
    },
    {
      title: 'Owned digital platforms',
      description: "Treating corporate websites and social channels as long-term strategic infrastructure, not campaign vehicles. Emphasis on governance, accessibility, and sustainability.",
    },
    {
      title: 'Operating models and AI',
      description: "Applying AI pragmatically to content operations, insight generation, and workflow efficiency. Less experimentation theater, more durable change.",
    },
    {
      title: 'Cross-functional leadership',
      description: "Working closely with investor relations, corporate communications, commercial marketing, talent acquisition, legal, and external partners to align priorities and execution.",
    },
  ],
  closing: "Across all of this, my bias is toward structure, clarity, and repeatability.",
} as const;

// ============================================================================
// FUTURE SECTION - "Where I'm headed"
// ============================================================================

export const future = {
  title: "Where I'm headed",
  paragraphs: [
    "I'm at a stage in my career where I'm focused on expanding scope and impact as a leader.",
    "I'm interested in roles that sit closer to enterprise strategy, where brand, reputation, and digital platforms are treated as core business drivers rather than support functions. Titles matter less to me than responsibility, trust, and the ability to shape systems that endure.",
  ],
} as const;

// ============================================================================
// WHY SECTION - "My why"
// ============================================================================

export const why = {
  title: 'My "why"',
  paragraphs: [
    "Outside of work, my priorities are simple.",
    "My wife and I have two daughters, and much of how I think about time, energy, and ambition is shaped by wanting to be present for them while still doing meaningful work. Family keeps me grounded and honest about what actually matters.",
    "It's also a reminder that the organizations we build and represent have real downstream effects on people's lives, not just on balance sheets or brand trackers.",
  ],
} as const;

// ============================================================================
// BIO SECTION
// ============================================================================

export const bio = {
  title: 'Bio',
  name: 'Andrew Killinger',
  paragraphs: [
    "Andrew Killinger is a Senior Director of Corporate Brand and Digital Communications at Acadia Pharmaceuticals. He leads corporate brand strategy, digital platforms, and owned channels, supporting the company's evolution into a global neuroscience organization.",
    "Andrew's career spans agency and in-house roles across life sciences and biotech, including experience at Illumina and Weber Shandwick, where he supported pharma, biotech, and healthcare organizations navigating growth, regulation, and reputation. His work sits at the intersection of corporate narrative, digital infrastructure, and organizational change.",
    "He is particularly focused on treating brand and digital platforms as long-term strategic assets, and on applying AI responsibly to improve how teams plan, create, and govern content.",
    "Andrew lives in Southern California with his wife and two daughters.",
  ],
} as const;

// ============================================================================
// HEADSHOT SECTION
// ============================================================================

/**
 * Headshot Configuration
 *
 * TODO: Replace the placeholder headshot
 *
 * To add your headshot:
 * 1. Add your high-resolution headshot image to: src/assets/headshot.jpg
 *    (Supported formats: .jpg, .jpeg, .png, .webp)
 * 2. Recommended size: at least 400x400 pixels
 * 3. The image will be automatically optimized and displayed responsively
 *
 * The placeholder will show a styled box until you add your image.
 */
export const headshot = {
  alt: 'Andrew Killinger',
  caption: 'Andrew Killinger',
} as const;

// ============================================================================
// CONTACT SECTION
// ============================================================================

export const contact = {
  title: 'Get in touch',
  intro: 'Have a question or want to start a conversation?',
  form: {
    namePlaceholder: 'Your name',
    emailPlaceholder: 'Your email',
    messagePlaceholder: 'Your message',
    submitText: 'Send message',
    submittingText: 'Sending...',
    successMessage: 'Thank you for your message. I\'ll get back to you soon.',
    errorMessage: 'Something went wrong. Please try again or email me directly.',
  },
  note: 'You can also reach me directly via email or connect on LinkedIn.',
} as const;

// ============================================================================
// FOOTER
// ============================================================================

export const footer = {
  copyright: `© ${new Date().getFullYear()} Andrew Killinger`,
} as const;

// ============================================================================
// SEO / STRUCTURED DATA
// ============================================================================

export const seo = {
  title: 'Andrew Killinger | Corporate Brand & Digital Communications Leader',
  description: 'Andrew Killinger leads corporate brand and digital communications in life sciences and biotech. Senior Director at Acadia Pharmaceuticals, with experience at Illumina and Weber Shandwick.',
  ogImage: '/og-image.png', // TODO: Add an Open Graph image to public/og-image.png
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Andrew Killinger',
    jobTitle: 'Senior Director, Corporate Brand and Digital Communications',
    worksFor: {
      '@type': 'Organization',
      name: 'Acadia Pharmaceuticals',
      url: 'https://acadia.com',
    },
    url: 'https://andrewkillinger.com',
    sameAs: ['https://www.linkedin.com/in/killinger'],
    email: 'mailto:Andrew.killinger@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Southern California',
      addressCountry: 'USA',
    },
  },
} as const;
