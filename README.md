# Premium 3D Developer Portfolio

A modern, futuristic 3D developer portfolio website with premium cinematic aesthetics built with Next.js 16, Three.js, and GSAP.

## Features

- **Hero Section**: Fullscreen immersive landing with interactive 3D floating geometric objects
- **About Section**: Elegant glassmorphism cards with animated statistics counters
- **Skills Section**: Interactive floating tech stack icons with magnetic hover effects
- **Projects Showcase**: Modern project cards with smooth animations
- **Experience Timeline**: Vertical animated timeline with elegant design
- **Contact Section**: Minimal glassmorphism form with social media links
- **Responsive Design**: Fully optimized for desktop and mobile devices
- **Dark Luxury Theme**: Black, charcoal, graphite, and soft silver palette

## Tech Stack

- **Next.js 16.2.6** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Utility-first CSS framework
- **Three.js** - 3D graphics library
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for react-three-fiber
- **GSAP** - Professional-grade animation library
- **React Icons** - Icon library

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Create a production build:

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Main page component
│   └── globals.css      # Global styles
└── components/
    ├── Hero.tsx         # Hero section with 3D scene
    ├── About.tsx        # About section with stats
    ├── Skills.tsx       # Skills section with icons
    ├── Projects.tsx     # Projects showcase
    ├── Experience.tsx   # Experience timeline
    ├── Contact.tsx      # Contact form
    └── Navbar.tsx       # Navigation bar
```

## Customization

### Update Personal Information

Edit the content in each component file:

- **Hero.tsx**: Update title and subtitle
- **About.tsx**: Modify stats and description
- **Skills.tsx**: Add/remove tech stack items
- **Projects.tsx**: Add your projects with descriptions
- **Experience.tsx**: Update work experience timeline
- **Contact.tsx**: Update social media links and form handler

### Color Scheme

The color palette is defined in `globals.css`. Modify CSS variables to change the theme:

```css
:root {
  --background: #0a0a0a;
  --foreground: #ededed;
}
```

### 3D Scene

Customize the 3D floating objects in `Hero.tsx` by modifying:
- Sphere sizes and positions
- Material properties (color, metalness, roughness)
- Light positions and intensities
- Animation speeds

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## Performance Optimization

- Lazy loading for 3D assets
- Optimized animations with GSAP
- Server Components for static content
- Client Components only where needed
- Responsive images and assets

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this template for your own portfolio.

## Credits

Built with modern web technologies and inspired by premium digital agency websites.
