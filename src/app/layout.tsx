import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import CursorSpotlight from "@/components/CursorSpotlight";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://dikirmd.tech";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Diki Ramadan | Freelance Web Developer (Diki)",
    template: "%s | Diki Ramadan",
  },
  description:
    "Diki Ramadan (Diki) - Freelance Web Developer & Full-Stack Developer asal Indonesia. Membangun website modern, responsif, dan cepat menggunakan Next.js, React, dan TypeScript.",
  applicationName: "Diki Ramadan Portfolio",
  authors: [{ name: "Diki Ramadan", url: siteUrl }],
  creator: "Diki Ramadan",
  publisher: "Diki Ramadan",
  generator: "Next.js",
  keywords: [
    "Diki",
    "Diki Ramadan",
    "Diki Ramadhan",
    "dikirmd",
    "dikirmdn",
    "freelance web developer",
    "freelance web developer Indonesia",
    "web developer freelance",
    "jasa pembuatan website",
    "full-stack developer",
    "Next.js developer",
    "React developer",
    "TypeScript developer",
    "portfolio web developer",
    "web developer Bandung",
  ],
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    alternateLocale: "en_US",
    url: siteUrl,
    siteName: "Diki Ramadan - Freelance Web Developer",
    title: "Diki Ramadan | Freelance Web Developer (Diki)",
    description:
      "Portfolio Diki Ramadan - Freelance Web Developer & Full-Stack Developer. Spesialisasi Next.js, React, dan TypeScript untuk website modern dan responsif.",
    images: [
      {
        url: "/hero-img.png",
        width: 1200,
        height: 630,
        alt: "Diki Ramadan - Freelance Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Diki Ramadan | Freelance Web Developer (Diki)",
    description:
      "Portfolio Diki Ramadan - Freelance Web Developer & Full-Stack Developer.",
    images: ["/hero-img.png"],
    creator: "@dikirmdnnn",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  verification: {
    // Ganti dengan kode verifikasi Google Search Console kamu
    // google: "your-google-site-verification-code",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Diki Ramadan",
  alternateName: ["Diki", "Diki Ramadhan", "dikirmd"],
  url: siteUrl,
  image: `${siteUrl}/hero-img.png`,
  jobTitle: "Freelance Web Developer",
  description:
    "Diki Ramadan adalah Freelance Web Developer dan Full-Stack Developer asal Indonesia yang membangun website modern menggunakan Next.js, React, dan TypeScript.",
  worksFor: {
    "@type": "Organization",
    name: "Freelance",
  },
  knowsAbout: [
    "Web Development",
    "Front-End Development",
    "Full-Stack Development",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
  ],
  sameAs: [
    "https://github.com/dikirmdn",
    "https://instagram.com/dikirmdnnn",
    "https://www.linkedin.com/in/diki-ramadan",
    "https://tiktok.com/@dkrmdnnn",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Diki Ramadan - Freelance Web Developer",
  alternateName: "Diki Ramadan Portfolio",
  url: siteUrl,
  inLanguage: "id-ID",
  author: {
    "@type": "Person",
    name: "Diki Ramadan",
  },
};

const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Diki Ramadan - Freelance Web Developer",
  image: `${siteUrl}/hero-img.png`,
  url: siteUrl,
  description:
    "Jasa freelance web developer oleh Diki Ramadan. Membangun website modern, responsif, dan cepat dengan Next.js, React, dan TypeScript.",
  areaServed: "ID",
  provider: {
    "@type": "Person",
    name: "Diki Ramadan",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="relative min-h-full flex flex-col">
        <ThemeProvider
        >
          {/* Background Patterns - Same as Hero */}
          <div className="pointer-events-none fixed inset-0 bg-grid-pattern opacity-40 dark:opacity-20" />
          <div className="pointer-events-none fixed inset-0 bg-dot-pattern opacity-30 dark:opacity-15" />
          <div className="pointer-events-none fixed inset-0 bg-mesh-gradient dark:opacity-50" />


          <CustomCursor />
          <CursorSpotlight />
          {children}
        </ThemeProvider>

        <Script
          id="ld-person"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Script
          id="ld-website"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Script
          id="ld-service"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(professionalServiceJsonLd),
          }}
        />
      </body>
    </html>
  );
}
