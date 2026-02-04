/**
 * Site Content Configuration
 *
 * All editable content for Andrew Killinger's personal website.
 */

// ============================================================================
// CONFIGURATION
// ============================================================================

export const config = {
  linkedIn: 'https://www.linkedin.com/in/killinger',
  email: 'Andrew.killinger@gmail.com',
  formspreeEndpoint: 'https://formspree.io/f/XXXXXXX',
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
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
] as const;

// ============================================================================
// HERO SECTION
// ============================================================================

export const hero = {
  name: 'Andrew Killinger',
  role: 'Senior Director, Corporate Brand & Digital Communications',
  company: {
    name: 'Acadia Pharmaceuticals',
    url: 'https://acadia.com',
  },
  intro: "I help organizations explain who they are\u2014especially during moments of change. My work sits at the intersection of corporate narrative, digital platforms, and internal alignment: building clarity in complex environments and turning it into systems that scale.",
} as const;

// ============================================================================
// ABOUT SECTION
// ============================================================================

export const about = {
  title: 'About',
  background: {
    heading: 'Background',
    paragraphs: [
      "I started on the agency side at <a href=\"https://webershandwick.com\" target=\"_blank\" rel=\"noopener noreferrer\">Weber Shandwick</a>, supporting pharma, biotech, and healthcare clients navigating reputation, regulation, and growth. Agency life taught me how organizations behave under pressure, how stakeholders make decisions, and how easily good ideas fail without structure and follow-through.",
      "I moved in-house because I wanted to own outcomes, not just recommendations. At <a href=\"https://illumina.com\" target=\"_blank\" rel=\"noopener noreferrer\">Illumina</a>, I worked during a formative period for the genomics industry\u2014sharpening my thinking around category leadership, credibility, and the long-term nature of corporate reputation.",
      "Now at <a href=\"https://acadia.com\" target=\"_blank\" rel=\"noopener noreferrer\">Acadia Pharmaceuticals</a>, I oversee corporate brand, digital platforms, and owned channels as the company has transitioned into a global neuroscience organization. I recently led an end-to-end refresh of Acadia\u2019s corporate identity\u2014aligning external presence with where the company is headed.",
    ],
  },
  focus: {
    heading: 'What I focus on',
    areas: [
      'Corporate brand and reputation',
      'Owned digital platforms as strategic infrastructure',
      'AI applied pragmatically to content operations',
      'Cross-functional alignment across IR, comms, commercial, legal, and talent',
    ],
    closing: "My bias is toward structure, clarity, and repeatability.",
  },
  personal: {
    heading: 'Beyond work',
    paragraph: "My wife and I have two daughters, and much of how I think about time, energy, and ambition is shaped by wanting to be present for them while still doing meaningful work. It\u2019s a reminder that the organizations we build have real downstream effects on people\u2019s lives.",
  },
} as const;

// ============================================================================
// CONTACT SECTION
// ============================================================================

export const contact = {
  title: 'Get in touch',
  intro: 'Interested in connecting? Send a message or reach out directly.',
  form: {
    namePlaceholder: 'Your name',
    emailPlaceholder: 'Your email',
    messagePlaceholder: 'Your message',
    submitText: 'Send message',
    submittingText: 'Sending...',
    successMessage: 'Thank you for your message. I\'ll get back to you soon.',
    errorMessage: 'Something went wrong. Please try again or email me directly.',
  },
} as const;

// ============================================================================
// FOOTER
// ============================================================================

export const footer = {
  copyright: `\u00A9 ${new Date().getFullYear()} Andrew Killinger`,
} as const;

// ============================================================================
// SEO / STRUCTURED DATA
// ============================================================================

export const seo = {
  title: 'Andrew Killinger | Corporate Brand & Digital Communications',
  description: 'Andrew Killinger leads corporate brand and digital communications in life sciences and biotech. Senior Director at Acadia Pharmaceuticals.',
  ogImage: '/og-image.png',
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
