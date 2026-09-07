import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ant Mwen ak Ou — 35 Bouji Pou Dèf | Fond4Mantal",
  description: "35 ane apre, Dèf ap selebre lavi ak mizik. Yon sware espesyal — 35 mizik, 35 bouji. 13 Septanm 2026 · 10PM. Ant Mwen ak Ou.",
  openGraph: {
    title: "Ant Mwen ak Ou — 35 Bouji Pou Dèf",
    description: "Vin selebre 35 ane Dèf avèk nou. 35 mizik. 35 bouji. 13 Septanm 2026 · 10PM.",
    images: ["/35bouji-flyer2.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ant Mwen ak Ou — 35 Bouji Pou Dèf",
    description: "Vin selebre 35 ane Dèf avèk nou. 35 mizik. 35 bouji. 13 Septanm 2026 · 10PM.",
    images: ["/35bouji-flyer2.jpg"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
