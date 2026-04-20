// nexus — app/layout.tsx

import type { Metadata } from "next";
import { DM_Serif_Display, DM_Mono, Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const serif = DM_Serif_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const mono = DM_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const sans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nexus — Where great teams ship faster",
  description: "Nexus brings your projects, team, and timelines into one beautiful workspace. Stop context-switching. Start shipping.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${serif.variable} ${mono.variable} ${sans.variable} bg-background text-text`}
        style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
