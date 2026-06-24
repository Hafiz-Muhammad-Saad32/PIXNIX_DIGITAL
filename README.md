# Pixnix Digital - Premium React Landing Page

A modern, high-performance React application built with Vite, Tailwind CSS, and Framer Motion. This is a premium creative digital agency website featuring smooth animations, responsive design, and interactive components.

## 🚀 Features

✨ **Modern Stack**
- React 18+ with Hooks
- Vite for lightning-fast builds
- Tailwind CSS for utility-first styling
- Framer Motion for premium animations
- Fully responsive design (mobile-first)

🎨 **Premium UI/UX**
- Scroll-triggered reveal animations
- Smooth page transitions
- Custom animated cursor
- Floating mesh backgrounds
- Glassmorphism effects
- Interactive portfolio cards
- Premium hover depth effects
- Animated gradients
- Sticky navbar with blur effect

⚡ **Performance Optimized**
- Code splitting with Vite
- Lazy loading optimized
- GPU-accelerated animations
- Optimized bundle size
- Fast first paint

📱 **Fully Responsive**
- Mobile-first architecture
- Tablet optimized
- Desktop optimized
- Touch-friendly interactions
- Adaptive typography & spacing

## 📁 Project Structure

```
pixnix-digital/
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Logo.jsx
│   │   │   ├── Button.jsx
│   │   │   ├── SectionChip.jsx
│   │   │   ├── CustomCursor.jsx
│   │   │   └── Footer.jsx
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── Portfolio.jsx
│   │   │   └── CTA.jsx
│   │   └── animations/
│   │       ├── ScrollReveal.jsx
│   │       └── FloatingMesh.jsx
│   ├── hooks/
│   │   └── useScrollReveal.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

## 🔧 Installation & Setup

### Prerequisites
- Node.js 16+ and npm/yarn installed

### 1. Clone or Extract the Project
```bash
cd pixnix-digital
```

### 2. Install Dependencies
```bash
npm install
```

Or with yarn:
```bash
yarn install
```

### 3. Start Development Server
```bash
npm run dev
```

Or with yarn:
```bash
yarn dev
```

The app will open at `http://localhost:5173`

### 4. Build for Production
```bash
npm run build
```

### 5. Preview Production Build
```bash
npm run preview
```

## 📦 Dependencies

### Core
- **react**: ^18.2.0 - UI library
- **react-dom**: ^18.2.0 - React DOM rendering

### Animation & Motion
- **framer-motion**: ^10.16.4 - Professional animation library
- **three**: ^r157 - 3D graphics (optional)
- **@react-three/fiber**: ^8.13.0 - React Three.js renderer (optional)
- **@react-three/drei**: ^9.88.0 - Three.js helpers (optional)

### Styling
- **tailwindcss**: ^3.3.6 - Utility-first CSS
- **postcss**: ^8.4.31 - CSS processing
- **autoprefixer**: ^10.4.16 - Vendor prefixing

### Build Tools
- **vite**: ^5.0.8 - Next-gen build tool
- **@vitejs/plugin-react**: ^4.2.1 - Vite React plugin

### Utilities
- **clsx**: ^2.0.0 - Conditional classnames

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  primary: {
    pink: '#E8007D',
    pink2: '#FF2DA0',
    pink3: '#FF6EC4',
  },
  secondary: {
    teal: '#00B4A0',
    teal2: '#00E5CC',
  },
  dark: {
    base: '#030A0D',
    // ... more colors
  }
}
```

### Fonts
Fonts are configured in `tailwind.config.js`:
- **Syne**: Bold headings
- **DM Sans**: Body text

Add more Google Fonts in `index.html` and configure in Tailwind.

### Animation Timing
Adjust animation durations in:
- `tailwind.config.js` - keyframes and animations
- Component files - Framer Motion transitions
- `src/index.css` - CSS animations

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: 1024px+
- **Ultra-wide**: 1920px+

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### GitHub Pages
Update `vite.config.js`:
```javascript
export default defineConfig({
  base: '/repository-name/',
  // ...
})
```

Then build and deploy:
```bash
npm run build
```

## 🔍 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance Tips

1. **Image Optimization**: Use WebP or optimized JPGs
2. **Lazy Loading**: Already implemented for sections
3. **Code Splitting**: Automatically done by Vite
4. **Asset Compression**: Enable gzip on your hosting
5. **CDN**: Use a CDN for static assets
6. **Analytics**: Add your favorite analytics tool

## 📝 Content Management

To modify content, edit the respective section components:

- **Hero**: `src/components/sections/Hero.jsx`
- **About**: `src/components/sections/About.jsx`
- **Services**: `src/components/sections/Services.jsx`
- **Portfolio**: `src/components/sections/Portfolio.jsx`
- **CTA**: `src/components/sections/CTA.jsx`
- **Footer**: `src/components/common/Footer.jsx`

## 🎓 Key Components

### ScrollReveal
Handles scroll-triggered animations:
```jsx
<ScrollReveal direction="up" delay={0.1}>
  <div>Content to reveal</div>
</ScrollReveal>
```

### Button Components
```jsx
<Button variant="primary">Click me</Button>
<ButtonLink href="#" variant="secondary">Link</ButtonLink>
```

### FloatingMesh
Animated background gradients:
```jsx
<FloatingMesh />
```

### CustomCursor
Interactive cursor effect - automatically enabled

## 📞 Contact & Support

- **WhatsApp**: +92 309 3210056
- **Email**: pixnixdesign@gmail.com
- **Instagram**: @pixnix_digital

## 📄 License

This project is provided as-is for commercial use.

## 🔄 Updates & Maintenance

Keep dependencies updated:
```bash
npm update
```

Check for vulnerabilities:
```bash
npm audit
```

## 🎯 Performance Metrics

Target metrics to maintain:
- **Lighthouse Score**: 90+
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🛠️ Troubleshooting

### Port already in use
```bash
npx kill-port 5173
npm run dev
```

### Build issues
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Styling not working
Clear Tailwind cache:
```bash
rm -rf .next # if using Next.js
npm run build
```

## 🌟 Future Enhancements

- [ ] Three.js 3D elements
- [ ] Dark mode toggle
- [ ] Multi-language support
- [ ] CMS integration
- [ ] Analytics integration
- [ ] Email notifications
- [ ] Blog section
- [ ] Team members page

---

**Made with ❤️ by Pixnix Digital**

Built for premium brands that deserve premium execution.
