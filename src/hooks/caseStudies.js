// All Pixnix Digital case-study content lives here.
// `img` is optional — drop a screenshot into /public/case-studies and point
// to it (e.g. "/case-studies/nawaya.jpg"). Leave it null to fall back to the icon.

const caseStudies = [
  {
    id: "nawaya",
    icon: "🚀",
    featured: true,
    img: "/img/portfolioPics/Nawaya.webp",
    cat: "SaaS Platform Development",
    name: "Nawaya.io",
    headline:
      "Full-Stack Career Networking SaaS: Architecture, Real-Time Systems & Production Deployment",
    tagline: "98% uptime. Thousands of concurrent users. Zero manual intervention.",
    h1: "Nawaya.io Case Study: Full-Stack Career Networking SaaS Platform Development",
    metaTitle: "Nawaya.io Case Study | Custom SaaS Platform Development",
    metaDescription:
      "See how Pixnix Digital built Nawaya.io, a full-stack career networking SaaS platform with real-time messaging, from architecture to production deployment. React, Node.js, MongoDB, Socket.io.",
    keywords:
      "SaaS platform development case study, custom SaaS development company, real-time messaging app development, Node.js MongoDB development agency, career networking platform development, full-stack SaaS development services",
    url: "https://nawaya.io/",
    tech: [
      "React.js",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
      "Tailwind CSS",
      "Cloudinary",
      "Nginx",
      "PM2",
    ],
    thumb: "#1a0630",
    challenge:
      "Nawaya needed more than just a website: they needed a complete, production-grade SaaS platform capable of connecting professionals with opportunities, enabling real-time networking, and scaling without breaking. The challenge was building a system from scratch that could handle user authentication, live messaging, profile management, media storage, and opportunity matching: all running simultaneously in production, without downtime.",
    built:
      "Pixnix Digital handled the complete development lifecycle. We designed the system architecture from the ground up, built a React.js/Vite frontend, developed a clean REST API with Node.js and Express.js, and integrated MongoDB for scalable data. Socket.io powers real-time messaging and notifications. Cloudinary handles all media. The entire system was then deployed on a VPS with Nginx reverse proxy and PM2 for high availability.",
    deliverables: [
      [
        "Automated SaaS Workflows",
        "Fully automated onboarding, opportunity matching, and profile updates: zero manual intervention.",
      ],
      [
        "Real-Time Communication",
        "Socket.io powers live messaging, notifications, and status updates platform-wide.",
      ],
      [
        "JWT Authentication",
        "Secure, token-based authentication protecting all user data and access routes.",
      ],
      [
        "Cloudinary Media Storage",
        "Cloud-based media handling for profile images, resumes, and assets at scale.",
      ],
      [
        "VPS Production Deployment",
        "Nginx reverse proxy and PM2 process manager for high availability.",
      ],
      ["REST API Architecture", "Clean, scalable API powering all platform functionality."],
    ],
    results: [
      "98% uptime in production",
      "Handles thousands of concurrent users",
      "Zero manual intervention across all core workflows",
      "Smooth real-time networking experience live in production",
    ],
    quote: "A platform that works at scale, delivered end-to-end: from architecture to deployment.",
  },
  {
    id: "mgt",
    icon: "📦",
    featured: true,
    img: "/img/portfolioPics/mgt.webp",
    cat: "Business Website + AI Chatbot",
    name: "MGT Packers & Movers",
    headline:
      "Conversion-First Business Website With 24/7 AI Lead Capture: Built for a Relocation Business That Never Closes",
    tagline: "No enquiry missed. No business hours. Every visitor captured.",
    h1: "MGT Packers & Movers Case Study: Business Website With 24/7 AI Chatbot",
    metaTitle: "MGT Packers & Movers Case Study | Website + AI Chatbot Development",
    metaDescription:
      "How Pixnix Digital built a conversion-first business website with a 24/7 AI lead-capture chatbot for MGT Packers & Movers, turning every visitor into a captured lead.",
    keywords:
      "business website with AI chatbot, AI chatbot development case study, moving company website design, 24/7 lead capture chatbot, conversion-focused business website, AI lead generation chatbot",
    url: "https://mgt-packers-and-movers.vercel.app/",
    tech: ["Next.js", "React.js", "Tailwind CSS", "AI Chatbot", "WhatsApp API", "Vercel"],
    thumb: "#0a1a2e",
    challenge:
      "MGT Packers & Movers were losing potential customers outside business hours: no one was available to respond to enquiries. They needed a professional digital presence that not only looked trustworthy but actively captured leads around the clock, without increasing their operational team.",
    built:
      "We designed and developed a full conversion-focused website in Next.js, integrated a 24/7 AI chatbot that captures leads and answers customer queries at any hour, and added prominent WhatsApp and call CTAs throughout the page. A dedicated fleet showcase and full service breakdown build credibility instantly. The site is also SEO-configured with localized meta content for Pakistan search visibility.",
    deliverables: [
      [
        "AI Chatbot Integration",
        "24/7 automated lead capture and customer assistance outside business hours.",
      ],
      [
        "Lead Generation Form",
        "Conversion-optimized form capturing customer details and relocation requirements.",
      ],
      [
        "WhatsApp & Call CTAs",
        "Prominent direct-contact buttons driving immediate customer communication.",
      ],
      ["Fleet Showcase", "Dedicated section building trust through transparent capability display."],
      [
        "SEO-Friendly Structure",
        "Optimized meta tags and localized content for Pakistan search rankings.",
      ],
      ["Vercel Deployment", "Fast, reliable hosting with global CDN performance."],
    ],
    results: [
      "24/7 lead capture: no business hour dependency",
      "Zero increase in operational overhead",
      "Direct WhatsApp and call conversions from every page",
      "Professional online presence that builds immediate trust",
    ],
    quote: "Leads coming in at 2am. The AI chatbot handles it: the business owner doesn't have to.",
  },
  {
    id: "1and5tech",
    icon: "🛒",
    featured: true,
    img: "/img/portfolioPics/1and5tech.webp",
    cat: "E-Commerce Development",
    name: "1 AND 5 TECH",
    headline:
      "Product-First E-Commerce Store Built to Turn Browsers Into Buyers: Every Layout Decision Made for Conversion",
    tagline: "Clean. Fast. Built to sell.",
    h1: "1 AND 5 TECH Case Study: E-Commerce Store Built to Convert Browsers Into Buyers",
    metaTitle: "1 AND 5 TECH Case Study | E-Commerce Website Development",
    metaDescription:
      "See how Pixnix Digital designed and developed a product-first e-commerce store for 1 AND 5 TECH — fast, clean, and built around conversion at every layout decision.",
    keywords:
      "e-commerce website development case study, custom online store development, e-commerce store design agency, product page conversion design, e-commerce development company",
    url: "https://stage.1and5tech.com/",
    tech: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "E-Commerce Cart",
      "Responsive UI",
      "Web Hosting",
    ],
    thumb: "#0d1f15",
    challenge:
      "1 AND 5 TECH needed a professional digital storefront that could present their products clearly, build buyer trust instantly, and guide visitors through to a completed purchase without friction. The risk: a poorly structured store that confused customers, buried products, or lost them at checkout.",
    built:
      "We built a complete e-commerce platform with a product-first layout designed to reduce friction at every step. Next.js frontend for performance and SEO, structured product catalog with category-based browsing, full product detail pages with images and pricing, and a working cart and checkout flow optimized to minimize drop-off. Fully responsive, scalable architecture ready for future growth.",
    deliverables: [
      [
        "Modern E-Commerce Storefront",
        "Professional layout designed to convert first-time visitors into buyers.",
      ],
      [
        "Product Catalog & Category Browsing",
        "Structured listings with clear filters for fast navigation.",
      ],
      ["Product Detail Pages", "Full information, images, pricing, and purchase options."],
      ["Shopping Cart & Checkout Flow", "Streamlined cart-to-checkout built to minimize drop-off."],
      ["Responsive Design", "Smooth shopping experience across all devices."],
      ["Scalable Architecture", "Supports future product additions without a rebuild."],
    ],
    results: [
      "Full e-commerce functionality live in production",
      "Mobile-first shopping experience across all devices",
      "Scalable structure ready for catalog growth",
      "Checkout flow optimized to reduce customer drop-off",
    ],
    quote: "A storefront that does the selling: visitors land, browse, and buy.",
  },
  {
    id: "pawtrust",
    featured: true,
    img: "/img/portfolioPics/pawtrust.webp",
    cat: "Wordpress Website",
    name: "The Paw Trust",
    headline:
      "Purpose-Driven Website for an Animal Welfare Nonprofit: Built to Convert Compassion Into Adoption, Donation & Volunteering",
    tagline: "Every visitor guided toward meaningful action.",
    h1: "The Paw Trust Case Study: Nonprofit WordPress Website for Animal Welfare",
    metaTitle: "The Paw Trust Case Study | Nonprofit WordPress Website Design",
    metaDescription:
      "How Pixnix Digital built a purpose-driven WordPress website for animal welfare nonprofit The Paw Trust, converting compassion into adoptions, donations, and volunteers.",
    keywords:
      "nonprofit website design case study, WordPress website development company, animal welfare website design, donation website development, charity website design agency",
    url: "https://thepawtrust.org/",
    tech: [
      "WordPress",
      "WordPress Admin",
      "Contact Form",
      "Social Media Integration",
      "Responsive Design",
    ],
    thumb: "#1a1005",
    challenge:
      "The Paw Trust rescues and rehomes abandoned dogs: but needed a digital home that matched the heart behind the mission. The challenge was creating an emotional experience that made visitors feel the cause, trust the organization, and actually take action. It also needed to be fully self-managed so the nonprofit team could update it without any developer dependency.",
    built:
      "We built a complete WordPress website designed around emotional resonance and clear calls to action. The site opens with 'Together, We Can Give Them a Second Chance': every element from that point guides visitors toward meaningful engagement. Core pages cover the mission, rescue process, adoption listings, donation impact, and a contact form. Social media links drive community building across Facebook, Instagram, and LinkedIn.",
    deliverables: [
      ["WordPress CMS", "Fully self-managed: no developer needed for updates."],
      [
        "Nonprofit-Focused Design",
        "Emotional, warm design that builds trust with donors and adopters.",
      ],
      [
        "Adoption CTA Sections",
        "Clear pathways guiding visitors to give a rescued dog a forever home.",
      ],
      [
        "Donation Page",
        "Explains exactly how contributions fund food, medical care, and shelter.",
      ],
      [
        "Contact Form Integration",
        "Easy enquiry form for adoptions, donations, and volunteering.",
      ],
      [
        "Social Media Integration",
        "Facebook, Instagram, and LinkedIn connected for community growth.",
      ],
    ],
    results: [
      "Professional nonprofit presence live and self-managed",
      "Adoption, donation, and volunteer pathways clearly presented",
      "Zero developer dependency: team updates site independently",
      "Community building active via integrated social channels",
    ],
    quote: "More than a website: a digital home for a cause that saves lives.",
  },
  {
    id: "zavia",
    icon: "🍽️",
    img: "/img/portfolioPics/zavia.webp",
    cat: "Custom SaaS / Management System",
    name: "Zavia Restaurant System",
    headline:
      "Complete Restaurant Management System: Orders, Kitchen, Inventory, Finance & Reports in One Dashboard",
    tagline: "One system. Zero paperwork. Full control.",
    h1: "Zavia Case Study: Custom Restaurant Management System (Orders, Kitchen, Inventory & Finance)",
    metaTitle: "Zavia Case Study | Custom Restaurant Management SaaS Development",
    metaDescription:
      "How Pixnix Digital built Zavia, a complete restaurant management system covering orders, kitchen, inventory, finance, and reports in one dashboard. React, Node.js, MongoDB.",
    keywords:
      "restaurant management system development, custom SaaS development case study, restaurant software development company, order and inventory management system, MERN stack development agency",
    url: "https://zavia-black.vercel.app/",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "MERN Stack", "Vercel"],
    thumb: "#1a0a0a",
    challenge:
      "Running a restaurant means managing a dozen moving parts simultaneously: waiter orders, kitchen queues, inventory, daily finances, employee records, and end-of-day closing reports. The traditional approach is manual, error-prone, and slow. Zavia needed a complete centralized management system for every staff role from one secure dashboard.",
    built:
      "We built the complete Zavia platform on the MERN stack from scratch: secure role-based login, real-time order management for waiters, a live kitchen order queue, full menu and deals management, inventory tracking, a finance module, employee and customer records, daily sales reports, closing summaries, and cash denomination tracking. Every module was built around real restaurant workflows.",
    deliverables: [
      ["Secure Role-Based Login", "Protected access for staff, kitchen, and management roles."],
      [
        "Real-Time Order Management",
        "Waiters create orders live; kitchen sees a live queue instantly.",
      ],
      [
        "Menu & Deals Management",
        "Full menu control with pricing, categories, combos, and special deals.",
      ],
      [
        "Inventory Management",
        "Stock tracking with category organization and daily usage monitoring.",
      ],
      [
        "Finance Module",
        "Daily financial tracking, credit lists, and business flow visibility.",
      ],
      [
        "Sales & Closing Reports",
        "Daily summaries and end-of-day closing with cash denomination tracking.",
      ],
    ],
    results: [
      "Complete elimination of manual paperwork across all departments",
      "Real-time order flow: zero communication gaps between waiters and kitchen",
      "Full daily financial and operational visibility for management",
      "Daily closing reports generated in seconds, not manually compiled",
    ],
    quote: "From order to closing report: the entire restaurant runs through one system.",
  },
  {
    id: "leadpilot",
    icon: "🤖",
    img: "/img/portfolioPics/leadbuddy.webp",
    cat: "AI Automation / Lead Management",
    name: "LeadPilot: AI Lead System",
    headline:
      "AI-Powered Lead Management That Captures, Replies, Follows Up & Qualifies: Without a Single Human Touch",
    tagline: "Leads in. AI handles the rest.",
    h1: "LeadPilot Case Study: AI-Powered Lead Management & Automation System",
    metaTitle: "LeadPilot Case Study | AI Automation for Lead Management",
    metaDescription:
      "How Pixnix Digital built LeadPilot, an AI-powered lead management system that captures, replies to, follows up with, and qualifies leads automatically with no human touch required.",
    keywords:
      "AI lead management system, AI automation case study, lead qualification automation, AI-powered CRM automation, business process automation agency, AI lead capture system",
    url: "https://lead-buddy-bot-12.lovable.app/",
    tech: [
      "AI Automation",
      "Multi-Channel Capture",
      "Auto-Reply Engine",
      "Follow-Up Sequences",
      "Lead Dashboard",
    ],
    thumb: "#05101a",
    challenge:
      "Most businesses lose leads not because they don't get enough enquiries: but because they respond too slowly and follow up inconsistently. A lead that doesn't hear back in the first few minutes is already talking to a competitor. LeadPilot was built to capture every lead, reply instantly, follow up automatically, and track every contact to a clear outcome.",
    built:
      "We built LeadPilot: a complete AI lead management and follow-up automation system. The platform captures leads from Instagram, Facebook, WhatsApp, and website forms into a centralized dashboard. The AI sends an instant reply the moment a lead arrives. If no response, the system automatically sends five follow-up messages at set intervals. Every lead is tracked through a pipeline: New → Replied → Follow-Up → Connected or Lost.",
    deliverables: [
      [
        "Multi-Channel Lead Capture",
        "Captures leads from Instagram, Facebook, WhatsApp, and website forms.",
      ],
      [
        "AI Instant Reply",
        "Personalized, on-brand reply sent automatically the moment a lead arrives.",
      ],
      [
        "Automated Follow-Up Sequences",
        "5 follow-up messages sent automatically if no response: zero manual chasing.",
      ],
      [
        "Lead Pipeline Dashboard",
        "Real-time view: New, Replied, Follow-Up, Connected, or Lost.",
      ],
      [
        "Full Conversation History",
        "Every AI reply and lead interaction logged and accessible.",
      ],
      [
        "Lead Outcome Tracking",
        "Clear connected vs lost reporting for pipeline performance visibility.",
      ],
    ],
    results: [
      "100% of leads receive an instant reply: no matter the time or day",
      "Automated 5-step follow-up runs without any manual input",
      "Zero leads fall through the cracks: every contact tracked to an outcome",
      "Full pipeline visibility from capture to conversion in one dashboard",
    ],
    quote:
      "The AI replies in seconds. It follows up five times. It never forgets a lead. You just watch the dashboard.",
  },
];

export default caseStudies;
