import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteNav } from "@/components/site-nav";
import { profile } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: profile.name, template: "%s | " + profile.name },
  description: "Research, projects, and academic experience of Hayeon Yun in Biomedical Engineering at Northwestern University.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body id="top" className="antialiased">
        <a href="#main-content" className="skip-link">Skip to content</a>
        <SiteNav />
        <main id="main-content" tabIndex={-1} className="site-container page-main">
          {children}
        </main>
      </body>
    </html>
  );
}
