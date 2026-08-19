"use client";
import { useState } from "react";
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
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-16"
      style={{background:"radial-gradient(ellipse at 50% 10%, rgba(107,15,18,0.5) 0%, rgba(10,7,5,0) 60%)"}}>
      <div className="w-full max-w-sm">

        <div className="flex items-center justify-center gap-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"/>
          <span className="font-mono text-[#B8430E] text-[10px] uppercase tracking-widest">Evènman Prive</span>
        </div>

        <div className="relative w-44 aspect-square mx-auto mb-6 rounded-sm overflow-hidden border border-[rgba(212,180,131,0.2)] shadow-[0_0_60px_rgba(107,15,18,0.5)]">
          <Image src="/ant-mwen-ak-ou.jpg" alt="Ant Mwen ak Ou" fill className="object-cover"/>
        </div>

        <h1 className="font-display text-[#E8DFC8] text-3xl text-center mb-1">Ant Mwen ak Ou</h1>
        <p className="font-display text-[#D4B483] text-[10px] tracking-[0.2em] text-center mb-8">DEF FONDAMANTAL · Live Prive</p>

        <div className="bg-[#1C1410] border border-[rgba(212,180,131,0.15)] rounded-sm p-5 mb-6">
          <p className="font-mono text-[rgba(212,180,131,0.4)] text-[10px] uppercase tracking-widest mb-4">Sa k gen nan live la</p>
          <div className="space-y-3">
            {PERKS.map(([icon, text], i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-base flex-shrink-0">{icon}</span>
                <span className="text-[rgba(232,223,200,0.75)] text-sm">{text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <a href="/live"
            className="flex items-center justify-between bg-[#1C1410] border border-[rgba(212,180,131,0.25)] hover:border-[#B8430E] px-5 py-3.5 rounded-sm transition-colors">
            <div>
              <p className="font-display text-[#D4B483] text-sm">Te achte koleksyon $50</p>
              <p className="font-mono text-[10px] text-[rgba(212,180,131,0.4)]">Aksè gratis — klike pou antre</p>
            </div>
            <span className="text-[#D4B483] text-lg">→</span>
          </a>
          <a href={STRIPE_LIVE} target="_blank" rel="noreferrer"
            className="flex items-center justify-between bg-[rgba(107,15,18,0.2)] border border-[#6B0F12] hover:bg-[rgba(107,15,18,0.35)] px-5 py-3.5 rounded-sm transition-colors">
            <div>
              <p className="font-display text-[#E8DFC8] text-sm">Te achte Manifesto $20</p>
              <p className="font-mono text-[10px] text-[rgba(232,223,200,0.4)]">Ajoute aksè nan live la</p>
            </div>
            <span className="font-display text-[#D4B483] text-sm">+$20</span>
          </a>
          <a href={STRIPE_LIVE} target="_blank" rel="noreferrer"
            className="flex items-center justify-between bg-[#6B0F12] hover:bg-[#B8430E] px-5 py-3.5 rounded-sm transition-colors">
            <div>
              <p className="font-display text-[#E8DFC8] text-sm">Poko peye — jwenn aksè</p>
              <p className="font-mono text-[10px] text-[rgba(232,223,200,0.5)]">Peye pou gade live prive a</p>
            </div>
            <span className="font-display text-[#D4B483] text-sm">$20</span>
          </a>
        </div>

        <a href="/" className="block text-center text-[rgba(232,223,200,0.2)] text-xs mt-8 underline hover:text-[#B8430E]">Retounen</a>
      </div>
    </main>
  );
}
