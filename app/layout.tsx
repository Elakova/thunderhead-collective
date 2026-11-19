import type { Metadata, Viewport } from "next";
import { Inter, Spline_Sans_Mono } from "next/font/google";
import Header from "@/components/Header";
import { site } from "@/lib/site";
import "./globals.css";

// Inter with the optical-size axis gives the "Display" cut at large sizes.
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap", axes: ["opsz"] });
const mono = Spline_Sans_Mono({ subsets: ["latin"], variable: "--font-mono-face", display: "swap", weight: ["400", "500"] });

export const metadata: Metadata = {
  title: { default: `${site.name} — ${site.role.join(" ")}`, template: `%s — ${site.name}` },
  description: site.description,
};

export const viewport: Viewport = { themeColor: "#000000" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
