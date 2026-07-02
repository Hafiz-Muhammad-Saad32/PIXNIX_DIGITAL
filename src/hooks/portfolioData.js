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
    caseStudy: {
      summary:
        'A refined identity system that elevated the brand from conventional luxury to a more editorial, modern experience across digital and physical touchpoints.',
      challenge:
        'The brand needed a memorable presence that could support premium positioning without feeling overdesigned or disconnected from its audience.',
      approach:
        'We built a flexible identity system rooted in typography, texture, and a restrained palette, then applied it across packaging, brand guidelines, and launch assets.',
      deliverables: ['Visual identity', 'Packaging design', 'Guidelines deck', 'Launch collateral'],
      stats: [
        { label: 'Launch scope', value: '8 touchpoints' },
        { label: 'Result', value: 'Premium positioning uplift' },
      ],
      results: [
        'Established a consistent luxury narrative across every customer-facing touchpoint.',
        'Created a system that felt premium, timeless, and ready for future product drops.',
      ],
      quote: 'The new identity made the brand feel unmistakably premium from the very first interaction.',
    },
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
    caseStudy: {
      summary:
        'A dashboard experience designed to turn product discovery into confident action with faster onboarding and clearer information architecture.',
      challenge:
        'The product had strong value but lacked a cohesive interface that made complex workflows feel simple and trust-building.',
      approach:
        'We restructured core flows, created a polished visual system, and introduced motion patterns that made navigation feel fluid and reassuring.',
      deliverables: ['UI system', 'Dashboard UX', 'Interactive prototypes', 'React implementation'],
      stats: [
        { label: 'Focus', value: 'Conversion path' },
        { label: 'Outcome', value: 'Faster onboarding' },
      ],
      results: [
        'Improved clarity across onboarding and core platform actions.',
        'Delivered a product experience that felt premium and easier to trust.',
      ],
      quote: 'The product finally felt as sharp as the value it delivered.',
    },
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
    caseStudy: {
      summary:
        'A content-led growth sprint that transformed the brand’s social presence into a high-performing machine for reach, storytelling, and conversion.',
      challenge:
        'The brand had momentum but lacked a repeatable content system that could scale without sacrificing consistency or quality.',
      approach:
        'We introduced a streamlined content framework, built a stronger visual language, and aligned every post to conversion-focused hooks and campaign moments.',
      deliverables: ['Content roadmap', 'Carousel systems', 'Reel direction', 'Copywriting framework'],
      stats: [
        { label: 'Growth', value: '2.8x followers' },
        { label: 'Engagement', value: '+40%' },
      ],
      results: [
        'Raised engagement through more intentional storytelling and stronger creative consistency.',
        'Built a repeatable system that helped the brand stay visible and relevant.',
      ],
      quote: 'The content stopped feeling random and started acting like a growth engine.',
    },
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
    caseStudy: {
      summary:
        'An automation layer that gave support teams back time while keeping customer conversations fast, helpful, and highly consistent.',
      challenge:
        'Support demand was outpacing the team and a large portion of interactions were repetitive, making efficiency and response quality difficult to maintain.',
      approach:
        'We built a WhatsApp-first assistant with clear escalation logic, contextual answers, and a lightweight system that learned from real conversations.',
      deliverables: ['Bot flow design', 'WhatsApp integration', 'Fallback logic', 'Automation analytics'],
      stats: [
        { label: 'Queries handled', value: '300+/day' },
        { label: 'Human handoff', value: 'Minimal' },
      ],
      results: [
        'Reduced repetitive support load while keeping conversations responsive and helpful.',
        'Created a scalable experience that could grow alongside the business.',
      ],
      quote: 'The bot became a 24/7 support layer that felt like an extension of the team.',
    },
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
    caseStudy: {
      summary:
        'A cinematic launch film that translated a technical product into a confident story with clarity, energy, and emotion.',
      challenge:
        'The startup needed a launch moment that could cut through noise and communicate the product’s value in under a minute.',
      approach:
        'We shaped a concise narrative, built motion-led pacing, and designed each frame to make the product feel exciting and instantly understandable.',
      deliverables: ['Concept scripting', 'Motion design', 'Editing', 'Launch cut'],
      stats: [
        { label: 'Length', value: '60 sec' },
        { label: 'Outcome', value: 'Launch-ready film' },
      ],
      results: [
        'Delivered a strong launch asset that worked across socials, decks, and paid campaigns.',
        'Created a memorable product story that made the brand feel more polished and confident.',
      ],
      quote: 'It felt like the product finally had a cinematic voice.',
    },
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
    caseStudy: {
      summary:
        'A paid media system that paired sharper creative with tighter targeting to improve efficiency and unlock new levels of growth.',
      challenge:
        'The brand was spending steadily but needed stronger message-market fit and better creative feedback loops to improve return on ad spend.',
      approach:
        'We rebuilt the ad structure around audience intent, refreshed the creative direction, and tightened the funnel based on performance insights.',
      deliverables: ['Ad strategy', 'Creative direction', 'Audience segmentation', 'Optimization cadence'],
      stats: [
        { label: 'ROAS', value: '4.2x' },
        { label: 'Window', value: '45 days' },
      ],
      results: [
        'Improved ad efficiency through sharper creative and clearer targeting.',
        'Created a growth loop that made future campaigns more predictable and scalable.',
      ],
      quote: 'The campaign went from noise to momentum, very quickly.',
    },
  },
]

// All unique categories derived from data (keeps filters in sync automatically)
export const CATEGORIES = ['All', ...new Set(PROJECTS.map((p) => p.category))]
