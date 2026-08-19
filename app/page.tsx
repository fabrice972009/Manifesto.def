"use client";
import Image from "next/image";

const STRIPE_20   = "https://buy.stripe.com/28E4gyfDN4dTa6X0CZbwk0g";
const STRIPE_50   = "https://buy.stripe.com/6oU4gybnxeSxcf51H3bwk0e";
const STRIPE_LIVE = "https://buy.stripe.com/fZu00i0IT39P92T5Xjbwk0h";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-5 py-16"
      style={{background:"#0A0A0A"}}>

      {/* FLYER */}
      <div className="w-full max-w-sm mx-auto mb-8">
        <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden shadow-[0_0_60px_rgba(255,255,255,0.05)]">
          <Image src="/ant-mwen-ak-ou.jpg" alt="Ant Mwen ak Ou" fill className="object-cover"/>
        </div>
      </div>

      {/* LIVE CTA */}
      <div className="w-full max-w-sm mb-10 text-center">
        <a href="/live"
          className="flex items-center justify-center gap-2 bg-white hover:bg-gray-100 transition-colors text-black font-display tracking-widest uppercase text-sm px-6 py-4 rounded-sm w-full">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse flex-shrink-0"/>
          Jwenn Aksè — Live Prive
        </a>
      </div>

      {/* DIVIDER */}
      <div className="w-full max-w-sm border-t border-[rgba(255,255,255,0.08)] mb-8"/>

      {/* ALBUM LINKS */}
      <div className="w-full max-w-sm flex flex-col gap-3">
        <p className="font-mono text-[rgba(255,255,255,0.3)] text-[10px] uppercase tracking-widest text-center mb-1">Album — Manifesto</p>

        <a href="/bachaaa"
          className="flex items-center justify-between bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.09)] border border-[rgba(255,255,255,0.1)] px-5 py-3.5 rounded-sm transition-colors">
          <div>
            <p className="font-display text-white text-sm">Koute Album lan</p>
            <p className="font-mono text-[rgba(255,255,255,0.35)] text-[10px]">Gratis — fenèt limite</p>
          </div>
          <span className="text-[rgba(255,255,255,0.4)] text-lg">→</span>
        </a>

        <a href="/manifesto"
          className="flex items-center justify-between bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.09)] border border-[rgba(255,255,255,0.1)] px-5 py-3.5 rounded-sm transition-colors">
          <div>
            <p className="font-display text-white text-sm">Deja achte Manifesto</p>
            <p className="font-mono text-[rgba(255,255,255,0.35)] text-[10px]">Koute + Telechaje</p>
          </div>
          <span className="text-[rgba(255,255,255,0.4)] text-lg">→</span>
        </a>

        <a href="/collection"
          className="flex items-center justify-between bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.09)] border border-[rgba(255,255,255,0.1)] px-5 py-3.5 rounded-sm transition-colors">
          <div>
            <p className="font-display text-white text-sm">Deja achte Katalog</p>
            <p className="font-mono text-[rgba(255,255,255,0.35)] text-[10px]">Tout album + Telechaje</p>
          </div>
          <span className="text-[rgba(255,255,255,0.4)] text-lg">→</span>
        </a>

        <a href={STRIPE_20} target="_blank" rel="noreferrer"
          className="flex items-center justify-between bg-white hover:bg-gray-100 transition-colors text-black px-5 py-3.5 rounded-sm">
          <div>
            <p className="font-display text-sm">Achte Manifesto</p>
            <p className="font-mono text-[rgba(0,0,0,0.5)] text-[10px]">Telechaje pou toujou</p>
          </div>
          <span className="font-display font-bold text-sm">$20</span>
        </a>

        <a href={STRIPE_50} target="_blank" rel="noreferrer"
          className="flex items-center justify-between bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.12)] transition-colors text-white px-5 py-3.5 rounded-sm">
          <div>
            <p className="font-display text-sm">Manifesto + Diskografi</p>
            <p className="font-mono text-[rgba(255,255,255,0.35)] text-[10px]">Tout album yo</p>
          </div>
          <span className="font-display text-sm">$50</span>
        </a>
      </div>

      <p className="text-[rgba(255,255,255,0.15)] text-xs mt-10">© Def Fondamantal — Tout dwa rezève</p>
    </main>
  );
}
