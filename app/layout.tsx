import type { Metadata } from "next";
import { Cinzel, Work_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Cinzel({ subsets: ["latin"], weight: ["500", "700", "900"], variable: "--font-display" });
const body = Work_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-body" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Manifesto — Def Fondamantal",
  description: "Preorder Manifesto by Def Fondamantal. Out July 31.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="grain font-body relative">{children}</body>
    </html>
  );
}
