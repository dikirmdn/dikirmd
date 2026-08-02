import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import LoadingScreen from "@/components/LoadingScreen";
import CursorSpotlight from "@/components/CursorSpotlight";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
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
          
          <LoadingScreen />
          <CustomCursor />
          <CursorSpotlight />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
