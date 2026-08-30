export interface Project {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
  demoUrl: string;
  sourceUrl: string;
  year: string;
  category: string;
  problem: string;
  solution: string;
  impact: string;
  features: string[];
}

export const projects: Project[] = [
  {
    slug: 'room-booking',
    title: 'Room Booking',
    description:
      'Web based room reservation system with real-time booking management and schedule tracking.',
    tech: ['Laravel', 'MySQL', 'TailwindCSS', 'Alpinejs'],
    image: '/bookings.png',
    demoUrl: 'https://bookingroom.dsi.co.id',
    sourceUrl: '',
    year: '2025',
    category: 'Internal Tool',
    problem:
      'Employees at DSI relied on manual coordination and spreadsheets to reserve meeting rooms, which frequently caused double-bookings, scheduling conflicts, and wasted time confirming availability.',
    solution:
      'I built a web-based room reservation system with real-time availability, a filterable room list, and a clear booking flow. Each room shows its facilities, capacity, and current status so staff can reserve the right space in seconds.',
    impact:
      'Eliminated double-bookings and manual back-and-forth. Room utilization became transparent across the company, and booking a room now takes under a minute instead of several messages.',
    features: [
      'Real-time room availability tracking',
      'Filter rooms by floor, capacity, and facilities',
      'Booking schedule with conflict prevention',
      'Responsive interface for desktop and mobile',
    ],
  },
  {
    slug: 'competency-test',
    title: 'Competency Test for Prospective Employees',
    description:
      'Online employee assessment platform with interactive tests.',
    tech: ['Laravel', 'MySQL', 'TailwindCSS', 'Alpinejs'],
    image: '/iqtest.png',
    demoUrl: 'https://demo.dikirmd.tech',
    sourceUrl: '',
    year: '2026',
    category: 'Assessment Platform',
    problem:
      'Assessing candidates during recruitment was done manually with paper-based tests, making scoring slow, inconsistent, and difficult to analyze at scale.',
    solution:
      'I developed an online assessment platform with interactive IQ and aptitude tests, timed sessions, and automatic scoring. The system presents questions in a clean, distraction-free interface and instantly computes results.',
    impact:
      'Reduced assessment and scoring time from hours to minutes, removed human scoring errors, and gave the HR team structured data to compare candidates objectively.',
    features: [
      'Interactive timed IQ and aptitude tests',
      'Automatic scoring and result calculation',
      'Clean, distraction-free test interface',
      'Structured candidate result reporting',
    ],
  },
  {
    slug: 'recruitment-portal',
    title: 'DSI Recruitment Portal',
    description:
      'A professional recruitment platform for DSI that enables job seekers to explore career opportunities, submit applications online, and streamline the hiring process efficiently.',
    tech: ['Laravel', 'MySQL', 'TailwindCSS', 'Alpinejs'],
    image: '/karir.png',
    demoUrl: 'https://karir.dsi.co.id',
    sourceUrl: '',
    year: '2026',
    category: 'Recruitment Platform',
    problem:
      'DSI had no centralized channel for job openings. Applications arrived through scattered emails and messages, making it hard to track candidates and present a professional employer brand.',
    solution:
      'I created a professional recruitment portal where job seekers can browse open positions, view details, and submit applications online. The platform centralizes all applicants and reflects the company brand.',
    impact:
      'Centralized every application in one place, improved the candidate experience, and strengthened DSI\u2019s employer branding with a modern, trustworthy careers site.',
    features: [
      'Public job listings with detailed descriptions',
      'Online application submission',
      'Centralized applicant management',
      'Branded, professional careers experience',
    ],
  },
  {
    slug: 'architect-landing-page',
    title: 'Architect Company - Landing Page',
    description:
      'A modern, animated landing page for an architecture studio with smooth GSAP animations.',
    tech: ['Next.js', 'TailwindCSS', 'GSAP'],
    image: '/archi.png',
    demoUrl: 'https://archi.dikirmd.tech',
    sourceUrl: '',
    year: '2026',
    category: 'Landing Page',
    problem:
      'Creating an engaging and modern online presence for an architecture studio that effectively showcases projects and services while providing a seamless user experience.',
    solution:
      'Developed a professional landing page using Next.js and TailwindCSS, featuring smooth GSAP animations, responsive design, and interactive elements to create a premium user experience.',
    impact:
      'Delivered a visually stunning and user-friendly website that effectively represents the architecture studio, enhances brand identity, and provides a platform for showcasing projects and services.',
    features: [
      'Smooth GSAP animations and transitions',
      'Responsive and mobile-first design',
      'Modern UI',
      'Interactive navigation and scrolling',
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
