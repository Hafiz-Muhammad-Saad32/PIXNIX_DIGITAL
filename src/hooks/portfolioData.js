// portfolioData.js — Single source of truth for all portfolio projects
// Import this in both HomePortfolioPreview and PortfolioPage

export const PROJECTS = [
  {
    id: 'pb1',
    featured: true,
    category: 'Branding',
    title: 'Luxe Fashion Brand Identity',
    description:
      'Full brand identity system for a premium fashion label — logo, typography, color palette, packaging, and brand guidelines built from scratch.',
    tags: ['Logo Design', 'Brand Guidelines', 'Packaging', 'Print'],
    gradient: 'from-purple-950 to-purple-700',
    accentColor: '#a855f7',
    liveUrl: 'https://nawaya.io',
    sourceUrl: null, // design project — no source
    year: '2024',
  },
  {
    id: 'pb2',
    featured: true,
    category: 'Web Dev',
    title: 'SaaS Dashboard Platform',
    description:
      'A modern, conversion-focused web platform for a B2B SaaS product. Built in React with clean UI/UX and smooth animations.',
    tags: ['React', 'UI/UX', 'Dashboard', 'Tailwind CSS'],
    gradient: 'from-blue-950 to-blue-700',
    accentColor: '#3b82f6',
    liveUrl: '#',
    sourceUrl: '#',
    year: '2024',
  },
  {
    id: 'pb3',
    featured: true,
    category: 'Social Media',
    title: 'E-commerce Growth Campaign',
    description:
      '3-month content strategy and design system for a growing e-commerce brand. Resulted in 2.8× follower growth and 40% higher engagement.',
    tags: ['Content Design', 'Strategy', 'Copywriting', 'Reels'],
    gradient: 'from-purple-950 to-purple-600',
    accentColor: '#c026d3',
    liveUrl: '#',
    sourceUrl: null,
    year: '2024',
  },
  {
    id: 'pb4',
    featured: false,
    category: 'AI Agent',
    title: 'Smart Customer Bot Deploy',
    description:
      'AI-powered customer service agent for a retail business — handling 300+ queries/day with zero human intervention via WhatsApp.',
    tags: ['AI Agent', 'Automation', 'WhatsApp Integration', 'Node.js'],
    gradient: 'from-teal-950 to-teal-700',
    accentColor: '#14b8a6',
    liveUrl: '#',
    sourceUrl: '#',
    year: '2025',
  },
  {
    id: 'pb5',
    featured: false,
    category: 'Video',
    title: 'Startup Launch Reel',
    description:
      "High-energy launch reel for a tech startup's product reveal — scripted, edited, and motion-designed entirely in-house.",
    tags: ['Video Editing', 'Motion Graphics', 'Brand Film', 'After Effects'],
    gradient: 'from-red-950 to-red-600',
    accentColor: '#ef4444',
    liveUrl: '#',
    sourceUrl: null,
    year: '2025',
  },
  {
    id: 'pb6',
    featured: false,
    category: 'Ads & Marketing',
    title: 'Meta Ads 4× ROAS Scale',
    description:
      'Full Meta Ads campaign for a D2C brand — creative strategy, targeting, and optimisation. Achieved 4.2× ROAS in 45 days.',
    tags: ['Meta Ads', 'Google Ads', 'Creative Strategy', 'ROAS'],
    gradient: 'from-blue-950 to-purple-800',
    accentColor: '#818cf8',
    liveUrl: '#',
    sourceUrl: null,
    year: '2025',
  },
]

// All unique categories derived from data (keeps filters in sync automatically)
export const CATEGORIES = ['All', ...new Set(PROJECTS.map((p) => p.category))]
