# Quick Start Guide

## 🚀 Get Started in 3 Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Open Browser
Navigate to [http://localhost:3000](http://localhost:3000)

---

## 🎨 Customization Guide

### Update Your Information

#### Hero Section (`src/components/Hero.tsx`)
```tsx
// Line 108-115: Update your name and tagline
<h1>
  Your Name
  <br />
  <span>Your Title</span>
</h1>
<p>Your tagline here</p>
```

#### About Section (`src/components/About.tsx`)
```tsx
// Line 35-40: Update statistics
const stats = [
  { label: 'Years Experience', value: '5+' },
  { label: 'Projects Completed', value: '50+' },
  // ... add your stats
];

// Line 60-66: Update bio
<p>Your bio here...</p>
```

#### Skills Section (`src/components/Skills.tsx`)
```tsx
// Line 42-51: Add/remove technologies
const skills = [
  { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
  // ... add your skills
];
```

#### Projects Section (`src/components/Projects.tsx`)
```tsx
// Line 28-47: Add your projects
const projects = [
  {
    title: 'Project Name',
    description: 'Project description',
    tech: ['Tech1', 'Tech2'],
    image: '/path-to-image.jpg',
  },
];
```

#### Experience Section (`src/components/Experience.tsx`)
```tsx
// Line 23-42: Update work history
const experiences = [
  {
    year: '2024 - Present',
    title: 'Your Job Title',
    company: 'Company Name',
    description: 'What you did',
  },
];
```

#### Contact Section (`src/components/Contact.tsx`)
```tsx
// Line 42-47: Update social links
const socials = [
  { icon: FaGithub, href: 'https://github.com/yourusername', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
  // ... update your links
];
```

---

## 🎯 Key Features

✅ **3D Hero Section** - Interactive Three.js scene with floating geometry  
✅ **Smooth Animations** - GSAP-powered scroll animations  
✅ **Glassmorphism UI** - Modern glass effect cards  
✅ **Custom Cursor** - Premium cursor with glow effect (desktop)  
✅ **Loading Screen** - Cinematic intro animation  
✅ **Scroll Progress** - Visual progress indicator  
✅ **Responsive Design** - Mobile-first approach  
✅ **Dark Theme** - Luxury black and silver palette  

---

## 📦 Build for Production

```bash
npm run build
npm start
```

---

## 🚢 Deploy to Vercel

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click Deploy

---

## 🛠️ Tech Stack

- Next.js 16.2.6
- React 19
- TypeScript
- Tailwind CSS v4
- Three.js + React Three Fiber
- GSAP + ScrollTrigger
- React Icons

---

## 💡 Tips

- **Performance**: The 3D scene is optimized but may impact mobile performance
- **Customization**: All colors are in `src/app/globals.css`
- **Icons**: Find more icons at [react-icons.github.io](https://react-icons.github.io)
- **3D Objects**: Modify sphere properties in `Hero.tsx` for different effects

---

## 🐛 Troubleshooting

**Build fails?**
```bash
rm -rf .next node_modules
npm install
npm run build
```

**3D scene not showing?**
- Check browser console for WebGL errors
- Ensure browser supports WebGL 2.0

**Animations not smooth?**
- Reduce number of animated elements
- Adjust GSAP duration values

---

## 📝 License

MIT - Use freely for your portfolio!
