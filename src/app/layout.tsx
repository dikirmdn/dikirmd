import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import LoadingScreen from "@/components/LoadingScreen";
import CursorSpotlight from "@/components/CursorSpotlight";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Diki Ramadan",
  description: "Portfolio Diki Ramadan",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="relative min-h-full flex flex-col">
        {/* Background Patterns - Same as Hero */}
        <div className="pointer-events-none fixed inset-0 bg-grid-pattern opacity-40" />
        <div className="pointer-events-none fixed inset-0 bg-dot-pattern opacity-30" />
        <div className="pointer-events-none fixed inset-0 bg-mesh-gradient" />
        
        <LoadingScreen />
        <CustomCursor />
        <CursorSpotlight />
        {children}
      </body>
    </html>
  );
}
