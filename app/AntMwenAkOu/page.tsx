"use client";
import Image from "next/image";

const STRIPE_LIVE = "https://buy.stripe.com/fZu00i0IT39P92T5Xjbwk0h";

const PERKS = [
  ["💬","Kesyon/repons ak atis la an dirèk"],
  ["🎧","Diskisyon sou chak mòso album lan"],
  ["🎶","Vèsyon inedite / akoustik"],
  ["👀","Kontni ki poko janm pibliye"],
  ["📹","Koulise kreyasyon album lan"],
  ["❤️","Moman pèsonèl ak moun ki sipòte"],
  ["🎁","Sipriz eksklizif nan fen an"],
];

export default function AntMwenAkOuPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-5 py-16"
      style={{background:"#0A0A0A"}}>
      <div className="w-full max-w-sm">

        {/* Flyer */}
        <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden shadow-[0_0_60px_rgba(255,255,255,0.05)] mb-8">
          <Image src="/ant-mwen-ak-ou.jpg" alt="Ant Mwen ak Ou" fill className="object-cover"/>
        </div>

        {/* Perks */}
        <div className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-sm p-5 mb-6">
          <p className="font-mono text-[rgba(255,255,255,0.3)] text-[10px] uppercase tracking-widest mb-4">Sa k gen nan live la</p>
          <div className="space-y-3">
            {PERKS.map(([icon, text], i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-base flex-shrink-0">{icon}</span>
                <span className="text-[rgba(255,255,255,0.7)] text-sm">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col gap-3">
          <a href="/live"
            className="flex items-center justify-between bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.12)] hover:bg-[rgba(255,255,255,0.1)] px-5 py-3.5 rounded-sm transition-colors">
            <div>
              <p className="font-display text-white text-sm">Te achte koleksyon $50</p>
              <p className="font-mono text-[rgba(255,255,255,0.35)] text-[10px]">Aksè gratis — klike pou antre</p>
            </div>
            <span className="text-[rgba(255,255,255,0.4)] text-lg">→</span>
          </a>
          <a href={STRIPE_LIVE} target="_blank" rel="noreferrer"
            className="flex items-center justify-between bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.12)] hover:bg-[rgba(255,255,255,0.1)] px-5 py-3.5 rounded-sm transition-colors">
            <div>
              <p className="font-display text-white text-sm">Te achte Manifesto $20</p>
              <p className="font-mono text-[rgba(255,255,255,0.35)] text-[10px]">Ajoute aksè nan live la</p>
            </div>
            <span className="font-display text-white text-sm">+$20</span>
          </a>
          <a href={STRIPE_LIVE} target="_blank" rel="noreferrer"
            className="flex items-center justify-between bg-white hover:bg-gray-100 transition-colors text-black px-5 py-3.5 rounded-sm">
            <div>
              <p className="font-display text-sm">Poko peye — jwenn aksè</p>
              <p className="font-mono text-[rgba(0,0,0,0.5)] text-[10px]">Peye pou gade live prive a</p>
            </div>
            <span className="font-display font-bold text-sm">$20</span>
          </a>
        </div>

        <a href="/" className="block text-center text-[rgba(255,255,255,0.2)] text-xs mt-8 hover:text-white transition-colors">← Retounen</a>
      </div>
    </main>
  );
}
