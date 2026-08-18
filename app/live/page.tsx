"use client";
import { useState } from "react";
import Image from "next/image";

const STRIPE_LIVE_UPGRADE = "https://buy.stripe.com/fZu00i0IT39P92T5Xjbwk0h";

// ── Remplace sa ak vre lyen Zoom/StreamYard/YouTube Private ou a ──────────
const LIVE_LINK = "https://"; // ← mete lyen live ou la
// ─────────────────────────────────────────────────────────────────────────

const PERKS = [
  { icon: "💬", text: "Kesyon/repons ak atis la an dirèk" },
  { icon: "🎧", text: "Diskisyon sou chak mòso album lan" },
  { icon: "🎶", text: "Vèsyon inedite / akoustik" },
  { icon: "👀", text: "Kontni ki poko janm pibliye" },
  { icon: "📹", text: "Koulise kreyasyon album lan" },
  { icon: "❤️", text: "Moman pèsonèl ak moun ki sipòte" },
  { icon: "🎁", text: "Sipriz eksklizif nan fen an" },
];

type Stage = "gate" | "upgrade" | "access";

function Gate({ onResult }: { onResult: (stage: Stage) => void }) {
  const [email, setEmail]     = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault(); setError(""); setLoading(true);
    const res  = await fetch("/api/verify-live", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    const data = await res.json();
    setLoading(false);
    if (data.valid) {
      onResult("access");
    } else {
      // Check if they're a $20 buyer who needs to upgrade
      const res2 = await fetch("/api/verify-email", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data2 = await res2.json();
      if (data2.valid) onResult("upgrade");
      else setError("Imel sa a pa nan lis la. Verifye epi eseye ankò.");
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
      style={{ background: "radial-gradient(ellipse at 50% 20%, rgba(107,15,18,0.5) 0%, rgba(10,7,5,0) 65%)" }}>

      {/* Live badge */}
      <div className="flex items-center gap-2 bg-[#6B0F12] px-4 py-1.5 rounded-full mb-8">
        <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse"/>
        <span className="font-mono text-[#E8DFC8] text-xs uppercase tracking-widest">Live Prive</span>
      </div>

      <div className="relative w-44 aspect-square mb-6 rounded-sm overflow-hidden border border-[rgba(212,180,131,0.2)] shadow-[0_0_80px_rgba(107,15,18,0.6)]">
        <Image src="/cover.png" alt="Manifesto" fill className="object-cover"/>
      </div>

      <h1 className="font-display text-[#E8DFC8] text-3xl md:text-4xl mb-2">Ant Mwen ak Ou</h1>
      <p className="font-display text-[#D4B483] text-xs tracking-[0.2em] mb-2">DEF FONDAMANTAL</p>
      <p className="text-[rgba(232,223,200,0.5)] text-sm mb-8">Pèfòmans live prive — aksè eksklizif</p>

      <p className="text-[rgba(232,223,200,0.6)] text-sm max-w-xs mb-6 leading-relaxed">
        Antre imel ou te itilize pou achte pou jwenn aksè.
      </p>

      <form onSubmit={submit} className="w-full max-w-sm flex flex-col gap-3">
        <input type="email" required placeholder="imel@egzanp.com" value={email}
          onChange={e => setEmail(e.target.value)}
          className="bg-[#1C1410] border border-[rgba(212,180,131,0.3)] text-[#E8DFC8] placeholder:text-[rgba(232,223,200,0.3)] px-4 py-3 rounded-sm text-sm focus:outline-none focus:border-[#B8430E]"/>
        <button type="submit" disabled={loading}
          className="bg-[#6B0F12] hover:bg-[#B8430E] transition-colors text-[#E8DFC8] font-display tracking-widest uppercase text-sm py-3 rounded-sm disabled:opacity-50">
          {loading ? "N ap verifye…" : "Jwenn Aksè"}
        </button>
        {error && <p className="text-[#B8430E] text-xs text-center">{error}</p>}
      </form>
      <a href="/" className="text-[rgba(232,223,200,0.2)] text-xs mt-8 underline hover:text-[#B8430E]">Retounen</a>
    </div>
  );
}

function UpgradePrompt() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
      style={{ background: "radial-gradient(ellipse at 50% 20%, rgba(107,15,18,0.4) 0%, rgba(10,7,5,0) 60%)" }}>

      <div className="flex items-center gap-2 bg-[#6B0F12] px-4 py-1.5 rounded-full mb-8">
        <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse"/>
        <span className="font-mono text-[#E8DFC8] text-xs uppercase tracking-widest">Live Prive</span>
      </div>

      <div className="relative w-44 aspect-square mb-6 rounded-sm overflow-hidden border border-[rgba(212,180,131,0.2)] shadow-[0_0_60px_rgba(107,15,18,0.5)]">
        <Image src="/cover.png" alt="Manifesto" fill className="object-cover"/>
      </div>

      <h1 className="font-display text-[#E8DFC8] text-2xl md:text-3xl mb-3">Ant Mwen ak Ou</h1>
      <p className="font-display text-[#D4B483] text-xs tracking-[0.2em] mb-6">DEF FONDAMANTAL</p>

      <div className="max-w-sm bg-[#1C1410] border border-[rgba(212,180,131,0.2)] rounded-sm p-5 mb-6 text-left">
        <p className="font-display text-[#D4B483] text-sm mb-4">Sa k gen nan live la:</p>
        <div className="space-y-2.5">
          {PERKS.map((p,i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="text-base flex-shrink-0">{p.icon}</span>
              <span className="text-[rgba(232,223,200,0.7)] text-sm">{p.text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full max-w-sm bg-[rgba(107,15,18,0.2)] border border-[#6B0F12] rounded-sm p-4 mb-6">
        <p className="text-[rgba(232,223,200,0.7)] text-xs mb-1">Ou te achte Manifesto pou $20</p>
        <p className="text-[#E8DFC8] text-sm">Peye $20 anplis pou jwenn aksè nan evènman prive sa a.</p>
      </div>

      <a href={STRIPE_LIVE_UPGRADE} target="_blank" rel="noreferrer"
        className="w-full max-w-sm flex items-center justify-between bg-[#6B0F12] hover:bg-[#B8430E] transition-colors px-5 py-4 rounded-sm">
        <div className="text-left">
          <p className="font-display text-[#E8DFC8] text-sm tracking-wide">Jwenn Aksè nan Live la</p>
          <p className="font-mono text-[rgba(232,223,200,0.5)] text-[10px]">Pèfòmans prive · Ant Mwen ak Ou</p>
        </div>
        <span className="font-display text-[#D4B483]">$20</span>
      </a>

      <a href="/" className="text-[rgba(232,223,200,0.2)] text-xs mt-6 underline hover:text-[#B8430E]">Retounen</a>
    </div>
  );
}

function LiveAccess() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
      style={{ background: "radial-gradient(ellipse at 50% 10%, rgba(107,15,18,0.5) 0%, rgba(10,7,5,0) 55%)" }}>

      {/* Live badge */}
      <div className="flex items-center gap-2 bg-[#6B0F12] px-4 py-1.5 rounded-full mb-8">
        <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse"/>
        <span className="font-mono text-[#E8DFC8] text-xs uppercase tracking-widest">Ou gen aksè ✓</span>
      </div>

      <div className="relative w-44 aspect-square mb-6 rounded-sm overflow-hidden border border-[rgba(212,180,131,0.2)] shadow-[0_0_80px_rgba(107,15,18,0.6)]">
        <Image src="/cover.png" alt="Manifesto" fill className="object-cover"/>
      </div>

      <h1 className="font-display text-[#E8DFC8] text-3xl md:text-4xl mb-2">Ant Mwen ak Ou</h1>
      <p className="font-display text-[#D4B483] text-xs tracking-[0.2em] mb-8">DEF FONDAMANTAL · Live Prive</p>

      {/* Perks */}
      <div className="max-w-sm w-full bg-[#1C1410] border border-[rgba(212,180,131,0.15)] rounded-sm p-5 mb-8 text-left">
        <p className="font-mono text-[rgba(212,180,131,0.4)] text-[10px] uppercase tracking-widest mb-4">Sa k gen nan live la</p>
        <div className="space-y-3">
          {PERKS.map((p,i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="text-base flex-shrink-0">{p.icon}</span>
              <span className="text-[rgba(232,223,200,0.75)] text-sm">{p.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      {LIVE_LINK && LIVE_LINK !== "https://" ? (
        <a href={LIVE_LINK} target="_blank" rel="noreferrer"
          className="w-full max-w-sm flex items-center justify-center gap-3 bg-[#6B0F12] hover:bg-[#B8430E] transition-colors px-6 py-4 rounded-sm font-display text-[#E8DFC8] tracking-widest uppercase text-sm">
          <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse"/>
          Rejoindre Live la
        </a>
      ) : (
        <div className="w-full max-w-sm bg-[#1C1410] border border-[rgba(212,180,131,0.2)] rounded-sm px-6 py-4 text-center">
          <p className="font-mono text-[rgba(212,180,131,0.5)] text-xs uppercase tracking-widest mb-2">Lyen ap disponib</p>
          <p className="text-[rgba(232,223,200,0.6)] text-sm">Retounen sou paj sa a lè live la kòmanse.</p>
        </div>
      )}

      <p className="text-[rgba(232,223,200,0.25)] text-xs mt-6">
        Refresh paj sa a lè live la kòmanse pou wè bouton an.
      </p>
    </div>
  );
}

export default function LivePage() {
  const [stage, setStage] = useState<Stage>("gate");

  if (stage === "gate")    return <Gate onResult={setStage} />;
  if (stage === "upgrade") return <UpgradePrompt />;
  return <LiveAccess />;
}
