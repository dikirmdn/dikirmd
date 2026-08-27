import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Diki Ramadan - Freelance Web Developer",
    short_name: "Diki Ramadan",
    description:
      "Portfolio Diki Ramadan - Freelance Web Developer & Full-Stack Developer.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0a0a0a",
    icons: [
      {
        src: "/favicon.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
